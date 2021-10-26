import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  country: "",
  state: "",
  city: "",
  streetAddress: "",
  pincode:"",
  phoneNumber:"",
};

const BillingAddressSlice = createSlice({
  name: "billingAddress",
  initialState: initialState,
  reducers: {
    addBillingAddress(state, action) {
      state.country = action.payload.country;
      state.state = action.payload.state;
      state.city = action.payload.city;
      state.streetAddress = action.payload.streetAddress;
      state.pincode = action.payload.pincode;
      state.phoneNumber=action.payload.phoneNumber;

    },
    removeBillingAddress(state, action) {
        state.country = "";
      state.state ="";
      state.city = "";
      state.streetAddress = "";
      state.pincode="";
      state.phoneNumber="";

    },
  },
});
const BillingAddressSliceActions = BillingAddressSlice.actions;

export { BillingAddressSlice, BillingAddressSliceActions };
