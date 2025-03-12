"use client"

import {useEffect, useState} from "react";
import {gql, useLazyQuery, useQuery} from "@apollo/client";

const GET_LOGIN_USER_INFO = gql`
query LoginState {
    loginState {
        email
        uuid
    }
}
`
/**
 * 로그인 정보 조회
 *
 * @returns {{ loginUser: { email: string, uuid: string } | undefined | null, logout: () => void }}
 * */
export default function useLoginStateHook() {
    const [jwt, setJwt] = useState(undefined);
    const [loginUser, setLoginUser] = useState(undefined);

    const [getLoginUser, {loading, error, data}] = useLazyQuery(GET_LOGIN_USER_INFO)

    // 컴포넌트 마운트 시 Jwt 쿠키 정보 로드
    useEffect(() => {
        setJwt(getJwtByCookie())
    }, []);

    // 쿠키기반 인증정보 조회
    useEffect(() => {
        if (!jwt) {
            return;
        }
        getLoginUser()
            .then(({data: {loginState}}) => {
                // 로그인 정보 x -> Jwt 쿠키 파기 및 새로고침
                if (!loginState) {
                    logoutEv()
                }
                setLoginUser(loginState)
            })


    }, [jwt]);

    return {loginUser, logout};
}

function getJwtByCookie() {
    if (typeof document === 'undefined') {
        return null;
    }

    const jwtCookie = document.cookie.split(";")
        .map(value => value.trim())
        .map(value => value.split("="))
        .filter(value => value[0] === "JWT_TOKEN")
        .flat();

    return jwtCookie[1] || null;
}

function logout() {
    document.cookie = "JWT_TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
}