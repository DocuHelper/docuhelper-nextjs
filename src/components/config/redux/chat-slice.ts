import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '@/generated/graphql';

interface ChatState {
	chatHistory: [Chat] | undefined;
}

const initialState: ChatState = {
	chatHistory: undefined,
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
			state.chatHistory?.push(action.payload);
			return state;
		},
	},
});

export const { initChatStore, addChatHistory } = chat.actions;
export default chat.reducer;
