'use client';

import { useAppDispatch } from '@/components/config/redux/hooks';
import { selectDocument } from '@/components/config/redux/chat-slice';
import { Document, DocumentState } from '@/generated/graphql';

export default function DocumentItem({ uuid, name, state }: Document) {
	const dispatch = useAppDispatch();

	return (
		<li
			onClick={() => {
				dispatch(selectDocument(uuid));
			}}
			className="flex justify-between border-gray-400 p-4 last:border-b-0"
		>
			<p className="truncate">{name}</p>
			<p className="ml-4 min-w-fit">{getDocumentState(state)}</p>
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
