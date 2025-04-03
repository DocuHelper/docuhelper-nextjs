'use client';

import DocumentItem from '@/components/dashboard/DocumentItem';
import { useRef, useState } from 'react';
import { useAppSelector } from '@/components/config/redux/hooks';

export default function DocumentListSideBar() {
	const tempRef = useRef<HTMLDivElement | undefined>(undefined);
	const [listSize, setListSize] = useState<{
		width: number;
		height: number;
	}>();

	const myDocument = useAppSelector((state) => state.document.document);

	return (
		<>
			<div className="absolute inset-0">
				<ul className="scrollbar-hide flex max-h-full flex-grow flex-col gap-3 overflow-auto pt-4 pr-4">
					{myDocument?.map((document) => {
						return <DocumentItem key={document.uuid} {...document} />;
					})}
				</ul>
			</div>
		</>
	);
}
