"use client"
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

export default function CreateDocumentTest() {

    console.log("!!!!")

    testGraphql();
    // testRestApi()

    return <>
        <h1>
            CreateDocumentTest
        </h1>
        <div>

        </div>
    </>
}

function testRestApi() {
    const body = {
        "name": "test",
        "state": "COMPLATE",
        "file": "5412812e-5570-4756-8d15-b1b9eba1b712",
        "owner": "5412812e-5570-4756-8d15-b1b9eba1b712"
    }
    fetch("http://localhost:8080/test").then(async value => {
        const result = await value.json()
        console.log(result)
    })
}
function testGraphql() {
    const client = new ApolloClient({
        uri: 'http://localhost:8080/graphql',
        cache: new InMemoryCache(),
    })

    client
        .query({
            query: gql`
            query TestQuery {
                testQuery
            }
        `
        })
        .then(result => {
            console.log(result)
        })
}