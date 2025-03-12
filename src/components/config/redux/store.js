import {configureStore} from '@reduxjs/toolkit'
import authSlice from "@/components/config/redux/auth-slice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: authSlice
        },
    })
}