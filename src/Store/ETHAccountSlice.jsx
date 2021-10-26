import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  ETHWaaletAccount: "",
};

const ETHAccountSlice = createSlice({
  name: "ETHAccount",
  initialState: initialState,
  reducers: {
    AddAccount(state, action) {
      state.ETHWaaletAccount =action.payload.accountNo;
    },
  },
});
const ETHAccountActions = ETHAccountSlice.actions;

export { ETHAccountSlice, ETHAccountActions };
