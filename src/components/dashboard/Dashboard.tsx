'use client';

import ChatHistory from '@/components/dashboard/ChatHistory';
import ChatInput from '@/components/dashboard/ChatInput';

export default function Dashboard() {
	return (
		<>
			<div className="scrollbar-hide flex h-full w-full justify-center overflow-auto">
				<div className="relative flex flex-col items-center">
					<div className="scrollbar-hide flex grow flex-col items-center gap-6 overflow-auto">
						<ChatHistory />
					</div>
					<div className="w-full border-t border-gray-300" />
					<div className="mt-10 mb-10 flex w-full justify-center">
						<ChatInput />
					</div>
				</div>
			</div>
		</>
	);
}
