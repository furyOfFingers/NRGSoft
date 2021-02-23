import React, { memo, useCallback } from "react";
import s from "./style.styl";
import Icon from "components/Icon/Icon";
import { ILinkList } from "types/state";
import Spinner from "components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { setLike, removeList } from "Redux/links";

interface IArticleProps {
  /** Option component Article. */
  options: ILinkList[];
  /** Post loading sign. */
  isFetch: boolean;
}

const Article: React.FC<IArticleProps> = ({
  options,
  isFetch,
}): JSX.Element => {
  const dispatch = useDispatch();

  const onClickRemove = useCallback((link: string) => {
    dispatch(removeList(link));
  }, []);

  const onClickLike = useCallback((link: string) => {
    dispatch(setLike(link));
  }, []);

  const renderArticles = () => {
    const arr: JSX.Element[] = [];

    options.forEach((list: ILinkList, i: number) => {
      arr.push(
        <div key={i} className={s["article"]}>
          <Icon
            onClick={() => onClickLike(list.title)}
            name={list.like ? "active_like" : "like"}
          />

          <Icon onClick={() => onClickRemove(list.title)} name="remove" />

          <a target="_blank" href={list.url}>
            {list.title}
          </a>
        </div>
      );
    });

    return arr;
  };

  return (
    <div className={s["container-article"]}>
      {renderArticles()}
      {isFetch && <Spinner />}
    </div>
  );
};

export default memo(Article);
