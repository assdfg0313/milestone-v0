import React, { FC, ReactNode } from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import MenuItem from "../components/Header/MenuItem";
import ConnectWalletButton from "../components/Header/ConnectWalletButton";
// import FeatureWrapper from "../components/Header/FeatureWrapper";
// import FeatureTitle from "../components/Header/FeatureTitle";
// import Warning from "../components/Header/Warning";

import { useNavigate } from "react-router-dom";

interface HeaderProps {
  className?: string;
  children?: ReactNode;
}

const HeaderCompound: FC<HeaderProps> = ({ className, children }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <HeaderWrapper className="header-wrapper-home">
        <NavBar className="navbar-home">
          <Logo isHeader={true} />
          <MenuItem
            text="Project"
            pageMove={() => {
              navigate("/project");
            }}
          />
          <MenuItem
            text="Profile"
            pageMove={() => {
              navigate("/profile");
            }}
          />
        </NavBar>
        <ConnectWalletButton />
        {children}
      </HeaderWrapper>
    </div>
  );
};

export default HeaderCompound;
