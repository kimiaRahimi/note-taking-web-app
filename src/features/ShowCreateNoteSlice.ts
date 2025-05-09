import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowCreateNote: false,
};

const ShowCreateNoteSlice = createSlice({
    name: "showCreateNote",
    initialState,
    reducers: {
        setShowCreateNote: (state, action) => {
            state.isShowCreateNote = action.payload; 
        },
    },
});

export const { setShowCreateNote } = ShowCreateNoteSlice.actions;
export default ShowCreateNoteSlice.reducer;
