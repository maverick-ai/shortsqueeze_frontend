import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  day:"",  
  month: "",
  year:"",
};

const DateChangeSlice = createSlice({
  name: "date",
  initialState: initialState,
  reducers: {
    changeDate(state, action) {
      state.day =action.payload.day;
      state.month =action.payload.month;
      state.year =action.payload.year;
    },
  },
});
const DateChangeSliceActions = DateChangeSlice.actions;

export { DateChangeSlice, DateChangeSliceActions };
