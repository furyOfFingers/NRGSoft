export interface ILinkList {
  title: string;
  url: string;
  like: boolean;
}

interface IAppState {
  list: { list: ILinkList[] };
  isFetch: { isFetch: boolean };
}

export default IAppState;
