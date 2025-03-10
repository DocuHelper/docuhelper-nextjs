"use client"
import {ApolloClient, InMemoryCache, ApolloProvider, gql, useMutation} from '@apollo/client';
import {useState} from "react";
import FileUploader from "@/components/test/file/FileUploader";

const CREATE_DOCUMENT = gql`
mutation CreateDocument(
    $file: UUID!,
    $name: String!,
) {
    createDocument(
        request: { 
            file: $file, 
            name: $name, 
        }
    ) {
        file
        name
        owner
        state
        uuid
    }
}
`

export default function CreateDocument() {

    const [mutateFunction, {data, loading, error}] = useMutation(CREATE_DOCUMENT)

    const [name, setName] = useState("테스트 문서")
    const [file, setFile] = useState("")
    const [owner, setOwner] = useState("0b98b024-5797-4a1e-a454-21ced7b4407c")
    const [state, setState] = useState("READING")

    const createDocumentBtnEv = () => {
        mutateFunction({
            variables: {
                name, file
            }
        })
    }

    return <>
        <div className="flex flex-col">
            <div>
                <label>name </label>
                <input value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
            </div>

            <div>
                <label>file </label>
                <input value={file} readOnly={true}/>
            </div>

            <FileUploader uploadOnComplete={fileUuid => {
                setFile(fileUuid)
            }} />
            <button
                    onClick={createDocumentBtnEv}
            >
                CreteDocument
            </button>
        </div>
    </>
}