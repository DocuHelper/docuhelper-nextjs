import DocumentListSideBar from '@/components/dashboard/DocumentListSideBar';
import UserProfile from '@/components/dashboard/UserProfile';

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex w-full flex-grow">
			{/* left sidebar */}
			<div className="min-w-80 bg-gray-200">
				<div className="flex h-full flex-col transition-all hover:drop-shadow-xl">
					{/* userProfile */}
					<div className="h-20">
						<UserProfile />
					</div>
					{/* documentList */}
					<div className="flex-grow bg-white">
						<DocumentListSideBar />
					</div>
					<div className="h-20"></div>
				</div>
			</div>
			{/* center */}
			<div className="scrollbar-hide z-10 flex max-h-screen flex-grow flex-col items-center justify-center p-4 transition-all hover:shadow-xl">
				{children}
			</div>
			{/* right sidebar */}
			<div className="flex min-w-12 flex-col transition-all hover:drop-shadow-xl">
				<div className="aspect-square bg-gray-200"></div>
				<div className="flex-grow bg-gray-50"></div>
			</div>
		</div>
	);
}
