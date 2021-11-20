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
  // initialState: initialState,
  initialState:localStorage.getItem("shippingAddress")===null?initialState:JSON.parse(localStorage.getItem("shippingAddress")),
  reducers: {
    addshippingAddress(state, action) {
      state.country = action.payload.country;
      state.state = action.payload.state;
      state.city = action.payload.city;
      state.streetAddress = action.payload.streetAddress;
      state.pincode=action.payload.pincode;
      state.phoneNumber=action.payload.phoneNumber;
      localStorage.setItem("shippingAddress",JSON.stringify(state));
    },
    removeshippingAddress(state, action) {
      state.country = "";
      state.state ="";
      state.city = "";
      state.streetAddress = "";
      state.pincode="";
      state.phoneNumber="";
      localStorage.removeItem("shippingAddress");
    },
  },
});
const ShippingAddressSliceActions = ShippingAddressSlice.actions;

export { ShippingAddressSlice, ShippingAddressSliceActions };
