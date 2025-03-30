'use client';

import ChatHistory from '@/components/dashboard/ChatHistory';
import ChatInput from '@/components/dashboard/ChatInput';

export default function Dashboard() {
	return (
		<>
			<div className="scrollbar-hide flex w-full justify-center overflow-auto">
				<div className="relative flex w-4/5 flex-col items-center gap-10">
					<ChatHistory />
					<div className="h-52"></div>
					<div className="absolute bottom-0 flex w-full flex-col items-center">
						<ChatInput />
					</div>
				</div>
			</div>
		</>
	);
}
