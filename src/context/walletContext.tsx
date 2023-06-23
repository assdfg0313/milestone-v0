import { createContext, useReducer, Dispatch } from "react";

// 초기 wallet 상태를 정의합니다.
const initialState = {
  account: "",
};

// wallet 상태의 변화를 처리하는 리듀서 함수를 정의합니다.
type WalletState = typeof initialState;
type WalletAction = { type: "SET_ACCOUNT"; payload: string };
type WalletReducer = (state: WalletState, action: WalletAction) => WalletState;

const walletReducer: WalletReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACCOUNT":
      return { ...state, account: action.payload };
    default:
      return state;
  }
};

// 컨텍스트 객체를 생성합니다.
interface WalletContextValue {
  state: WalletState;
  dispatch: Dispatch<WalletAction>;
  setAccount: (address: string) => void;
}
const WalletContext = createContext<WalletContextValue | undefined>(undefined);

const setAccount = (address: string, dispatch: Dispatch<WalletAction>) => {
  dispatch({ type: "SET_ACCOUNT", payload: address });
};

// WalletProvider 컴포넌트를 만들어서 자식 컴포넌트들에게 상태를 전달합니다.
type WalletProviderProps = { children: React.ReactNode };
const WalletProvider = ({ children }: WalletProviderProps) => {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  const value = {
    state,
    dispatch,
    setAccount: (address: string) => setAccount(address, dispatch),
  };
  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
