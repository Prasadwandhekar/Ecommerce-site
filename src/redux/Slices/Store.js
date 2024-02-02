import { configureStore } from "@reduxjs/toolkit";
import {CartSlice} from "./CartSlice";
// import  CartReducer  from "../Slices/CartSlice";


export const store = configureStore({
    reducer:{
        cart:CartSlice.reducer,
    },
});





