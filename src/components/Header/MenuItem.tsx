import React, { FC } from "react";
import "./HeaderStyles.css";

interface MenuProps {
  text: string;
  pageMove: Function;
}
const MenuItem: FC<MenuProps> = ({ text, pageMove, ...restProps }) => {
  return (
    <div
      className="header-menu-item"
      onClick={() => {
        pageMove();
      }}
      {...restProps}
    >
      {text}
    </div>
  );
};

export default MenuItem;
