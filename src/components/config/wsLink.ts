import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { HttpLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
	uri: process.env['NEXT_PUBLIC_DOCUHELPER_API_URL'] || '/graphql',
});

const wsLink = new GraphQLWsLink(
	createClient({
		url: process.env['NEXT_PUBLIC_DOCUHELPER_SUBSCRIPTION_URL'] || '/subscriptions',
	}),
);

export const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
	},
	wsLink,
	httpLink,
);
