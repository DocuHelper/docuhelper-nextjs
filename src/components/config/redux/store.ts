import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@/components/config/redux/auth-slice';
import chatSlice from '@/components/config/redux/chat-slice';
import documentSlice from '@/components/config/redux/document-slice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			auth: authSlice,
			chat: chatSlice,
			document: documentSlice,
		},
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
