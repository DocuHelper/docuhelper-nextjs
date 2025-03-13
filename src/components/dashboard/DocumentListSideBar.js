"use client"

import {gql, useQuery} from "@apollo/client";
import Document from "@/components/dashboard/Document";
import {useEffect, useRef, useState} from "react";

const FIND_DOCUMENT = gql`
query FindDocument(
    $owner: UUID,
) {
    findDocument(
        query: { 
            owner: $owner,
        }
    ) {
        file,
        name,
        owner,
        state,
        uuid
    }
}   
`
export default function DocumentListSideBar() {
    const tempRef = useRef()
    const [listSize, setListSize] = useState({
        width: undefined,
        height: undefined
    })
    const {loading, error, data} = useQuery(FIND_DOCUMENT, {
        variables: {
            owner: "c6751ab8-5fb5-44f7-8ab3-b326686b6640"
        }
    })

    useEffect(() => {
        if (loading) return

        if (listSize.width !== undefined) return

        const currentEl = tempRef.current

        if (currentEl === undefined) return

        if (listSize.width !== undefined) return

        setListSize({
            width: currentEl.offsetWidth,
            height: currentEl.offsetHeight
        })

    }, [loading, listSize]);


    if (loading) return null

    const {findDocument} = data


    return <>
        <div ref={tempRef} className="h-full">
            <ul style={{
                maxHeight: `${listSize.height}px`,
                minHeight: `${listSize.height}px`,
                maxWidth: `${listSize.width}px`,
                minWidth: `${listSize.width}px`,
            }} className="absolute flex flex-col overflow-auto scrollbar-hide">
                {
                    findDocument.map((document) => {
                        return <Document key={document.uuid} name={document.name} uuid={document.uuid}/>
                    })
                }
                {
                    findDocument.map((document) => {
                        return <Document key={document.uuid} name={document.name} uuid={document.uuid}/>
                    })
                }
                {
                    findDocument.map((document) => {
                        return <Document key={document.uuid} name={document.name} uuid={document.uuid}/>
                    })
                }
            </ul>
        </div>
    </>
}

// query FindDocument(
//     $file: UUID,
//     $name: String,
//     $owner: UUID,
//     $state: DocumentState,
//     $uuid: UUID
// ) {
//     findDocument(
//         query: {
//         owner: $owner,
//             name: $name,
//             state: $state,
//             uuid: $uuid
//     }
// ) {
//         file,
//             name,
//             owner,
//             state,
//             uuid
//     }
// }
// `