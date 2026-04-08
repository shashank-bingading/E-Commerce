import {createSlice} from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromLocalStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  //shorthand syntax for initialState
    reducers: {
        setCrednentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.userInfo = null;
            localStorage.removeItem("userInfo");
        }
    }
});

export const {setCrednentials, logout} = authSlice.actions;

export default authSlice.reducer;
