'use client';

import DocumentItem from '@/components/dashboard/DocumentItem';
import { RefObject, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@/components/config/redux/hooks';

export default function DocumentListSideBar() {
	const tempRef = useRef<HTMLDivElement | undefined>(undefined);
	const [listSize, setListSize] = useState<{
		width: number;
		height: number;
	}>();

	const myDocument = useAppSelector((state) => state.document.document);

	useEffect(() => {
		const currentEl = tempRef.current;

		if (currentEl === undefined) return;

		if (listSize !== undefined) return;

		setListSize({
			width: currentEl.offsetWidth,
			height: currentEl.offsetHeight,
		});
	}, [listSize]);

	return (
		<>
			<div ref={tempRef as RefObject<HTMLDivElement>} className="h-full">
				<ul
					style={{
						maxHeight: `${listSize?.height}px`,
						minHeight: `${listSize?.height}px`,
						maxWidth: `${listSize?.width}px`,
						minWidth: `${listSize?.width}px`,
					}}
					className="scrollbar-hide absolute flex flex-col overflow-auto"
				>
					{myDocument?.map((document) => {
						return (
							<DocumentItem
								// onclick={() => {}}
								key={document.uuid}
								state={document.state}
								name={document.name}
								uuid={document.uuid}
							/>
						);
					})}
				</ul>
			</div>
		</>
	);
}
