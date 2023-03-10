import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveAPI } from "./saveAPI";

const initialState = {
  isSaved: false,
};

// async Thunk
export const fetchSave = createAsyncThunk("save/fetchSave", async (id) => {
  const save = await saveAPI(id);
  return save;
});

const saveSlice = createSlice({
  name: "save",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchSave.fulfilled, (state) => {
      state.isSaved = true;
      console.log(state.save);
    });
  },
});
export default saveSlice.reducer;
