'use client';

import { useAppDispatch } from '@/components/config/redux/hooks';
import { selectDocument } from '@/components/config/redux/chat-slice';

type DocumentItemType = {
	uuid: string;
	name: string;
	state: string;
};

export default function DocumentItem({ uuid, name, state }: DocumentItemType) {
	const dispatch = useAppDispatch();

	return (
		<li
			onClick={() => {
				dispatch(selectDocument(uuid));
			}}
			className="flex justify-between border-gray-400 p-4 last:border-b-0 hover:shadow-xl"
		>
			<p>{name}</p>
			<p>{state}</p>
		</li>
	);
}
