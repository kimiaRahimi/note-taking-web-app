import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
    name:"active",
    initialState:{
        activeStatus:{ allNotes: false, archiveNote: false }
    },
    reducers:{
        setActive:(state,action)=>{
            state.activeStatus = action.payload;
        }
    }
})

export const {setActive} = activeSlice.actions;
export default activeSlice.reducer;