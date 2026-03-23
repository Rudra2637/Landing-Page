import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTab: "Outstation",
  tripType: "Round Trip",
  pickup: "",
  destination: "",
  trip: "",
  date: "",
  returnDate: "",
  time: "",
  suggestions: [],
  activeField: "",
  isLoadingSuggestions: false,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
      state.suggestions = [];
      state.activeField = "";
    },
    setTripType: (state, action) => {
      state.tripType = action.payload;
    },
    setPickup: (state, action) => {
      state.pickup = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTrip: (state, action) => {
      state.trip = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setReturnDate: (state, action) => {
      state.returnDate = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    setActiveField: (state, action) => {
      state.activeField = action.payload;
    },
    setIsLoadingSuggestions: (state, action) => {
      state.isLoadingSuggestions = action.payload;
    },
  },
});

export const {
  setSelectedTab,
  setTripType,
  setPickup,
  setDestination,
  setTrip,
  setDate,
  setReturnDate,
  setTime,
  setSuggestions,
  setActiveField,
  setIsLoadingSuggestions,
} = bookingSlice.actions;

export default bookingSlice.reducer;
