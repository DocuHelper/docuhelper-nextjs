"use client"
import {useCallback, useRef} from "react";
import {gql, useMutation} from "@apollo/client";
import {useDropzone} from "react-dropzone";

const GET_FILE_UPLOAD_URL = gql`
            mutation UploadFileUrl(
                $extension: String!,
                $name: String!,
                $size: Long!
            ) {
                uploadFileUrl(
                    fileInfo: { 
                            extension: $extension,
                            name: $name,
                            size: $size 
                    }
                ) {
                    url
                    uuid
                }
            }
        `

function defaultUploadOnComplete(fileUuid) {
    console.log("fileUploadComplet!!")
    console.log("fileUUID: ", fileUuid)
}

export default function FileUploader({
                                         uploadOnComplete = defaultUploadOnComplete
                                     }) {
    const fileInput = useRef(null)

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


    const [mutateFunction, {data, loading, error}] = useMutation(GET_FILE_UPLOAD_URL);

    if (loading) {
        return <h1>Loading...</h1>
    }


    return <>
        <div {...getRootProps()} className="border p-4 text-center border-dashed rounded-md"
             onClick={() => {
                 fileInput.current.click()
             }}
        >
            FileDropArea
            <input
                {...getInputProps()}
                className="hidden"
                type="file"
                ref={fileInput}
                onChange={async (event) => {
                    const file = event.target.files[0];
                    if (!file) return;

                    // 파일 정보 추출
                    const fileName = file.name;
                    const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1); // 확장자 추출
                    const fileSize = file.size;

                    // 파일 정보를 기반으로 업로드 URL 요청
                    const {
                        data: {
                            uploadFileUrl: {url, uuid},
                        },
                    } = await mutateFunction({
                        variables: {
                            extension: fileExtension,
                            name: fileName,
                            size: fileSize,
                        },
                    });

                    // PUT 요청으로 파일 바이너리 데이터 업로드
                    await fetch(url, {
                        method: "PUT",
                        headers: {
                            "Content-Type": file.type,
                        },
                        body: file,
                    });
                    uploadOnComplete(uuid)
                }}
            />
        </div>
    </>
}


function getFileUploadUrl() {

}