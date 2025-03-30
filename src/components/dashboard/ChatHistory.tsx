'use client';

import { useAppSelector } from '@/components/config/redux/hooks';
import Markdown from 'react-markdown';

export default function ChatHistory() {
	const chatHistory = useAppSelector((state) => state.chat.chatHistory);
	console.log(chatHistory);

	if (!chatHistory) {
		return (
			<div className="flex h-full w-full flex-grow justify-center gap-10 rounded-2xl border border-gray-300 p-6 transition-all hover:shadow-xl">
				<p>
					Commodo ut magna ea sit dolor aute velit proident dolore do aliqua sit culpa et sit sunt consectetur
					eiusmod exercitation qui excepteur aute nisi irure sint ullamco exercitation quis labore anim
					occaecat enim id ex cillum dolore duis fugiat aliqua ad sint aute deserunt in pariatur aliqua esse
					nisi laboris reprehenderit eiusmod ad dolor esse minim ipsum ex adipisicing et magna ex dolore
					nostrud fugiat consectetur culpa aliqua duis ea aliqua elit dolor ex in pariatur incididunt ipsum
					proident incididunt proident id anim est sunt commodo enim consequat magna mollit qui ea occaecat do
					mollit duis reprehenderit tempor minim non.
				</p>
			</div>
		);
	}

	return (
		<div className="scrollbar-hide flex w-full flex-grow justify-center gap-10 overflow-auto rounded-2xl border border-gray-300 p-6 transition-all hover:shadow-xl">
			<ol className="w-full">
				<Markdown className="prose">{chatHistory[chatHistory.length - 1].result}</Markdown>
			</ol>
		</div>
	);
}
