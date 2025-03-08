"use client"
import {client} from "@/components/config/MyApolloClient";
import {ApolloProvider} from "@apollo/client";

export default function ({children}) {
    return <>
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    </>
}