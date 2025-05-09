import { createSlice } from "@reduxjs/toolkit";

const ShowCreateNoteSlice = createSlice({
    name:"isShowCreateNote",
    initialState:{isShowCreateNote:false},
    reducers:{
     setShowCreateNote:(state,action)=>{
        state.isShowCreateNote = action.payload
     }
    }
})


export const {setShowCreateNote} = ShowCreateNoteSlice.actions;
export default ShowCreateNoteSlice.reducer;
