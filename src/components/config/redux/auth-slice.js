import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: undefined
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        initAuthStore: (state, {payload}) => {
            state.user = payload
            return state
        }
    },
});

export const {initAuthStore} = auth.actions
export default auth.reducer