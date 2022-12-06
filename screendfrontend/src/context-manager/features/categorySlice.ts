import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface categoryState {
  filterById: number;
}

const initialState: categoryState = {
  filterById: 0,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    filterBy: (state, action) => {
      state.filterById = action.payload;
    },
  },
});

export const { filterBy } = categorySlice.actions;
export const categoryState = (state: RootState) => state.category.filterById;
export default categorySlice.reducer;
