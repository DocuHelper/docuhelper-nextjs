"use client"

export default function Document({uuid, name}) {

    return <li key={uuid} className="flex border-gray-400 p-4 last:border-b-0 hover:shadow-xl">
        {name}
    </li>
}