'use client';

import { useAppSelector } from '@/components/config/redux/hooks';
import Markdown from 'react-markdown';
import DashBoardChat from '@/components/dashboard/DashBoardChat';
import { RefObject, useEffect } from 'react';

export default function ChatHistory({ scrollElement }: { scrollElement: RefObject<HTMLDivElement | null> }) {
	const chatHistory = useAppSelector((state) => state.chat.chatHistory);

	const scrollToBottom = () => {
		scrollElement.current?.scrollTo({
			top: scrollElement.current.scrollHeight,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		scrollToBottom();
	}, [scrollElement]);

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
			{chatHistory.map((chat, index, chats) => {
				return (
					<DashBoardChat
						scrollToBottom={scrollToBottom}
						isLast={index == chats.length - 1}
						key={chat.uuid}
						chat={chat}
					/>
				);
			})}
		</>
	);
}
