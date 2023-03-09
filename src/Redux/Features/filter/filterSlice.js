import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "All",
  sort: "default",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterStatus: (state, action) => {
      state.status = action.payload;
    },
    filterSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});
export default filterSlice.reducer;
export const { filterSort, filterStatus } = filterSlice.actions;
