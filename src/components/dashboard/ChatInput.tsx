'use client';

import { useState } from 'react';
import { useSendChatMutation } from '@/generated/graphql';

export default function ChatInput() {
	const [ask, setAsk] = useState('');

	const [mutateFunction, { data, loading, error }] = useSendChatMutation();

	const sendBtnEvent = () => {
		mutateFunction({
			variables: {
				query: {
					ask: ask,
					document: '0d9185d0-21be-4ced-ac26-7be6efbfb9a5',
				},
			},
		}).then((value) => {
			console.log(value);
			setAsk('');
		});
	};
	return (
		<>
			<div className="flex h-14 w-full justify-center gap-10">
				<input
					value={ask}
					onChange={(e) => {
						setAsk(e.target.value);
					}}
					onKeyPress={(event) => {
						if (event.charCode == 13) {
							sendBtnEvent();
						}
					}}
					className="flex-grow rounded-full border border-gray-300 transition-all hover:shadow-xl"
				/>
				<button
					onClick={sendBtnEvent}
					className="aspect-square h-full rounded-full border-gray-300 bg-gray-200 transition-all hover:shadow-xl"
				/>
			</div>

			<div className="mt-2 flex h-12 justify-center gap-4">
				<ul className="flex flex-grow gap-2 rounded-full border border-gray-300 p-3.5 transition-all hover:shadow-xl">
					<li className="aspect-square h-full rounded-full bg-gray-400"></li>
					<li className="aspect-square h-full rounded-full bg-gray-400"></li>
					<li className="aspect-square h-full rounded-full bg-gray-400"></li>
					<li className="flex aspect-square h-full items-center justify-center rounded-full border border-gray-400 text-xl text-gray-400">
						+
					</li>
				</ul>
			</div>
		</>
	);
}
