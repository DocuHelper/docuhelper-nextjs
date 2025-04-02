import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Document } from '@/generated/graphql';

interface DocumentState {
	document: [Document] | undefined;
}

const initialState: DocumentState = {
	document: undefined,
};

const document = createSlice({
	name: 'document',
	initialState,
	reducers: {
		initDocumentStore: (state, action: PayloadAction<[Document]>) => {
			state.document = action.payload;
			return state;
		},
		updateDocument(state, action: PayloadAction<Document>) {
			const index = state.document?.findIndex((doc) => doc.uuid === action.payload.uuid);

			if (index !== undefined && index !== -1 && state.document) {
				state.document[index] = action.payload;
			} else {
				state.document?.push(action.payload);
			}

			return state;
		},
	},
});

export const { initDocumentStore, updateDocument } = document.actions;
export default document.reducer;
