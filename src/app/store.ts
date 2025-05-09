import { configureStore } from "@reduxjs/toolkit";
import activeSlice from "../features/activeSlice"
import ShowCreateSlice from "../features/ShowCreateNoteSlice"


const store = configureStore({
    reducer:{
        active : activeSlice,
        showCreateNote: ShowCreateSlice,
    }
})

export default store