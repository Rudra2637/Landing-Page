import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pickup:"",
    destination:"",
    date:""
}

const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{
        setPickup: (state, action) => {
            state.pickup = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
    }
})

export const { setPickup, setDestination, setDate } = bookingSlice.actions;
export default bookingSlice.reducer;