import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";


const Store=configureStore({
    reducer:{
        New:Slice
    }
})

export default Store