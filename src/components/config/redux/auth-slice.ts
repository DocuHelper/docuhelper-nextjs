import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/type/response';

interface AuthState {
	user: User | undefined | null;
}

const initialState: AuthState = {
	user: undefined,
};

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		initAuthStore: (state, action: PayloadAction<User | undefined | null>) => {
			state.user = action.payload;
			return state;
		},
	},
});

export const { initAuthStore } = auth.actions;
export default auth.reducer;
