"use client"
import {RefObject, useCallback, useRef} from "react";
import {gql, useMutation} from "@apollo/client";
import {DropEvent, FileRejection, useDropzone} from "react-dropzone";
import {FileUploadUrl} from "@/type/response";

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

function defaultUploadOnComplete(fileUuid: string) {
    console.log("fileUploadComplet!!")
    console.log("fileUUID: ", fileUuid)
}

export default function FileUploader({uploadOnComplete = defaultUploadOnComplete}: {
    uploadOnComplete?: ((fileUuid: string) => void)
}) {
    const fileInput = useRef<HTMLInputElement | null>(null);
    const onDrop = async (acceptedFiles: File[]) => {
        // const file = event.target?.files[0];
        const file = acceptedFiles[0] as File
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
    };

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


    const [mutateFunction, {data, loading, error}] = useMutation<{ uploadFileUrl: FileUploadUrl }>(GET_FILE_UPLOAD_URL);

    if (loading) {
        return <h1>Loading...</h1>
    }


    return <>
        <div {...getRootProps()}
             className={`border p-4 text-center border-dashed rounded-md ${isDragActive && "border-purple-600"}`}
             onClick={() => fileInput.current && "click" in fileInput.current && fileInput?.current?.click()}
        >
            FileDropArea
            <input
                {...getInputProps()}
                type="file"
                ref={(ref) => {
                    fileInput.current = ref
                }}
            />
        </div>
    </>
}
