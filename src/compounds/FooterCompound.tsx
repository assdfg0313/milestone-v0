import React from "react";
import FooterWrapper from "../components/Footer/FooterWrapper";
import FooterTitle from "../components/Footer/FooterTitle";
import FooterRow from "../components/Footer/FooterRow";
import FooterColumn from "../components/Footer/FooterColumn";
import FooterLink from "../components/Footer/FooterLink";
import Logo from "../components/Header/Logo";

function FooterCompound() {
  return (
    <FooterWrapper>
      <FooterTitle>
        <Logo />
      </FooterTitle>
      <FooterRow>
        <FooterColumn>
          <FooterLink isTitle={true}>My Account</FooterLink>
          <FooterLink>Profile</FooterLink>
          <FooterLink>My W3ST</FooterLink>
          <FooterLink>Settings</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink isTitle={true}>Resources</FooterLink>
          <FooterLink>Branding</FooterLink>
          <FooterLink>Discord</FooterLink>
          <FooterLink>Twitter</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink isTitle={true}>Company</FooterLink>
          <FooterLink>CyberConnect</FooterLink>
          <FooterLink>Why Link3</FooterLink>
          <FooterLink>User Guide</FooterLink>
          <FooterLink>Handbook for Org</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink isTitle={true}>Contact</FooterLink>
          <FooterLink>Mail</FooterLink>
          <FooterLink>Phone</FooterLink>
        </FooterColumn>
      </FooterRow>
    </FooterWrapper>
  );
}

export default FooterCompound;
