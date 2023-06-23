import React, { ReactNode } from "react";
import "./FooterStyles.css";

interface FooterTitleProps {
  className?: string;
  children?: ReactNode;
}
function FooterTitle({ className, children, ...restProps }: FooterTitleProps) {
  return (
    <div className="footer-title" {...restProps}>
      {children}
      <div className="mt-3">
        Link3 is a Web3 native social platform built on CyberConnect protocol.
      </div>
    </div>
  );
}

export default FooterTitle;
