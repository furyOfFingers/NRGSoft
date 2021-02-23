import { createSlice } from "@reduxjs/toolkit";

const isFetch = createSlice({
  name: "set isFetch",
  initialState: {
    isFetch: false,
  },
  reducers: {
    setIsFetch(state, action) {
      state.isFetch = action.payload;
    },
  },
});

export const { setIsFetch } = isFetch.actions;
export default isFetch.reducer;
