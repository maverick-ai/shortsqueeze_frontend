import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  country: "",
  state: "",
  city: "",
  streetAddress: "",
};

const BillingAddressSlice = createSlice({
  name: "billingAddress",
  initialState: initialState,
  // initialState:localStorage.getItem("cart")===null?initialState:localStorage.getItem("cart"),
  reducers: {
    addshippingAddress(state, action) {
      state.country = action.payload.country;
      state.state = action.payload.state;
      state.city = action.payload.city;
      state.streetAddress = action.payload.streetAddress;
    },
    removeshippingAddress(state, action) {
        state.country = "";
      state.state ="";
      state.city = "";
      state.streetAddress = "";
    },
  },
});
const BillingAddressSliceActions = BillingAddressSlice.actions;

export { BillingAddressSlice, BillingAddressSliceActions };
