import React, { ReactNode } from "react";
import "./FooterStyles.css";

interface FooterColumnProps {
  className?: string;
  children?: ReactNode;
}
function FooterColumn({
  className,
  children,
  ...restProps
}: FooterColumnProps) {
  return (
    <div className={`footer-column ${className}`} {...restProps}>
      {children}
    </div>
  );
}

export default FooterColumn;
