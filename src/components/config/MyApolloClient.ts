'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	// uri: 'https://docuhelper.bmserver.org/graphql',
	uri: process.env.NEXT_PUBLIC_DOCUHELPER_API_URL,
	cache: new InMemoryCache(),
	credentials: 'include',
});
