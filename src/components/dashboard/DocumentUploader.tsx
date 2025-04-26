'use client';

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import FileUploader from '@/components/test/file/FileUploader';
import { CloudArrowUpIcon } from '@heroicons/react/16/solid';
import { DocumentType, useCreateDocumentMutation } from '@/generated/graphql';
import { Alert } from '@/components/common/Alert';

const ALLOW_FILE_TYPE = {
	[DocumentType.PdfMultiColumn]: ['pdf'],
	[DocumentType.PdfSingleColumn]: ['pdf'],
	[DocumentType.Ppt]: ['ppt', 'pptx'],
	[DocumentType.Doc]: ['doc', 'docx'],
	[DocumentType.Text]: ['md', 'txt'],
};

export default function DocumentUploader() {
	const [documentCreateMutation] = useCreateDocumentMutation();
	const [isPDFPopupOpen, setPDFPopupOpen] = useState(false);
	const [uploadedFile, setUploadedFile] = useState<{ fileName: string; fileUuid: string } | null>(null);

	const showFileTypeErrMessage = () => {
		Alert.warning(<p className="text-nowrap">해당 파일 형식은 아직 지원되지 않아요.</p>);
	};

	return (
		<>
			<FileUploader
				validateFileInfo={(fileName, fileExtension) => {
					const lowerExtension = fileExtension.toLowerCase();
					const allowedExtensions = Object.values(ALLOW_FILE_TYPE).flat();

					if (!allowedExtensions.includes(lowerExtension)) {
						showFileTypeErrMessage();
						return false;
					}
					return true;
				}}
				uploadOnComplete={async (file) => {
					setUploadedFile(file);
					const lowerExtension = file.extension.toLowerCase();
					if (lowerExtension === 'pdf') {
						setPDFPopupOpen(true);
						return;
					}
					const matchedEntry = Object.entries(ALLOW_FILE_TYPE).find(([documentType, extensions]) =>
						extensions.includes(lowerExtension),
					);

					if (matchedEntry) {
						const [docType] = matchedEntry;
						documentCreateMutation({
							variables: {
								request: {
									name: file.fileName,
									file: file.fileUuid,
									type: docType as DocumentType,
								},
							},
						});
					} else {
						showFileTypeErrMessage();
					}
				}}
			>
				<div className="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-500 p-3">
					<CloudArrowUpIcon className="aspect-square h-full text-gray-500" />
					<div className="mr-4" />
					<p>문서 업로드</p>
				</div>
			</FileUploader>
			{isPDFPopupOpen && uploadedFile && (
				<PDFTypeSelectorPopup
					onClose={() => setPDFPopupOpen(false)}
					onSelectType={(type) => {
						documentCreateMutation({
							variables: {
								request: {
									name: uploadedFile.fileName,
									file: uploadedFile.fileUuid,
									type: type,
								},
							},
						});
						setPDFPopupOpen(false);
						setUploadedFile(null);
					}}
				/>
			)}
		</>
	);
}

function PDFTypeSelectorPopup({
	onClose,
	onSelectType,
}: {
	onClose: () => void;
	onSelectType: (type: DocumentType) => void;
}) {
	return (
		<Dialog open onClose={onClose} className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
						<div className="mt-3 text-center sm:mt-5">
							<DialogTitle as="h3" className="text-base font-semibold text-gray-900">
								어떤 형태의 문서인가요?
							</DialogTitle>
							<div className="mt-4 flex gap-4">
								<button onClick={() => onSelectType(DocumentType.PdfSingleColumn)}>
									<SingleRowDocument />
								</button>
								<button onClick={() => onSelectType(DocumentType.PdfMultiColumn)}>
									<MutiRowDocument />
								</button>
							</div>
							<div className="mt-5 flex gap-4 sm:mt-6">
								<button
									className="grow cursor-pointer rounded-md bg-gray-300 p-1.5 text-black"
									onClick={onClose}
								>
									취소
								</button>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}

function SingleRowDocument() {
	return (
		<div className="flex h-40 w-40 cursor-pointer flex-col gap-4 rounded border border-gray-400 p-4">
			<div className="h-3 w-full bg-gray-200" />
			<div className="h-3 w-full bg-gray-200" />
			<div className="h-3 w-full bg-gray-200" />
			<div className="h-3 w-full bg-gray-200" />
			<div className="h-3 w-full bg-gray-200" />
		</div>
	);
}

function MutiRowDocument() {
	return (
		<div className="flex h-40 w-40 cursor-pointer flex-col gap-4 rounded border border-gray-400 p-4">
			<div className="flex gap-2">
				<div className="h-3 w-full bg-gray-200" />
				<div className="h-3 w-full bg-gray-200" />
			</div>
			<div className="flex gap-2">
				<div className="h-3 w-full bg-gray-200" />
				<div className="h-3 w-full bg-gray-200" />
			</div>
			<div className="flex gap-2">
				<div className="h-3 w-full bg-gray-200" />
				<div className="h-3 w-full bg-gray-200" />
			</div>
			<div className="flex gap-2">
				<div className="h-3 w-full bg-gray-200" />
				<div className="h-3 w-full bg-gray-200" />
			</div>
			<div className="flex gap-2">
				<div className="h-3 w-full bg-gray-200" />
				<div className="h-3 w-full bg-gray-200" />
			</div>
		</div>
	);
}
