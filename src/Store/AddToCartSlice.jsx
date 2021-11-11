import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
  totalAmountTraditionalPrice: 0,
  totalItem: 0,
  totalAmountCryptoPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  // initialState:localStorage.getItem("cart")===null?initialState:localStorage.getItem("cart"),
  reducers: {
    increaseItem(state, action) {
      console.log("Initial State ..........");
      console.log(current(state));
      let itemObject = state.CartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemObject === undefined) {
        state.CartItems.push({
          id: action.payload.id,
          title:action.payload.title,
          quantity: 1,
          TraditionalPrice: action.payload.TraditionalPrice,
          CryptoPrice: action.payload.CryptoPrice,
        });
      } else {
        itemObject.quantity++;
      }
      state.totalItem++;
      state.totalAmountTraditionalPrice =
        state.totalAmountTraditionalPrice +  parseFloat(action.payload.TraditionalPrice);
      state.totalAmountCryptoPrice =
        state.totalAmountCryptoPrice + parseFloat(action.payload.CryptoPrice);
      console.log(state.totalAmountCryptoPrice);
      console.log(state.totalAmountTraditionalPrice);
    },
    decreaseItem(state, action) {
      console.log("Initial State ..........");
      console.log(current(state));
      let itemObject = state.CartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemObject !== undefined) {
        if (itemObject.quantity !== 1) {
          itemObject.quantity--;
        } else {
          state.CartItems = state.CartItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
        state.totalItem--;
        state.totalAmountTraditionalPrice =
          state.totalAmountTraditionalPrice - parseFloat(action.payload.TraditionalPrice);
        state.totalAmountCryptoPrice =
          state.totalAmountCryptoPrice - parseFloat(action.payload.CryptoPrice);
      }
    },
    removeItem(state, action) {
      let itemObject = state.CartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemObject !== undefined) {
        if (itemObject.quantity === 1) {
          state.CartItems = state.CartItems.filter(
            (item) => item.id !== action.payload.id
          );
          state.totalItem--;
          state.totalAmountTraditionalPrice =
            state.totalAmountTraditionalPrice - parseFloat(action.payload.TraditionalPrice);
          state.totalAmountCryptoPrice =
            state.totalAmountCryptoPrice - parseFloat(action.payload.CryptoPrice);
        } else {
          state.totalItem = state.totalItem - itemObject.quantity;
          state.totalAmountTraditionalPrice =
            state.totalAmountTraditionalPrice -
            itemObject.quantity * parseFloat(action.payload.TraditionalPrice);
          state.totalAmountCryptoPrice =
            state.totalAmountCryptoPrice -
            itemObject.quantity * parseFloat(action.payload.CryptoPrice);
          state.CartItems = state.CartItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    changeItemQuantity(state, action) {
      let itemObject = state.CartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemObject !== undefined) {
        let itemObjectQuantity = itemObject.quantity;
        state.totalAmountTraditionalPrice =
          state.totalAmountTraditionalPrice +
          (action.payload.quantity - itemObjectQuantity) *
            action.payload.TraditionalPrice;
        state.totalAmountCryptoPrice =
          state.totalAmountCryptoPrice +
          (action.payload.quantity - itemObjectQuantity) *
            action.payload.CryptoPrice;
        if (action.payload.quantity !== 0) {
          itemObject.quantity = action.payload.quantity;
        } else {
          state.CartItems = state.CartItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
      } else {
        state.CartItems.push({
          id: action.payload.id,
          title:action.payload.title,
          quantity: action.payload.quantity,
          TraditionalPrice: action.payload.TraditionalPrice,
          CryptoPrice: action.payload.CryptoPrice,
        });
        state.totalAmountTraditionalPrice =
          state.totalAmountTraditionalPrice +
          action.payload.quantity * action.payload.TraditionalPrice;
        state.totalAmountCryptoPrice =
          state.totalAmountCryptoPrice +
          action.payload.quantity * action.payload.CryptoPrice;
      }
      console.log("Inside change item quantity ..........");
      console.log(current(state));
    },
  },
});
const cartActions = CartSlice.actions;

export { CartSlice, cartActions };
