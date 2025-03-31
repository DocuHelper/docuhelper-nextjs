'use client';

import { useState } from 'react';
import { useSendChatMutation } from '@/generated/graphql';
import { useAppSelector } from '@/components/config/redux/hooks';

export default function ChatInput() {
	const [ask, setAsk] = useState('');
	const selectedDocument = useAppSelector((state) => state.chat.selectedDocument);

	const [mutateFunction, { data, loading, error }] = useSendChatMutation();

	const sendBtnEvent = () => {
		if (!selectedDocument) {
			alert('문서를 선택해주세요');
			return;
		}
		mutateFunction({
			variables: {
				query: {
					ask: ask,
					document: selectedDocument,
				},
			},
		}).then((value) => {
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
			<p>{selectedDocument}</p>
		</>
	);
}
