'use client';

import { useAppDispatch } from '@/components/config/redux/hooks';
import useLoginStateHook from '@/customHook/useLoginStateHook';
import { initAuthStore } from '@/components/config/redux/auth-slice';
import { Chat, Document, useFindChatQuery, useFindDocumentQuery } from '@/generated/graphql';
import { initChatStore } from '@/components/config/redux/chat-slice';
import { initDocumentStore } from '@/components/config/redux/document-slice';

/**
 * redux 상태 초기화까지 렌더링을 지연시킵니다.
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function StoreStateProvider({ children }: { children: React.ReactNode }) {
	const dispatch = useAppDispatch();
	const { loginUser } = useLoginStateHook();

	const chatHistory = useFindChatQuery({
		variables: {
			query: {
				document: null,
			},
		},
	});

	const userDocuments = useFindDocumentQuery({
		variables: { query: {} },
	});

	dispatch(initAuthStore(loginUser));
	dispatch(initChatStore(chatHistory.data?.findChat as [Chat]));
	dispatch(initDocumentStore(userDocuments.data?.findDocument as [Document]));

	if (loginUser === undefined || chatHistory.loading || userDocuments.loading) {
		console.log('로딩이 지연되고있습니다');
		return;
	} else {
		console.log('로딩 끝!');
	}

	return <>{children}</>;
}
