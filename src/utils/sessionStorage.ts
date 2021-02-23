import { ILinkList } from "types/state";

export const setSessionStorage = (data: ILinkList[]) => {
  sessionStorage.setItem("posts", JSON.stringify(data));
};
