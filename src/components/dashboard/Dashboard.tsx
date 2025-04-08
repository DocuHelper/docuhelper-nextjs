'use client';

import ChatHistory from '@/components/dashboard/ChatHistory';
import ChatInput from '@/components/dashboard/ChatInput';
import { useAppDispatch, useAppSelector } from '@/components/config/redux/hooks';
import { updateViewBottom } from '@/components/config/redux/chat-slice';
import { UIEventHandler, useRef } from 'react';

export default function Dashboard() {
	const dispatch = useAppDispatch();
	const historyRef = useRef<HTMLDivElement>(null);
	const loginState = useAppSelector((state) => state.auth.user);

	const historyScrollEv: UIEventHandler<HTMLDivElement> = (event) => {
		const target = event.currentTarget;
		const isAtBottom = target.scrollHeight - target.scrollTop === target.clientHeight;
		if (isAtBottom) {
			dispatch(updateViewBottom(true));
		} else {
			dispatch(updateViewBottom(false));
		}
	};

	if (!loginState) {
		location.href = '/';
	}

	return (
		<>
			<div className="flex h-full w-full flex-col items-center justify-center">
				{/*<div className="flex">*/}
				<div
					className="scrollbar-hide flex h-full w-full grow flex-col items-center gap-6 overflow-auto"
					onScroll={historyScrollEv}
					ref={historyRef}
					onClick={(event) => {
						console.log(historyRef.current);
						console.log(event.target);
					}}
				>
					<div className="mb-10 grow" />
					<ChatHistory scrollElement={historyRef} />
				</div>
				<div className="w-full border-t border-gray-300" />
				<div className="mt-5 mb-5 flex w-full justify-center">
					<ChatInput />
				</div>
				{/*</div>*/}
			</div>
		</>
	);
}
