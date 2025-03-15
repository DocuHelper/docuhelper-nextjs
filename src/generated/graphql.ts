import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	Long: { input: any; output: any };
	URL: { input: any; output: any };
	UUID: { input: any; output: any };
};

export type BaseDomain = {
	uuid?: Maybe<Scalars['UUID']['output']>;
};

export type CreateDocumentRequestInput = {
	file: Scalars['UUID']['input'];
	name: Scalars['String']['input'];
};

export type CreateUploadUrlRequestInput = {
	extension: Scalars['String']['input'];
	name: Scalars['String']['input'];
	size: Scalars['Long']['input'];
};

export type Document = BaseDomain & {
	__typename?: 'Document';
	file: Scalars['UUID']['output'];
	name: Scalars['String']['output'];
	owner: Scalars['UUID']['output'];
	state: DocumentState;
	uuid?: Maybe<Scalars['UUID']['output']>;
};

export type DocumentQueryRequestInput = {
	name?: InputMaybe<Scalars['String']['input']>;
	owner?: InputMaybe<Scalars['UUID']['input']>;
	state?: InputMaybe<DocumentState>;
	uuid?: InputMaybe<Scalars['UUID']['input']>;
};

export enum DocumentState {
	Complate = 'COMPLATE',
	Embedding = 'EMBEDDING',
	Parsing = 'PARSING',
	Reading = 'READING',
}

export type Mutation = {
	__typename?: 'Mutation';
	createDocument: Document;
	testMutation: Scalars['String']['output'];
	uploadFileUrl: UploadUrl;
};

export type MutationCreateDocumentArgs = {
	request: CreateDocumentRequestInput;
};

export type MutationTestMutationArgs = {
	test: Scalars['String']['input'];
};

export type MutationUploadFileUrlArgs = {
	fileInfo: CreateUploadUrlRequestInput;
};

export type Query = {
	__typename?: 'Query';
	findDocument: Array<Document>;
	loginState?: Maybe<User>;
	testQuery: Scalars['String']['output'];
};

export type QueryFindDocumentArgs = {
	query: DocumentQueryRequestInput;
};

export type UploadUrl = {
	__typename?: 'UploadUrl';
	url: Scalars['URL']['output'];
	uuid: Scalars['UUID']['output'];
};

export type User = {
	__typename?: 'User';
	email: Scalars['String']['output'];
	uuid: Scalars['UUID']['output'];
};

export type CreateDocumentMutationVariables = Exact<{
	request: CreateDocumentRequestInput;
}>;

export type CreateDocumentMutation = {
	__typename?: 'Mutation';
	createDocument: {
		__typename?: 'Document';
		uuid?: any | null;
		name: string;
		state: DocumentState;
		owner: any;
		file: any;
	};
};

export type UploadFileUrlMutationVariables = Exact<{
	fileInfo: CreateUploadUrlRequestInput;
}>;

export type UploadFileUrlMutation = {
	__typename?: 'Mutation';
	uploadFileUrl: { __typename?: 'UploadUrl'; url: any; uuid: any };
};

export const CreateDocumentDocument = gql`
	mutation CreateDocument($request: CreateDocumentRequestInput!) {
		createDocument(request: $request) {
			uuid
			name
			state
			owner
			file
		}
	}
`;
export type CreateDocumentMutationFn = Apollo.MutationFunction<CreateDocumentMutation, CreateDocumentMutationVariables>;

/**
 * __useCreateDocumentMutation__
 *
 * To run a mutation, you first call `useCreateDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDocumentMutation, { data, loading, error }] = useCreateDocumentMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateDocumentMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateDocumentMutation, CreateDocumentMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateDocumentMutation, CreateDocumentMutationVariables>(CreateDocumentDocument, options);
}
export type CreateDocumentMutationHookResult = ReturnType<typeof useCreateDocumentMutation>;
export type CreateDocumentMutationResult = Apollo.MutationResult<CreateDocumentMutation>;
export type CreateDocumentMutationOptions = Apollo.BaseMutationOptions<
	CreateDocumentMutation,
	CreateDocumentMutationVariables
>;
export const UploadFileUrlDocument = gql`
	mutation UploadFileUrl($fileInfo: CreateUploadUrlRequestInput!) {
		uploadFileUrl(fileInfo: $fileInfo) {
			url
			uuid
		}
	}
`;
export type UploadFileUrlMutationFn = Apollo.MutationFunction<UploadFileUrlMutation, UploadFileUrlMutationVariables>;

/**
 * __useUploadFileUrlMutation__
 *
 * To run a mutation, you first call `useUploadFileUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileUrlMutation, { data, loading, error }] = useUploadFileUrlMutation({
 *   variables: {
 *      fileInfo: // value for 'fileInfo'
 *   },
 * });
 */
export function useUploadFileUrlMutation(
	baseOptions?: Apollo.MutationHookOptions<UploadFileUrlMutation, UploadFileUrlMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UploadFileUrlMutation, UploadFileUrlMutationVariables>(UploadFileUrlDocument, options);
}
export type UploadFileUrlMutationHookResult = ReturnType<typeof useUploadFileUrlMutation>;
export type UploadFileUrlMutationResult = Apollo.MutationResult<UploadFileUrlMutation>;
export type UploadFileUrlMutationOptions = Apollo.BaseMutationOptions<
	UploadFileUrlMutation,
	UploadFileUrlMutationVariables
>;
