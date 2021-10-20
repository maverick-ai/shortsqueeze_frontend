import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./AddToCartSlice";
import { ShippingAddressSlice } from "./ShippingAddressSlice";
import { BillingAddressSlice } from "./BillingAddressSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    shippingAddress: ShippingAddressSlice.reducer,
    billingAddress: BillingAddressSlice.reducer,
  },
});
export default store;
