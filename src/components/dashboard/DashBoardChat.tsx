import Markdown from 'react-markdown';
import { Chat, useFindChatAnswerRefLazyQuery } from '@/generated/graphql';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/components/config/redux/hooks';
import { DocumentIcon } from '@heroicons/react/24/outline';
import { LinkIcon } from '@heroicons/react/20/solid';
import { loadChatAnswerRef } from '@/components/config/redux/chatAnswerRef-slice';
import MarkdownPreview from '@/components/common/MarkdownPreview';

type DashBoardChatType = {
	chat: Chat;
	isLast: boolean;
	scrollToBottom: () => void;
};
export default function DashBoardChat({ chat, isLast, scrollToBottom }: DashBoardChatType) {
	const dispatch = useAppDispatch();
	const viewBottom = useAppSelector((state) => state.chat.viewBottom);
	const documents = useAppSelector((state) => state.document.document);
	const selectedChatRef = useAppSelector((state) => state.chatAnswerRef.chat);

	const [query] = useFindChatAnswerRefLazyQuery();

	useEffect(() => {
		if (viewBottom) {
			scrollToBottom();
		}
	}, [chat]);

	return (
		<div className="w-4/5">
			<div className="flex h-10 w-fit rounded-t-2xl border border-b-0 border-gray-300 pr-2 pl-3">
				<DocumentIcon className="aspect-square h-full p-2" />
				<p className="flex items-center">
					{documents?.filter((document) => document.uuid == chat.document).map((document) => document.name)}
				</p>
				<i className="p-1">
					<LinkIcon
						className={`ml-4 aspect-square h-full rounded-full p-1 transition-all hover:bg-gray-200 ${selectedChatRef == chat.uuid ? 'bg-gray-200' : ''}`}
						onClick={(event) => {
							query({
								variables: {
									query: {
										chat: chat.uuid,
									},
								},
							}).then((value) => {
								dispatch(
									loadChatAnswerRef({
										ref: value.data,
										chat: chat.uuid,
									}),
								);
							});
						}}
					/>
				</i>
			</div>
			<div
				key={chat.uuid}
				className="flex max-h-fit w-full flex-grow flex-col justify-center rounded-b-2xl border border-gray-300 transition-all last:mb-10 hover:shadow-xl"
			>
				<ol className="flex w-full p-6">
					<ChatAnswer chat={chat} />
				</ol>
				<div className="rounded-b-2xl border-t border-gray-300 bg-gray-100 p-6">{chat.userAsk}</div>
			</div>
		</div>
	);
}

function ChatAnswer({ chat }: { chat: Chat }) {
	if (!chat.result) {
		return <Markdown className="prose">뒤적뒤적</Markdown>;
	}
	return <MarkdownPreview markdown={chat.result} />;
}
