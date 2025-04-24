import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  LocalDateTime: { input: any; output: any; }
  Long: { input: any; output: any; }
  URL: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AnswerRefQueryRequestInput = {
  chat: Scalars['UUID']['input'];
  pagination?: InputMaybe<PaginationInput>;
};

export type AnswerRefWithChunk = {
  __typename?: 'AnswerRefWithChunk';
  answerRef: ChatAnswerRef;
  chunk: Chunk;
};

export type BaseDomain = {
  createDt: Scalars['LocalDateTime']['output'];
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type Chat = BaseDomain & {
  __typename?: 'Chat';
  createDt: Scalars['LocalDateTime']['output'];
  document: Scalars['UUID']['output'];
  result?: Maybe<Scalars['String']['output']>;
  state: ChatState;
  userAsk: Scalars['String']['output'];
  userUuid: Scalars['UUID']['output'];
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type ChatAnswerRef = BaseDomain & {
  __typename?: 'ChatAnswerRef';
  chat: Scalars['UUID']['output'];
  chunk: Scalars['UUID']['output'];
  createDt: Scalars['LocalDateTime']['output'];
  similarity: Scalars['Float']['output'];
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type ChatQueryRequestInput = {
  document?: InputMaybe<Scalars['UUID']['input']>;
  pagination?: InputMaybe<PaginationInput>;
};

export type ChatSendRequestInput = {
  ask: Scalars['String']['input'];
  document: Scalars['UUID']['input'];
};

export enum ChatState {
  Compete = 'COMPETE',
  Processing = 'PROCESSING'
}

export type Chunk = BaseDomain & {
  __typename?: 'Chunk';
  content: Scalars['String']['output'];
  createDt: Scalars['LocalDateTime']['output'];
  document: Scalars['UUID']['output'];
  embedContent: Array<Scalars['Float']['output']>;
  num: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type ChunkWithSimilarity = {
  __typename?: 'ChunkWithSimilarity';
  chunk: Chunk;
  similarity: Scalars['Float']['output'];
};

export type CounterResponse = {
  __typename?: 'CounterResponse';
  value: Scalars['Int']['output'];
};

export type CreateDocumentRequestInput = {
  file: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  type: DocumentType;
};

export type CreateUploadUrlRequestInput = {
  extension: Scalars['String']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Long']['input'];
};

export type Document = BaseDomain & {
  __typename?: 'Document';
  createDt: Scalars['LocalDateTime']['output'];
  file: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  owner: Scalars['UUID']['output'];
  state: DocumentState;
  type: DocumentType;
  updateDocumentState: Document;
  uuid?: Maybe<Scalars['UUID']['output']>;
};


export type DocumentUpdateDocumentStateArgs = {
  state: DocumentState;
};

export type DocumentQueryRequestInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  state?: InputMaybe<DocumentState>;
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};

export enum DocumentState {
  Complete = 'COMPLETE',
  Embedding = 'EMBEDDING',
  Parsing = 'PARSING',
  Reading = 'READING'
}

export enum DocumentType {
  MultiColumn = 'MULTI_COLUMN',
  SingleColumn = 'SINGLE_COLUMN'
}

export type Mutation = {
  __typename?: 'Mutation';
  createDocument: Document;
  send: Chat;
  uploadFileUrl: UploadUrl;
};


export type MutationCreateDocumentArgs = {
  request: CreateDocumentRequestInput;
};


export type MutationSendArgs = {
  request: ChatSendRequestInput;
};


export type MutationUploadFileUrlArgs = {
  fileInfo: CreateUploadUrlRequestInput;
};

export type PaginationInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Long']['input'];
};

export type Query = {
  __typename?: 'Query';
  findAnswerRef: Array<ChatAnswerRef>;
  findAnswerRefWithChunk: Array<AnswerRefWithChunk>;
  findChat: Array<Chat>;
  findChunkByEmbedValue: Array<ChunkWithSimilarity>;
  findDocument: Array<Document>;
  loginState?: Maybe<User>;
  test: Array<TestResponse>;
};


export type QueryFindAnswerRefArgs = {
  request: AnswerRefQueryRequestInput;
};


export type QueryFindAnswerRefWithChunkArgs = {
  request: AnswerRefQueryRequestInput;
};


export type QueryFindChatArgs = {
  queryRequest: ChatQueryRequestInput;
};


export type QueryFindChunkByEmbedValueArgs = {
  document: Scalars['UUID']['input'];
  text: Scalars['String']['input'];
};


export type QueryFindDocumentArgs = {
  query: DocumentQueryRequestInput;
};


export type QueryTestArgs = {
  request: TestRequestInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Returns a random number every second */
  counter: CounterResponse;
  /** Returns a random number every second, errors if even */
  counterWithError: Scalars['Int']['output'];
  /** Returns stream of values */
  flow: Scalars['Int']['output'];
  /** Returns stream of errors */
  flowOfErrors?: Maybe<Scalars['String']['output']>;
  /** Returns one value then an error */
  singleValueThenError: Scalars['Int']['output'];
  subNotice: Scalars['String']['output'];
};


export type SubscriptionCounterArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type TestRequestInput = {
  value: Scalars['Int']['input'];
};

export type TestResponse = {
  __typename?: 'TestResponse';
  test: Scalars['String']['output'];
  value: Scalars['Int']['output'];
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

export type SendChatMutationVariables = Exact<{
  query: ChatSendRequestInput;
}>;


export type SendChatMutation = { __typename?: 'Mutation', send: { __typename?: 'Chat', uuid?: any | null, state: ChatState, document: any, userAsk: string, result?: string | null } };

export type FindChatQueryVariables = Exact<{
  query: ChatQueryRequestInput;
}>;


export type FindChatQuery = { __typename?: 'Query', findChat: Array<{ __typename?: 'Chat', uuid?: any | null, userAsk: string, result?: string | null, document: any, state: ChatState }> };

export type FindChatAnswerRefQueryVariables = Exact<{
  query: AnswerRefQueryRequestInput;
}>;


export type FindChatAnswerRefQuery = { __typename?: 'Query', findAnswerRefWithChunk: Array<{ __typename?: 'AnswerRefWithChunk', answerRef: { __typename?: 'ChatAnswerRef', similarity: number }, chunk: { __typename?: 'Chunk', content: string, page: number, num: number } }> };

export type CreateDocumentMutationVariables = Exact<{
  request: CreateDocumentRequestInput;
}>;


export type CreateDocumentMutation = { __typename?: 'Mutation', createDocument: { __typename?: 'Document', uuid?: any | null, name: string, state: DocumentState, owner: any, file: any } };

export type FindDocumentQueryVariables = Exact<{
  query: DocumentQueryRequestInput;
}>;


export type FindDocumentQuery = { __typename?: 'Query', findDocument: Array<{ __typename?: 'Document', uuid?: any | null, name: string, state: DocumentState, owner: any, file: any }> };

export type UploadFileUrlMutationVariables = Exact<{
  fileInfo: CreateUploadUrlRequestInput;
}>;


export type UploadFileUrlMutation = { __typename?: 'Mutation', uploadFileUrl: { __typename?: 'UploadUrl', url: any, uuid: any } };

export type SubNoticeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubNoticeSubscription = { __typename?: 'Subscription', subNotice: string };

export type LoginStateQueryVariables = Exact<{ [key: string]: never; }>;


export type LoginStateQuery = { __typename?: 'Query', loginState?: { __typename?: 'User', uuid: any, email: string } | null };


export const SendChatDocument = gql`
    mutation SendChat($query: ChatSendRequestInput!) {
  send(request: $query) {
    uuid
    state
    document
    userAsk
    result
  }
}
    `;
export type SendChatMutationFn = Apollo.MutationFunction<SendChatMutation, SendChatMutationVariables>;

/**
 * __useSendChatMutation__
 *
 * To run a mutation, you first call `useSendChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendChatMutation, { data, loading, error }] = useSendChatMutation({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSendChatMutation(baseOptions?: Apollo.MutationHookOptions<SendChatMutation, SendChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendChatMutation, SendChatMutationVariables>(SendChatDocument, options);
      }
export type SendChatMutationHookResult = ReturnType<typeof useSendChatMutation>;
export type SendChatMutationResult = Apollo.MutationResult<SendChatMutation>;
export type SendChatMutationOptions = Apollo.BaseMutationOptions<SendChatMutation, SendChatMutationVariables>;
export const FindChatDocument = gql`
    query FindChat($query: ChatQueryRequestInput!) {
  findChat(queryRequest: $query) {
    uuid
    userAsk
    result
    document
    state
  }
}
    `;

/**
 * __useFindChatQuery__
 *
 * To run a query within a React component, call `useFindChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindChatQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useFindChatQuery(baseOptions: Apollo.QueryHookOptions<FindChatQuery, FindChatQueryVariables> & ({ variables: FindChatQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindChatQuery, FindChatQueryVariables>(FindChatDocument, options);
      }
export function useFindChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindChatQuery, FindChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindChatQuery, FindChatQueryVariables>(FindChatDocument, options);
        }
export function useFindChatSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindChatQuery, FindChatQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindChatQuery, FindChatQueryVariables>(FindChatDocument, options);
        }
export type FindChatQueryHookResult = ReturnType<typeof useFindChatQuery>;
export type FindChatLazyQueryHookResult = ReturnType<typeof useFindChatLazyQuery>;
export type FindChatSuspenseQueryHookResult = ReturnType<typeof useFindChatSuspenseQuery>;
export type FindChatQueryResult = Apollo.QueryResult<FindChatQuery, FindChatQueryVariables>;
export const FindChatAnswerRefDocument = gql`
    query FindChatAnswerRef($query: AnswerRefQueryRequestInput!) {
  findAnswerRefWithChunk(request: $query) {
    answerRef {
      similarity
    }
    chunk {
      content
      page
      num
    }
  }
}
    `;

/**
 * __useFindChatAnswerRefQuery__
 *
 * To run a query within a React component, call `useFindChatAnswerRefQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindChatAnswerRefQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindChatAnswerRefQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useFindChatAnswerRefQuery(baseOptions: Apollo.QueryHookOptions<FindChatAnswerRefQuery, FindChatAnswerRefQueryVariables> & ({ variables: FindChatAnswerRefQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindChatAnswerRefQuery, FindChatAnswerRefQueryVariables>(FindChatAnswerRefDocument, options);
      }
export function useFindChatAnswerRefLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindChatAnswerRefQuery, FindChatAnswerRefQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindChatAnswerRefQuery, FindChatAnswerRefQueryVariables>(FindChatAnswerRefDocument, options);
        }
export function useFindChatAnswerRefSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindChatAnswerRefQuery, FindChatAnswerRefQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindChatAnswerRefQuery, FindChatAnswerRefQueryVariables>(FindChatAnswerRefDocument, options);
        }
export type FindChatAnswerRefQueryHookResult = ReturnType<typeof useFindChatAnswerRefQuery>;
export type FindChatAnswerRefLazyQueryHookResult = ReturnType<typeof useFindChatAnswerRefLazyQuery>;
export type FindChatAnswerRefSuspenseQueryHookResult = ReturnType<typeof useFindChatAnswerRefSuspenseQuery>;
export type FindChatAnswerRefQueryResult = Apollo.QueryResult<FindChatAnswerRefQuery, FindChatAnswerRefQueryVariables>;
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
export function useCreateDocumentMutation(baseOptions?: Apollo.MutationHookOptions<CreateDocumentMutation, CreateDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDocumentMutation, CreateDocumentMutationVariables>(CreateDocumentDocument, options);
      }
export type CreateDocumentMutationHookResult = ReturnType<typeof useCreateDocumentMutation>;
export type CreateDocumentMutationResult = Apollo.MutationResult<CreateDocumentMutation>;
export type CreateDocumentMutationOptions = Apollo.BaseMutationOptions<CreateDocumentMutation, CreateDocumentMutationVariables>;
export const FindDocumentDocument = gql`
    query FindDocument($query: DocumentQueryRequestInput!) {
  findDocument(query: $query) {
    uuid
    name
    state
    owner
    file
  }
}
    `;

/**
 * __useFindDocumentQuery__
 *
 * To run a query within a React component, call `useFindDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDocumentQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useFindDocumentQuery(baseOptions: Apollo.QueryHookOptions<FindDocumentQuery, FindDocumentQueryVariables> & ({ variables: FindDocumentQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDocumentQuery, FindDocumentQueryVariables>(FindDocumentDocument, options);
      }
export function useFindDocumentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDocumentQuery, FindDocumentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDocumentQuery, FindDocumentQueryVariables>(FindDocumentDocument, options);
        }
export function useFindDocumentSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindDocumentQuery, FindDocumentQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindDocumentQuery, FindDocumentQueryVariables>(FindDocumentDocument, options);
        }
export type FindDocumentQueryHookResult = ReturnType<typeof useFindDocumentQuery>;
export type FindDocumentLazyQueryHookResult = ReturnType<typeof useFindDocumentLazyQuery>;
export type FindDocumentSuspenseQueryHookResult = ReturnType<typeof useFindDocumentSuspenseQuery>;
export type FindDocumentQueryResult = Apollo.QueryResult<FindDocumentQuery, FindDocumentQueryVariables>;
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
export function useUploadFileUrlMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileUrlMutation, UploadFileUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFileUrlMutation, UploadFileUrlMutationVariables>(UploadFileUrlDocument, options);
      }
export type UploadFileUrlMutationHookResult = ReturnType<typeof useUploadFileUrlMutation>;
export type UploadFileUrlMutationResult = Apollo.MutationResult<UploadFileUrlMutation>;
export type UploadFileUrlMutationOptions = Apollo.BaseMutationOptions<UploadFileUrlMutation, UploadFileUrlMutationVariables>;
export const SubNoticeDocument = gql`
    subscription SubNotice {
  subNotice
}
    `;

/**
 * __useSubNoticeSubscription__
 *
 * To run a query within a React component, call `useSubNoticeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubNoticeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubNoticeSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubNoticeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubNoticeSubscription, SubNoticeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubNoticeSubscription, SubNoticeSubscriptionVariables>(SubNoticeDocument, options);
      }
export type SubNoticeSubscriptionHookResult = ReturnType<typeof useSubNoticeSubscription>;
export type SubNoticeSubscriptionResult = Apollo.SubscriptionResult<SubNoticeSubscription>;
export const LoginStateDocument = gql`
    query LoginState {
  loginState {
    uuid
    email
  }
}
    `;

/**
 * __useLoginStateQuery__
 *
 * To run a query within a React component, call `useLoginStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginStateQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginStateQuery(baseOptions?: Apollo.QueryHookOptions<LoginStateQuery, LoginStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginStateQuery, LoginStateQueryVariables>(LoginStateDocument, options);
      }
export function useLoginStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginStateQuery, LoginStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginStateQuery, LoginStateQueryVariables>(LoginStateDocument, options);
        }
export function useLoginStateSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LoginStateQuery, LoginStateQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LoginStateQuery, LoginStateQueryVariables>(LoginStateDocument, options);
        }
export type LoginStateQueryHookResult = ReturnType<typeof useLoginStateQuery>;
export type LoginStateLazyQueryHookResult = ReturnType<typeof useLoginStateLazyQuery>;
export type LoginStateSuspenseQueryHookResult = ReturnType<typeof useLoginStateSuspenseQuery>;
export type LoginStateQueryResult = Apollo.QueryResult<LoginStateQuery, LoginStateQueryVariables>;