import React, { ReactNode } from "react";
import "./FooterStyles.css";

interface FooterWrapperProps {
  className?: string;
  children?: ReactNode;
}
function FooterWrapper({
  className,
  children,
  ...restProps
}: FooterWrapperProps) {
  return (
    <footer className={`footer-wrapper ${className}`} {...restProps}>
      {children}
    </footer>
  );
}

export default FooterWrapper;
