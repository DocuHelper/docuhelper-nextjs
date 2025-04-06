import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chunk, FindChatAnswerRefQuery } from '@/generated/graphql';

interface ChatAnswerRefState {
	chat: string | undefined;
	chatAnswerRef: FindChatAnswerRefQuery | undefined;
	chunk: Chunk | undefined;
}

const initialState: ChatAnswerRefState = {
	chat: undefined,
	chatAnswerRef: undefined,
	chunk: undefined,
};

const chatAnswerRef = createSlice({
	name: 'chatAnswer',
	initialState,
	reducers: {
		loadChatAnswerRef: (
			state,
			action: PayloadAction<{
				ref: FindChatAnswerRefQuery | undefined;
				chat: string;
			}>,
		) => {
			if (state.chat == action.payload.chat) {
				state.chatAnswerRef = undefined;
				state.chat = undefined;
			} else {
				state.chatAnswerRef = action.payload.ref;
				state.chat = action.payload.chat;
			}
			return state;
		},
		clearChatAnswerRef: (state) => {
			state.chatAnswerRef = undefined;
			state.chat = undefined;
			return state;
		},
	},
});

export const { loadChatAnswerRef, clearChatAnswerRef } = chatAnswerRef.actions;
export default chatAnswerRef.reducer;
