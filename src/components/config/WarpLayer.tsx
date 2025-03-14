"use client"
import {ApolloProvider} from "@apollo/client";
import {client} from "@/components/config/MyApolloClient";
import StoreProvider from "@/components/config/redux/StoreProvider";
import React from "react";

export default function WarpLayer({children}:Readonly<{
    children: React.ReactNode
}>) {
    return <>
        <ApolloProvider client={client}>
            <StoreProvider>
                {children}
            </StoreProvider>
        </ApolloProvider>
    </>
}