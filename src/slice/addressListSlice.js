import { createSlice } from "@reduxjs/toolkit";

export const addressListSlice = createSlice({
    name: 'addressList',
    initialState: {
        value: [],
    },
    reducers: {
        saveToState: (state, action) => {
            console.log("inside saveToState Before", state.value)
            console.log("inside saveToState Before", action.payload)
            state.value = [...state.value, action.payload]
            console.log("inside saveToState After", state.value)
        }
    }
})

export const {saveToState, fetchFromState} = addressListSlice.actions;
export const selectAddressList = (state) => state.addressList.value;
export default addressListSlice.reducer;