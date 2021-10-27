import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:""
};

const UserTokenSlice = createSlice({
  name: "userToken",
  initialState:localStorage.getItem("token")===null?initialState:{token:localStorage.getItem("token")},
  reducers: {
    setToken(state, action) {
        state.token=action.payload.token;
        localStorage.setItem("token",action.payload.token)
        console.log("inside addition of token");
        console.log(state.token);
    },
    deleteToken(state, action) {
        state.token="";
        localStorage.removeItem("token");
    },
  },
});
const UserTokenActions = UserTokenSlice.actions;

export { UserTokenSlice, UserTokenActions };
