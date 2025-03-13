"use client"

import {useAppSelector} from "@/components/config/redux/hooks";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Dashboard() {
    const authStore = useAppSelector(state => state.auth)
    const router = useRouter();

    useEffect(() => {
        if (!authStore.user) {
            router.push("/");
        }
    }, [authStore.user, router])

    return <h1 className="text-5xl">email : {authStore.user?.email}</h1>;
}
