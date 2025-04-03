import Markdown from 'react-markdown';
import { Chat } from '@/generated/graphql';
import { useEffect } from 'react';
import { useAppSelector } from '@/components/config/redux/hooks';

type DashBoardChatType = {
	chat: Chat;
	isLast: boolean;
	scrollToBottom: () => void;
};
export default function DashBoardChat({ chat, isLast, scrollToBottom }: DashBoardChatType) {
	const viewBottom = useAppSelector((state) => state.chat.viewBottom);

	useEffect(() => {
		if (viewBottom) {
			scrollToBottom();
		}
	}, [chat]);

	return (
		<div
			key={chat.uuid}
			className="flex max-h-fit w-4/5 flex-grow flex-col justify-center rounded-2xl border border-gray-300 transition-all last:mb-10 hover:shadow-xl"
		>
			<ol className="flex w-full p-6">
				<ChatAnswer chat={chat} />
			</ol>
			<div className="rounded-b-2xl border-t border-gray-300 bg-gray-100 p-6">{chat.userAsk}</div>
		</div>
	);
}

function ChatAnswer({ chat }: { chat: Chat }) {
	if (!chat.result) {
		return <Markdown className="prose">뒤적뒤적</Markdown>;
	}
	return <Markdown className="prose">{chat.result}</Markdown>;
}
