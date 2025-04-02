import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '@/generated/graphql';

interface ChatState {
	chatHistory: [Chat] | undefined;
	selectedDocument: string | null;
}

const initialState: ChatState = {
	chatHistory: undefined,
	selectedDocument: null,
};

const chat = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		initChatStore: (state, action: PayloadAction<[Chat]>) => {
			state.chatHistory = action.payload;
			return state;
		},
		addChatHistory: (state, action: PayloadAction<Chat>) => {
			const index = state.chatHistory?.findIndex((chat) => chat.uuid === action.payload.uuid);

			if (index !== undefined && index !== -1 && state.chatHistory) {
				state.chatHistory[index] = action.payload;
			} else {
				state.chatHistory?.push(action.payload);
			}

			return state;
		},

		selectDocument: (state, action: PayloadAction<string>) => {
			state.selectedDocument = action.payload;
			return state;
		},
	},
});

export const { initChatStore, addChatHistory, selectDocument } = chat.actions;
export default chat.reducer;
