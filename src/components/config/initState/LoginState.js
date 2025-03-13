"use client"
import {useAppDispatch} from "@/components/config/redux/hooks";
import {useEffect} from "react";
import useLoginStateHook from "@/customHook/useLoginStateHook";
import {initAuthStore} from "@/components/config/redux/auth-slice";

export default function LoginState() {
    const dispatch = useAppDispatch()
    const {loginUser} = useLoginStateHook()

    useEffect(() => {
        dispatch(initAuthStore(loginUser))
    }, [loginUser, dispatch]);

    return null
}