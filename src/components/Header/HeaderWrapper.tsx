import React, { FC, ReactNode } from "react";
import "./HeaderStyles.css";

interface HeaderProps {
  className?: string;
  children: ReactNode;
}
const HeaderWrapper: FC<HeaderProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <header className={className} {...restProps}>
      {children}
    </header>
  );
};

export default HeaderWrapper;
