export type User = {
    email: string,
    uuid: string
}

export type Document = {
    file: string,
    name: string,
    owner: string,
    state: DocumentState,
    uuid: string
}

export type FileUploadUrl = {
    uuid: string,
    url: string
}

export type DocumentState = "READING" | "PARSING" | "EMBEDDING" | "COMPLETE"