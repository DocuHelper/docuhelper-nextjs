"use client"
import {client} from "@/components/config/MyApolloClient";
import {ApolloProvider} from "@apollo/client";
import LoginState from "@/components/config/initState/LoginState";
import StoreProvider from "@/components/config/redux/StoreProvider";

export default function ({children}) {
    return <>
        <ApolloProvider client={client}>
            <StoreProvider>
                <LoginState/>
                {children}
            </StoreProvider>
        </ApolloProvider>
    </>
}