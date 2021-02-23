import React, { memo } from "react";
import s from "./style.styl";

const Spinner: React.FC = (): JSX.Element => {
  return <div className={s["spinner"]}></div>;
};

export default memo(Spinner);
