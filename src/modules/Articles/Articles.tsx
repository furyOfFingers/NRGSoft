import React, { memo } from "react";
import { useSelector } from "react-redux";
import IAppState from "types/state";
import Article from "components/Article/Article";
import { ILinkList } from "types/state";

const Articles: React.FC = (): JSX.Element => {
  const list: ILinkList[] = useSelector((state: IAppState) => state.list.list);
  const isFetch: boolean = useSelector(
    (state: IAppState) => state.isFetch.isFetch
  );

  return <Article options={list} isFetch={isFetch} />;
};

export default memo(Articles);
