'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://docuhelper.bmserver.org/graphql',
	cache: new InMemoryCache(),
	credentials: 'include',
});
