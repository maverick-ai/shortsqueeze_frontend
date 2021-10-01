import {createSlice,current} from "@reduxjs/toolkit";


const initialState={CartItems:[],totalAmount:0,totalItem:0};


const CartSlice=createSlice({
    name:'cart',
    initialState:initialState,
    // initialState:localStorage.getItem("cart")===null?initialState:localStorage.getItem("cart"),
    reducers:{
        increaseItem(state,action){
            console.log("Initial State ..........");
            console.log(current(state))
            let itemObject=state.CartItems.find(item=>item.id===action.payload.id);
            if(itemObject===undefined){
                state.CartItems.push({id:action.payload.id, quantity:1,price:action.payload.price});
                
            }
            else{
                itemObject.quantity++;
            }
            state.totalItem++;
            state.totalAmount=state.totalAmount+action.payload.price;
        },
        decreaseItem(state,action){
            console.log("Initial State ..........");
            console.log(current(state))
            let itemObject=state.CartItems.find(item=>item.id===action.payload.id);
            if(itemObject!==undefined){
                if(itemObject.quantity!==1){
                    itemObject.quantity--;
                    
                }else{
                    state.CartItems=state.CartItems.filter(item=> item.id!==action.payload.id);
                }
                state.totalItem--;
                state.totalAmount=state.totalAmount-action.payload.price;
            }
           
        },
        removeItem(state,action){
            let itemObject=state.CartItems.find(item=>item.id===action.payload.id);
            if(itemObject!==undefined){
                if(itemObject.quantity===1){
                    state.CartItems=state.CartItems.filter(item=> item.id!==action.payload.id);
                    state.totalItem--;
                    state.totalAmount=state.totalAmount-action.payload.price;
                }else{
                    state.totalItem=state.totalItem-itemObject.quantity;
                    state.totalAmount=state.totalAmount-itemObject.quantity*action.payload.price;
                    state.CartItems=state.CartItems.filter(item=> item.id!==action.payload.id);
                }
            }
        },
    }
});
const cartActions=CartSlice.actions;

export {CartSlice,cartActions};