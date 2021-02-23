import React, { memo, useState, useCallback } from "react";
import c from "classnames";
import s from "./style.styl";
import { addLink } from "Redux/links";
import { getPost } from "Redux/post";
import { useDispatch } from "react-redux";

interface IPickerProps {
  /** Option component Picker. */
  options: Array<string>;
}

const Picker: React.FC<IPickerProps> = ({ options }): JSX.Element => {
  const [isHover, setIsHover] = useState(null as number | null);
  const dispatch = useDispatch();

  const onMouseEnter = useCallback((i: number) => {
    setIsHover(i);
  }, []);

  const onClick = useCallback((el: string) => {
    dispatch(getPost(el));
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(null);
  }, []);

  const renderPickers = () => {
    return options.map((el: string, i: number) => {
      const cn = c(s["picker"], {
        [s["paused-flow"]]: isHover === i ? true : false,
      });

      return (
        <div
          key={el}
          onClick={() => onClick(el)}
          onMouseEnter={() => onMouseEnter(i)}
          onMouseLeave={onMouseLeave}
          className={cn}
        >
          {el}
        </div>
      );
    });
  };

  return <div className={s["container-picker"]}>{renderPickers()}</div>;
};

export default memo(Picker);
