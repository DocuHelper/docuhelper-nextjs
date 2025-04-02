'use client';

import { useAppSelector } from '@/components/config/redux/hooks';
import Markdown from 'react-markdown';
import { Chat } from '@/generated/graphql';

export default function ChatHistory() {
	const chatHistory = useAppSelector((state) => state.chat.chatHistory);

	if (!chatHistory || !chatHistory.length) {
		return (
			<div className="flex max-h-fit w-4/5 flex-grow flex-col justify-center rounded-2xl border border-gray-300 transition-all first:mt-10 last:mb-10 hover:shadow-xl">
				<ol className="flex w-full p-6">
					<Markdown className="prose">찾고 싶은 내용이 있으신가요?</Markdown>
				</ol>
			</div>
		);
	}

	return (
		<>
			{chatHistory.map((chat) => {
				return (
					<div
						key={chat.uuid}
						className="flex max-h-fit w-4/5 flex-grow flex-col justify-center rounded-2xl border border-gray-300 transition-all first:mt-10 last:mb-10 hover:shadow-xl"
					>
						<ol className="flex w-full p-6">
							<ChatAnswer chat={chat} />
						</ol>
						<div className="rounded-b-2xl border-t border-gray-300 bg-gray-100 p-6">{chat.userAsk}</div>
					</div>
				);
			})}
		</>
	);
}

function ChatAnswer({ chat }: { chat: Chat }) {
	if (!chat.result) {
		return <Markdown className="prose">뒤적뒤적</Markdown>;
	}
	return <Markdown className="prose">{chat.result}</Markdown>;
}
