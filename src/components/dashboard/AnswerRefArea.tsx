'use client';
import { useAppDispatch, useAppSelector } from '@/components/config/redux/hooks';
import Markdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { clearChatAnswerRef } from '@/components/config/redux/chatAnswerRef-slice';

export default function AnswerRefArea() {
	const INIT_WIDTH = 500;
	const dispatch = useAppDispatch();
	const answerRef = useAppSelector((state) => state.chatAnswerRef.chatAnswerRef);
	const [width, setWidth] = useState(INIT_WIDTH);

	const onDragStart = (event: any) => {
		const img = new Image();
		img.src =
			'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>');
		event.dataTransfer.setDragImage(img, 0, 0);
	};

	useEffect(() => {
		if (answerRef == undefined) {
			setWidth(INIT_WIDTH);
		}
	}, [answerRef]);

	const onDrag = (event: any) => {
		event.preventDefault();
		const container = event.currentTarget.getBoundingClientRect();
		const relativeX = event.clientX - container.left;
		if (width - relativeX < -10000) {
			dispatch(clearChatAnswerRef());
		}
		setWidth(width - relativeX);
	};

	if (!answerRef) {
		return;
	}

	return (
		<>
			<div
				className="h-full min-h-screen w-[20] min-w-[20] cursor-alias bg-gray-200 bg-none"
				draggable={true}
				onDragStart={onDragStart}
				onDrag={onDrag}
			/>
			<div className="flex max-h-screen items-center justify-center bg-gray-200 py-6 pr-6">
				<div
					className={`scrollbar-hide flex max-h-full min-h-full flex-grow flex-col gap-10 overflow-auto rounded-xl bg-white p-10`}
					style={{
						width: `${width}px`,
						minWidth: '300px',
					}}
				>
					{answerRef?.findAnswerRefWithChunk.map((ref) => {
						return (
							<div key={ref.chunk.page + ' ' + ref.chunk.num}>
								<div className="flex h-10 w-fit items-center rounded-t-2xl border border-b-0 border-gray-300 bg-gray-100 px-5">
									Page {ref.chunk.page} - {ref.chunk.num}
								</div>
								<div className="rounded-2xl rounded-tl-none border border-gray-300 p-5">
									<Markdown className="prose overflow-hidden">{ref.chunk.content}</Markdown>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
