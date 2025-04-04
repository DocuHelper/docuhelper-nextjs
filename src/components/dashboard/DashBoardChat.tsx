import Markdown from 'react-markdown';
import { Chat } from '@/generated/graphql';
import { useEffect } from 'react';
import { useAppSelector } from '@/components/config/redux/hooks';
import { DocumentIcon } from '@heroicons/react/24/outline';

type DashBoardChatType = {
	chat: Chat;
	isLast: boolean;
	scrollToBottom: () => void;
};
export default function DashBoardChat({ chat, isLast, scrollToBottom }: DashBoardChatType) {
	const viewBottom = useAppSelector((state) => state.chat.viewBottom);
	const documents = useAppSelector((state) => state.document.document);

	useEffect(() => {
		if (viewBottom) {
			scrollToBottom();
		}
	}, [chat]);

	return (
		<div className="w-4/5">
			<div className="flex h-10 w-fit rounded-t-2xl border border-b-0 border-gray-300 p-2 px-10">
				<DocumentIcon className="aspect-square h-full" />
				<p className="ml-4">
					{documents?.filter((document) => document.uuid == chat.document).map((document) => document.name)}
				</p>
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
	return <Markdown className="prose">{chat.result}</Markdown>;
}
