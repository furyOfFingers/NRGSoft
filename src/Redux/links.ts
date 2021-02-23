import { createSlice } from "@reduxjs/toolkit";
import { ILinkList } from "types/state";
import { setSessionStorage } from "utils/sessionStorage";

const sessionStoragePosts: string | any = sessionStorage.getItem("posts");
const initialPosts: ILinkList[] = JSON.parse(sessionStoragePosts) || null;

const links = createSlice({
  name: "links",
  initialState: {
    list: initialPosts || ([] as ILinkList[]),
  },
  reducers: {
    addLink(state, action) {
      const newState = state.list;
      const newList = {} as ILinkList;

      newList.title = action.payload.title;
      newList.url = action.payload.url;
      newState.push(newList);
      state.list = newState;
      setSessionStorage(newState);
    },

    setLike(state, action) {
      const newState = state.list;

      newState.find((list: ILinkList) => {
        if (list.title === action.payload) {
          list.like = !list.like;
        }
      });

      state.list = newState;
      setSessionStorage(newState);
    },

    removeList(state, action) {
      const newState = state.list;

      newState.find((list: ILinkList, i: number) => {
        if (list?.title === action.payload) {
          newState.splice(i, 1);
        }
      });

      state.list = newState;
      setSessionStorage(newState);
    },
  },
});

export const { addLink, setLike, removeList } = links.actions;
export default links.reducer;
