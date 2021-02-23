import { createSlice } from "@reduxjs/toolkit";

const post = createSlice({
  name: "get post",
  initialState: {},
  reducers: {
    getPost(_, action) {
      return action.payload;
    },
  },
});

export const { getPost } = post.actions;
export default post.reducer;
