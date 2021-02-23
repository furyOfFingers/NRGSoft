import React from "react";
import RunPickers from "modules/RunPickers/RunPickers";
import s from "./style.styl";
import Articles from "modules/Articles/Articles";

const MainPage: React.FC = (): JSX.Element => {
  return (
    <div className={s["container-main-page"]}>
      <RunPickers />
      <Articles />
    </div>
  );
};

export default MainPage;
