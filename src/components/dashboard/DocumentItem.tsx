'use client';

import { useAppDispatch, useAppSelector } from '@/components/config/redux/hooks';
import { Document, DocumentState, useDeleteDocumentMutation } from '@/generated/graphql';
import { selectDocument } from '@/components/config/redux/chat-slice';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/16/solid';
import { Alert } from '@/components/common/Alert';

export default function DocumentItem({ uuid, name, state }: Document) {
	const dispatch = useAppDispatch();
	const selectedDocument = useAppSelector((store) => store.chat.selectedDocument);
	const [deleteDocument] = useDeleteDocumentMutation();
	return (
		<li
			onClick={() => {
				if (state !== DocumentState.Complete) {
					Alert.warning(<p className="text-nowrap">문서를 읽고 있어요. 조금만 기다려 주세요</p>);
					return;
				}
				dispatch(selectDocument(uuid));
			}}
			className={`group relative ml-4 flex cursor-pointer justify-between rounded-xl p-4 select-none last:border-b-0 ${selectedDocument === uuid && 'bg-white'} ${selectedDocument === uuid || 'hover:bg-gray-300'} transition-all`}
		>
			<p className="truncate">{name}</p>
			<p className="ml-4 min-w-fit">{getDocumentState(state)}</p>
			<i
				className="absolute -top-2 -left-2 flex aspect-square w-5 items-center rounded-full bg-red-500 px-1 opacity-0 transition-all group-hover:opacity-100"
				onClick={(event) => {
					deleteDocument({ variables: { request: uuid } });
				}}
			>
				<i className="block h-0.75 grow rounded-full bg-white" />
			</i>
			<i
				className={`absolute -top-2 -right-2 aspect-square w-6 rounded-full bg-gray-400 p-1 ${selectedDocument === uuid ? 'block' : 'hidden'} `}
			>
				<ChatBubbleOvalLeftIcon className="text-white" />
			</i>
		</li>
	);
}

function getDocumentState(state: DocumentState) {
	switch (state) {
		case DocumentState.Complete:
			return '';
		case DocumentState.Embedding:
			return '임베중';
		case DocumentState.Parsing:
			return '파싱중';
		case DocumentState.Reading:
			return '읽는중';
		case DocumentState.Fail:
			return '실패';
	}
}
