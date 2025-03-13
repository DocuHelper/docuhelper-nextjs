"use client"
import {client} from "@/components/config/MyApolloClient";
import {ApolloProvider} from "@apollo/client";
import StoreProvider from "@/components/config/redux/StoreProvider";

export default function WarpLayer({children}) {
    return <>
        <ApolloProvider client={client}>
            <StoreProvider>
                {children}
            </StoreProvider>
        </ApolloProvider>
    </>
}