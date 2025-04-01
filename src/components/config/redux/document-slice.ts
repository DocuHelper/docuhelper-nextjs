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
	},
});

export const { initDocumentStore } = document.actions;
export default document.reducer;
