'use client';

import ChatHistory from '@/components/dashboard/ChatHistory';
import ChatInput from '@/components/dashboard/ChatInput';

export default function Dashboard() {
	return (
		<>
			<div className="flex h-full w-full flex-col items-center justify-center">
				{/*<div className="flex">*/}
				<div className="scrollbar-hide flex h-full w-full grow flex-col items-center gap-6 overflow-auto">
					<div className="mb-10 grow" />
					<ChatHistory />
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
