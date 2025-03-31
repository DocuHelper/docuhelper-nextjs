'use client';

import { useAppSelector } from '@/components/config/redux/hooks';
import Markdown from 'react-markdown';

export default function ChatHistory() {
	const chatHistory = useAppSelector((state) => state.chat.chatHistory);

	if (!chatHistory || !chatHistory.length) {
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
		<>
			{chatHistory.map((chat) => {
				return (
					<div
						key={chat.uuid}
						className="flex w-4/5 flex-grow flex-col justify-center rounded-2xl border border-gray-300 transition-all first:mt-10 last:mb-10 hover:shadow-xl"
					>
						<ol className="flex w-full p-6">
							<Markdown className="prose">{chat?.result}</Markdown>
						</ol>
						<div className="rounded-b-2xl border-t border-gray-300 bg-gray-100 p-6">{chat.userAsk}</div>
					</div>
				);
			})}
		</>
	);
}
