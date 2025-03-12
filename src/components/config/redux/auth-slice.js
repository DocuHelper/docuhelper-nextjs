import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: undefined
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        initLogin: (state, {payload}) => {
            state.user = payload
            return state
        }
    },
});

export const {initLogin} = auth.actions
export default auth.reducer