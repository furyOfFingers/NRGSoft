import React from "react";
import c from "classnames";
import s from "./style.styl";

import * as icons from "./Icons";

interface IIconProps {
  /** icon component name. */
  name: string;
  /** callback component icon */
  onClick: () => void;
}

const Icon: React.FC<IIconProps> = ({ name, onClick }): JSX.Element => {
  const cn = c(s["icon"], s[`name__${name}`]);

  const renderIcon = () => {
    switch (name) {
      case "like":
        return (
          <img
            onClick={onClick}
            className={cn}
            alt={name}
            src={icons["like"]}
          />
        );
      case "active_like":
        return (
          <img
            onClick={onClick}
            className={cn}
            alt={name}
            src={icons["active_like"]}
          />
        );
      case "remove":
        return (
          <img
            onClick={onClick}
            className={cn}
            alt={name}
            src={icons["remove"]}
          />
        );

      default:
        return <></>;
    }
  };

  return renderIcon();
};

export default React.memo(Icon);
