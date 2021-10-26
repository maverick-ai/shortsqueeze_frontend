import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "",
  state: "",
  city: "",
  streetAddress: "",
  pincode:"",
  phoneNumber:"",
};

const ShippingAddressSlice = createSlice({
  name: "shippingAddress",
  initialState: initialState,
  // initialState:localStorage.getItem("cart")===null?initialState:localStorage.getItem("cart"),
  reducers: {
    addshippingAddress(state, action) {
      state.country = action.payload.country;
      state.state = action.payload.state;
      state.city = action.payload.city;
      state.streetAddress = action.payload.streetAddress;
      state.pincode=action.payload.pincode;
      state.phoneNumber=action.payload.phoneNumber;
    },
    removeshippingAddress(state, action) {
      state.country = "";
      state.state ="";
      state.city = "";
      state.streetAddress = "";
      state.pincode="";
      state.phoneNumber=""
    },
  },
});
const ShippingAddressSliceActions = ShippingAddressSlice.actions;

export { ShippingAddressSlice, ShippingAddressSliceActions };
