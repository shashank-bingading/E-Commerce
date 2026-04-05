import { createSlice } from "@reduxjs/toolkit";

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {cartItems: []};

const initialState = cartFromLocalStorage;

const cartSlice = createSlice({
  name: "cart",
  initialState,
    reducers: {
        //add to cart reducer
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x._id === item._id);

            if (existItem) {
                state.cartItems = state.cartItems.map((x) =>
                    x._id === existItem._id ? item : x
                );
            } else {
                state.cartItems = [...state.cartItems, item];
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        //remove from cart reducer
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state));
        },
        //clear cart reducer
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.setItem("cart", JSON.stringify(state));
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
