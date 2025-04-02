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

	// useEffect(() => {
	// 	const currentEl = tempRef.current;
	//
	// 	if (currentEl === undefined) return;
	//
	// 	if (listSize !== undefined) return;
	//
	// 	setListSize({
	// 		width: currentEl.offsetWidth,
	// 		height: currentEl.offsetHeight,
	// 	});
	// }, [listSize]);

	return (
		<>
			<div className="absolute inset-0">
				<ul className="scrollbar-hide flex max-h-full flex-grow flex-col overflow-auto">
					{myDocument?.map((document) => {
						return (
							<DocumentItem
								key={document.uuid}
								state={document.state}
								name={document.name}
								uuid={document.uuid}
							/>
						);
					})}
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
