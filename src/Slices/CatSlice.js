import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selection: null,
};

export const CatSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    changeSelection: (state, action) => {
      state.selection = action.payload;
    },
  },
});

export const { changeSelection } = CatSlice.actions;
export default CatSlice.reducer;
