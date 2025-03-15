'use client';
import { useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { useUploadFileUrlMutation } from '@/generated/graphql';

function defaultUploadOnComplete(fileUuid: string) {
	console.log('fileUploadComplet!!');
	console.log('fileUUID: ', fileUuid);
}

export default function FileUploader({
	uploadOnComplete = defaultUploadOnComplete,
}: {
	uploadOnComplete?: (fileUuid: string) => void;
}) {
	const fileInput = useRef<HTMLInputElement | null>(null);
	const [mutateFunction, { data, loading, error }] = useUploadFileUrlMutation();
	const onDrop = async (acceptedFiles: File[]) => {
		// const file = event.target?.files[0];
		const file = acceptedFiles[0] as File;
		if (!file) return;

		// 파일 정보 추출
		const fileName = file.name;
		const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1); // 확장자 추출
		const fileSize = file.size;

		// 파일 정보를 기반으로 업로드 URL 요청
		const result = await mutateFunction({
			variables: {
				fileInfo: {
					extension: fileExtension,
					name: fileName,
					size: fileSize,
				},
			},
		});

		const uploadFileUrl = result.data?.uploadFileUrl;

		if (uploadFileUrl === undefined) return;

		const { url, uuid } = uploadFileUrl;

		// PUT 요청으로 파일 바이너리 데이터 업로드
		await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': file.type,
			},
			body: file,
		});
		uploadOnComplete(uuid);
	};
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<div
				{...getRootProps()}
				className={`rounded-md border border-dashed p-4 text-center ${isDragActive && 'border-purple-600'}`}
				onClick={() => fileInput.current && 'click' in fileInput.current && fileInput?.current?.click()}
			>
				FileDropArea
				<input
					{...getInputProps()}
					type="file"
					ref={(ref) => {
						fileInput.current = ref;
					}}
				/>
			</div>
		</>
	);
}
