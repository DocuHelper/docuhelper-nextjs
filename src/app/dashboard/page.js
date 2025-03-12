"use client"
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {useAppSelector} from "@/components/config/redux/hooks";

export default function DashBoard() {
    const authStore = useAppSelector(state => state.auth)
    const router = useRouter();

    useEffect(() => {
        if (!authStore.user) {
            router.push("/");
        }
    }, [])

    return <h1 className="text-5xl">email : {authStore.user?.email}</h1>;
}