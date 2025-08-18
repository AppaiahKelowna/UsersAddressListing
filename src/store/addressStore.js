import { configureStore } from "@reduxjs/toolkit";
import addressListReducer from "../slice/addressListSlice";

export const store = configureStore({
    reducer: {
        addressList: addressListReducer
    }
})