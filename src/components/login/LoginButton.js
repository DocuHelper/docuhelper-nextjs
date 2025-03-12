"use client"

import useLoginStateHook from "@/customHook/useLoginStateHook";
import GoogleLoginButton from "@/components/login/googleLoginButton/GoogleLoginButton";
import {gql, useMutation, useQuery} from "@apollo/client";

const GET_LOGIN_USER_INFO = gql`
query LoginState {
    loginState {
        email
        uuid
    }
}
`

export default function LoginButton() {
    const [isLogin, logoutEv] = useLoginStateHook()
    const {loading, error, data} = useQuery(GET_LOGIN_USER_INFO)

    if (!isLogin) return <GoogleLoginButton/>;

    if (loading) return null;

    const {email, uuid} = data.loginState

    return <>
        <div className="flex gap-4 items-center">
            <p>{email}</p>
            <button onClick={logoutEv}>
                Logout
            </button>
        </div>
    </>
}