"use client"

export default function DocumentItem({uuid, name, state}: {
    uuid: string,
    name: string,
    state: string
}) {

    return <li className="flex border-gray-400 p-4 last:border-b-0 hover:shadow-xl justify-between">
        <p>{name}</p>
        <p>{state}</p>
    </li>
}