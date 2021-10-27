import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentCrypto: false,
  currency:"",
};

const PaymentOptionSlice = createSlice({
  name: "paymentOption",
  initialState: initialState,
  reducers: {
    changePaymentToCrypto(state, action) {
      state.paymentCrypto = true;
      state.currency = "ETH";
    },
    changePaymentToTradCurrency(state, action) {
        state.paymentCrypto = false;
        state.currency = action.payload.currency;
    },
  },
});
const PaymentOptionSliceActions = PaymentOptionSlice.actions;

export { PaymentOptionSlice, PaymentOptionSliceActions };
