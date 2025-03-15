'use client';
import { useState } from 'react';
import FileUploader from '@/components/test/file/FileUploader';
import { useCreateDocumentMutation } from '@/generated/graphql';

export default function CreateDocument() {
	const [mutateFunction, { data, loading, error }] = useCreateDocumentMutation();

	const [name, setName] = useState('테스트 문서');
	const [file, setFile] = useState('');

	const createDocumentBtnEv = () => {
		mutateFunction({
			variables: {
				request: {
					name,
					file,
				},
			},
		});
	};

	return (
		<>
			<div className="flex flex-col">
				<div>
					<label>name </label>
					<input
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>

				<div>
					<label>file </label>
					<input value={file} readOnly={true} />
				</div>

				<FileUploader
					uploadOnComplete={(fileUuid) => {
						setFile(fileUuid);
					}}
				/>
				<button onClick={createDocumentBtnEv}>CreteDocument</button>
			</div>
		</>
	);
}
