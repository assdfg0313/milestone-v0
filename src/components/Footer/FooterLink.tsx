import React, { ReactNode } from "react";
import "./FooterStyles.css";

interface FooterLinkProps {
  className?: string;
  children?: ReactNode;
  isTitle?: boolean;
}

function FooterLink({ children, isTitle, ...restProps }: FooterLinkProps) {
  if (isTitle ?? false) {
    return (
      <div className="footer-link-title" {...restProps}>
        {children}
      </div>
    );
  }
  return (
    <a href="/" className="footer-link" {...restProps}>
      {children}
    </a>
  );
}

export default FooterLink;
