import React, { FC } from "react";
import "./HeaderStyles.css";

interface LogoProps {
  children?: any;
  isHeader?: boolean;
}

const Logo: FC<LogoProps> = ({ isHeader, children, ...restProps }) => {
  if (isHeader ?? false) {
    return (
      <div>
        <a href="/" {...restProps}>
          {children}
          <img className="logo" src={`/images/misc/logo.png`} alt="" />
        </a>
      </div>
    );
  }
  return (
    <div {...restProps}>
      {children}
      <img className="logo" src={`/images/misc/logo.png`} alt="" />
    </div>
  );
};

export default Logo;
