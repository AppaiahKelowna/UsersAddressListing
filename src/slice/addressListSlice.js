import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ADDRESS_Key = "ProfileDetails";

export const saveAddress = createAsyncThunk('address/saveAddress', async(addressList,thunkAPI) => {
    try {
        await AsyncStorage.setItem(ADDRESS_Key, JSON.stringify(addressList));
        console.log("address is successfully saved to Local storage")
    } catch (error) {
        console.log("error while storing", error)
    }
})

export const fetchAddress = createAsyncThunk('address/fetchAddress', async() => {
    try {
        const stored = await AsyncStorage.getItem(ADDRESS_Key)
        return stored ? JSON.parse(stored) : []
    } catch (error) {
        console.log("error while fetching", error)
    }
})

export const addressListSlice = createSlice({
    name: 'addressList',
    initialState: {
        value: [],
    },
    reducers: {
        saveToState: (state, action) => {
            state.value = [...state.value, action.payload]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAddress.fulfilled, (state, action) => {
            state.value = action.payload ?? [];
        })
    }
})

export const {saveToState } = addressListSlice.actions;
export const selectAddressList = (state) => state.addressList.value;
export default addressListSlice.reducer;