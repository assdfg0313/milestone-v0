import React, { ReactNode } from "react";
import "./FooterStyles.css";

interface FooterRowProps {
  className?: string;
  children?: ReactNode;
}
function FooterRow({ className, children, ...restProps }: FooterRowProps) {
  return (
    <div className={`footer-row ${className}`} {...restProps}>
      {children}
    </div>
  );
}

export default FooterRow;
