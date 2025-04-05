'use client';

import { useAppSelector } from '@/components/config/redux/hooks';
import { UserIcon } from '@heroicons/react/24/outline';

export default function UserProfile() {
	const authUser = useAppSelector((state) => state.auth.user);

	return (
		<div className="flex h-full items-center gap-4 p-4">
			<div className="aspect-square h-full rounded-full bg-white p-2">
				<UserIcon className="text-gray-600" />
			</div>
			<p>{authUser?.email}</p>
		</div>
	);
}
