'use client';

import { gql, useQuery } from '@apollo/client';
import DocumentItem from '@/components/dashboard/DocumentItem';
import { RefObject, useEffect, useRef, useState } from 'react';
import { Document } from '@/type/response';

const FIND_DOCUMENT = gql`
	query FindDocument($owner: UUID) {
		findDocument(query: { owner: $owner }) {
			file
			name
			owner
			state
			uuid
		}
	}
`;
export default function DocumentListSideBar() {
	const tempRef = useRef<HTMLDivElement | undefined>(undefined);
	const [listSize, setListSize] = useState<{
		width: number;
		height: number;
	}>();
	const { loading, error, data } = useQuery<{ findDocument: [Document] }>(FIND_DOCUMENT, {
		variables: {
			owner: 'c6751ab8-5fb5-44f7-8ab3-b326686b6640',
		},
	});

	useEffect(() => {
		if (loading) return;

		const currentEl = tempRef.current;

		if (currentEl === undefined) return;

		if (listSize !== undefined) return;

		setListSize({
			width: currentEl.offsetWidth,
			height: currentEl.offsetHeight,
		});
	}, [loading, listSize]);

	if (loading) return null;

	const findDocument = data?.findDocument || [];

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
					{findDocument.map((document: Document) => {
						return (
							<DocumentItem
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
