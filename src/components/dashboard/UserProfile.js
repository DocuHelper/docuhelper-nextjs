"use client"

import {useAppSelector} from "@/components/config/redux/hooks";

export default function UserProfile() {
    const authUser = useAppSelector(state => state.auth.user)

    return <div className="h-full flex p-4 items-center gap-4">
        <div className="h-full aspect-square rounded-full bg-white"></div>
        <p>{authUser.email}</p>
    </div>
}