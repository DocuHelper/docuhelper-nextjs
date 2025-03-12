"use client"
import {useAppDispatch, useAppSelector} from "@/components/config/redux/hooks";
import {useEffect} from "react";
import useLoginStateHook from "@/customHook/useLoginStateHook";
import {initLogin} from "@/components/config/redux/auth-slice";

export default function LoginState() {
    const dispatch = useAppDispatch()
    const {loginUser} = useLoginStateHook()

    useEffect(() => {
        dispatch(initLogin(loginUser))
    }, [loginUser]);

    return null
}