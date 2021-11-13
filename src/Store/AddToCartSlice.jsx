import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
  totalAmountTraditionalPrice: 0,
  totalItem: 0,
  totalAmountCryptoPrice: 0,
  traditionalCurrency:"",
  cryptoCurrency:""
};

const CartSlice = createSlice({
  name: "cart",
  initialState:localStorage.getItem("cart")===null?initialState:JSON.parse(localStorage.getItem("cart")),
  reducers: {
    increaseItem(state, action) {
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
        localStorage.setItem("cart",JSON.stringify(state));
      console.log(localStorage.getItem("cart"));
    },
    decreaseItem(state, action) {
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
      localStorage.setItem("cart",JSON.stringify(state));
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
      localStorage.setItem("cart",JSON.stringify(state));
    },
    changeItemQuantity(state, action) {
      let itemObject = state.CartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemObject !== undefined) {
        let itemObjectQuantity = itemObject.quantity;
        state.totalAmountTraditionalPrice =
          state.totalAmountTraditionalPrice +
          (parseInt(action.payload.quantity) - itemObjectQuantity) *
          parseFloat(action.payload.TraditionalPrice);
        state.totalAmountCryptoPrice =
          state.totalAmountCryptoPrice +
          (parseInt(action.payload.quantity) - itemObjectQuantity) *
          parseFloat(action.payload.CryptoPrice);
          state.totalItem=state.totalItem+parseInt(action.payload.quantity) - itemObjectQuantity;
        if (action.payload.quantity !== 0) {
          itemObject.quantity = parseInt(action.payload.quantity);
        } else {
          state.CartItems = state.CartItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
      } else {
        state.CartItems.push({
          id: action.payload.id,
          title:action.payload.title,
          quantity: parseInt(action.payload.quantity),
          TraditionalPrice: parseFloat(action.payload.TraditionalPrice),
          CryptoPrice: parseFloat(action.payload.CryptoPrice),
        });
        state.totalAmountTraditionalPrice =
          state.totalAmountTraditionalPrice +
          parseInt(action.payload.quantity) * parseFloat(action.payload.TraditionalPrice);
        state.totalAmountCryptoPrice =
          state.totalAmountCryptoPrice +
          parseInt(action.payload.quantity) * parseFloat(action.payload.CryptoPrice);
          state.totalItem=state.totalItem+parseInt(action.payload.quantity);
      }
      localStorage.setItem("cart",JSON.stringify(state));
      console.log(localStorage.getItem("cart"));
    },
    setCurrency(state, action) {
      state.traditionalCurrency=action.payload.traditionalCurrency;
      state.cryptoCurrency=action.payload.cryptoCurrency;
      localStorage.setItem("cart",JSON.stringify(state));
    },
    OutOfStockHandle(state, action){
      let temp=action.payload.outOfStockItems.map((parentItem)=>{
        let itemObject = state.CartItems.find(
          (item) => ((item.id === parentItem.product_id)&&(parentItem.outOfStock===true))
        );
        if(itemObject!==undefined){
          itemObject.OutOfStock=true;
        }
        return "";
      });
      localStorage.setItem("cart",JSON.stringify(state));
    },
    RemoveOutOfStock(state, action){
      state.CartItems=state.CartItems.filter((item)=>{
        if(item.OutOfStock===true){
          state.totalItem=state.totalItem-parseInt(item.quantity);
          state.totalAmountTraditionalPrice=state.totalAmountTraditionalPrice-parseInt(item.quantity)*parseFloat(item.TraditionalPrice);
          state.totalAmountCryptoPrice= state.totalAmountCryptoPrice-parseInt(item.quantity)*parseFloat(item.CryptoPrice);
        }
        return item.OutOfStock!==true;
      });
      localStorage.setItem("cart",JSON.stringify(state));
    },
    createPaymentCart(state, action){
      localStorage.setItem("Paymentmethod",action.payload.payMethod);
      localStorage.setItem("Paymentcart",JSON.stringify(state));
    },
  },
});
const cartActions = CartSlice.actions;

export { CartSlice, cartActions };
