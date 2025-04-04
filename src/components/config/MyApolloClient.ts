'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { splitLink } from '@/components/config/wsLink';

export const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
	credentials: 'include',
});
