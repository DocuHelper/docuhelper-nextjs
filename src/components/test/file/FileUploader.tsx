'use client';
import { useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { useUploadFileUrlMutation } from '@/generated/graphql';

type FileUploaderProps = {
	validateFileInfo?: (fileName: string, fileExtension: string, fileSize: Number) => boolean;
	uploadOnComplete: (file: FileType) => void;
	children?: React.ReactNode;
};

type FileType = {
	fileUuid: string;
	fileName: string;
	extension: string;
};

export default function FileUploader({ uploadOnComplete, validateFileInfo, children }: FileUploaderProps) {
	const fileInput = useRef<HTMLInputElement | null>(null);
	const [mutateFunction, { data, loading, error }] = useUploadFileUrlMutation();
	const onDrop = async (acceptedFiles: File[]) => {
		// const file = event.target?.files[0];
		const file = acceptedFiles[0];
		if (!file) return;

		// 파일 정보 추출
		const fileName = file.name;
		const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1); // 확장자 추출
		const fileSize = file.size;

		if (validateFileInfo && !validateFileInfo(fileName, fileExtension, fileSize)) {
			return;
		}

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
		uploadOnComplete({
			fileUuid: uuid,
			extension: fileExtension,
			fileName: fileName,
		});
	};
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<div
				{...getRootProps()}
				className={`relative h-full w-full cursor-pointer select-none`}
				onClick={() => fileInput.current && 'click' in fileInput.current && fileInput?.current?.click()}
			>
				{children || 'FileDropArea'}
				<div className="inert:0 absolute top-0 h-full w-full bg-black opacity-0 transition-all hover:opacity-10"></div>
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
