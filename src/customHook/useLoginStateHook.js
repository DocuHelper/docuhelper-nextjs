"use client"

import {useEffect, useState} from "react";

export default function useLoginStateHook() {
    const [hasJwt, setHasJwt] = useState(undefined);

    useEffect(() => {
        setHasJwt(!!getJwtByCookie());
    }, []);

    return [hasJwt, logoutEv];
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

function logoutEv() {
    document.cookie = "JWT_TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
}