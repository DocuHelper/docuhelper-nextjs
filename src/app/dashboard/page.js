"use client"
import Dashboard from "@/components/dashboard/Dashboard";
import Link from "next/link";

export default function Page() {
    return <>
        <Dashboard/>
        <Link href={"/"}>
            Home
        </Link>
    </>
}