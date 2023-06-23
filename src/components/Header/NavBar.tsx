import React, { FC, ReactNode } from "react";
import "./HeaderStyles.css";

interface NavProps {
  className?: string;
  children: ReactNode;
}
const NavBar: FC<NavProps> = ({ className, children, ...restProps }) => {
  return (
    <nav className={className} {...restProps}>
      {children}
    </nav>
  );
};

export default NavBar;
