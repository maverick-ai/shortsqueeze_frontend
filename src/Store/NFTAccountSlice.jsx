import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NFTAccountNumber: "",
};

const NFTAccountNumberSlice = createSlice({
  name: "NFTAccount",
  initialState: initialState,
  reducers: {
    AddAccountNFT(state, action) {
      state.NFTAccountNumber =action.payload.NFTaccountNo;
    },
  },
});
const NFTAccountNumberActions = NFTAccountNumberSlice.actions;

export { NFTAccountNumberSlice, NFTAccountNumberActions };
