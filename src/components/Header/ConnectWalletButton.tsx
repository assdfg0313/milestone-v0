import React, { FC, useContext } from "react";
import "./HeaderStyles.css";
import connect from "../../utils/web3/web3_v0";
import { WalletContext } from "../../context/walletContext";

interface ConnecctWalletButtonProps {
  children?: any;
}

const ConnectWalletButton: FC<ConnecctWalletButtonProps> = ({
  children,
  ...restProps
}) => {
  const walletContext = useContext(WalletContext);

  if (!walletContext) {
    throw new Error("WalletInfo must be used within a WalletProvider.");
  }

  const { state, setAccount } = walletContext;

  if (state.account) {
    return (
      <div className="flex">
        <img
          className="w-10 h-10 hover:cursor-pointer rounded-3xl border-[1px] border-gray-500"
          src={`/images/profile_basic.gif`}
          alt=""
        />
        <div className="ml-2 w-40 h-10 rounded-3xl border-[1px] border-gray-500 flex items-center justify-start overflow-hidden text-gray-500">
          <span className="whitespace-nowrap overflow-ellipsis pl-1 pr-3">
            {state.account}
          </span>
        </div>
      </div>
    );
  }

  return (
    <button
      className="connect-wallet-button"
      onClick={() => {
        connect(setAccount);
      }}
      {...restProps}
    ></button>
  );
};

export default ConnectWalletButton;
