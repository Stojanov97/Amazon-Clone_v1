import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selection: null,
};

export const CatSlice = createSlice({
  name: "Cat",
  initialState,
  reducers: {
    changeSelection: (state, action) => {
      state.selection = action.payload;
    },
  },
});

export const { changeSelection } = CatSlice.actions;
export const selectedSelection = (state) => state.CatSlice.selection;
export default CatSlice.reducer;
