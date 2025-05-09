'use client';
import Dashboard from '@/components/dashboard/Dashboard';
import UserProfile from '@/components/dashboard/UserProfile';
import DocumentListSideBar from '@/components/dashboard/DocumentListSideBar';
import DocumentUploader from '@/components/dashboard/DocumentUploader';
import AnswerRefArea from '@/components/dashboard/AnswerRefArea';
import { useAppSelector } from '@/components/config/redux/hooks';

export default function Page() {
	const store = useAppSelector((state) => state.chatAnswerRef.chat);

	return (
		<>
			<div className="flex w-full flex-grow">
				{/* left sidebar */}
				<div className="max-h-screen min-w-80 bg-gray-200">
					<div className="flex h-full flex-col py-3">
						{/* userProfile */}
						<div className="m-4 mb-0 h-20">
							<UserProfile />
						</div>
						{/* documentList */}
						<div className="relative mr-0 ml-4 max-h-full flex-grow bg-gray-200">
							<DocumentListSideBar />
						</div>
						<div className="m-4 mt-2 h-20">
							<DocumentUploader />
						</div>
					</div>
				</div>
				{/* center */}
				<div className="z-10 flex max-h-screen flex-grow flex-col items-center justify-center border-l border-gray-200 bg-gray-200 p-6 pr-0 pl-2">
					<div
						className={`${store ? '' : 'mr-10'} h-full w-full rounded-xl bg-white transition-all hover:shadow-xl`}
					>
						<Dashboard />
					</div>
				</div>
				{/* right sidebar */}
				<AnswerRefArea />
			</div>
		</>
	);
}
