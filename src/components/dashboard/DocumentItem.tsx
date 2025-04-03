'use client';

import { useAppDispatch, useAppSelector } from '@/components/config/redux/hooks';
import { Document, DocumentState } from '@/generated/graphql';
import { selectDocument } from '@/components/config/redux/chat-slice';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid';

export default function DocumentItem({ uuid, name, state }: Document) {
	const dispatch = useAppDispatch();
	const selectedDocument = useAppSelector((store) => store.chat.selectedDocument);
	return (
		<li
			onClick={() => {
				dispatch(selectDocument(uuid));
			}}
			className={`relative flex cursor-pointer justify-between rounded-xl p-4 select-none last:border-b-0 ${selectedDocument === uuid && 'bg-white'} ${selectedDocument === uuid || 'hover:bg-gray-300'} transition-all`}
		>
			<p className="truncate">{name}</p>
			<p className="ml-4 min-w-fit">{getDocumentState(state)}</p>

			<i
				className={`absolute -top-3 -right-3 aspect-square h-full w-6 ${selectedDocument === uuid ? 'block' : 'hidden'} `}
			>
				<ChatBubbleOvalLeftIcon className="text-gray-500" />
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
	}
}
