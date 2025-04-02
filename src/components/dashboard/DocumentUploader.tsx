'use client';

import FileUploader from '@/components/test/file/FileUploader';
import { CloudArrowUpIcon } from '@heroicons/react/16/solid';
import { useCreateDocumentMutation } from '@/generated/graphql';

export default function DocumentUploader() {
	const [documentCreateMutation, { data, loading, error }] = useCreateDocumentMutation();

	return (
		<>
			<FileUploader
				uploadOnComplete={(file) => {
					documentCreateMutation({
						variables: {
							request: {
								name: file.fileName,
								file: file.fileUuid,
							},
						},
					});
				}}
			>
				<div className="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-500 p-3">
					<CloudArrowUpIcon className="aspect-square h-full text-gray-500" />
					<div className="mr-4" />
					<p>문서 업로드</p>
				</div>
			</FileUploader>
		</>
	);
}
