import { configureStore } from "@reduxjs/toolkit";
import {CartSlice} from "./AddToCartSlice";


const store=configureStore({reducer: {cart:CartSlice.reducer}});
export default store;