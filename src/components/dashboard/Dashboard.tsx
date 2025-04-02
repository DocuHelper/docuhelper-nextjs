'use client';

import ChatHistory from '@/components/dashboard/ChatHistory';
import ChatInput from '@/components/dashboard/ChatInput';

export default function Dashboard() {
	return (
		<>
			<div className="scrollbar-hide flex h-full w-full justify-center overflow-auto">
				<div className="relative flex w-full flex-col items-center">
					<div className="scrollbar-hide flex w-full grow flex-col items-center justify-end gap-6 overflow-auto">
						<ChatHistory />
					</div>
					<div className="w-full border-t border-gray-300" />
					<div className="mt-5 mb-5 flex w-full justify-center">
						<ChatInput />
					</div>
				</div>
			</div>
		</>
	);
}
