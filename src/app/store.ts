import { configureStore } from "@reduxjs/toolkit";
import activeSlice from "../features/activeSlice"


const store = configureStore({
    reducer:{
        active : activeSlice,
    }
})

export default store