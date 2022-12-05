import { createContext, ReactNode, useState } from "react";

type MobileProps = {
  menuOpen: boolean;
  setMenuOpen: (arg0: boolean) => void;
};

type Props = {
  children: ReactNode;
};

export const MobileContext = createContext<MobileProps | null>(null);

export const MobileProvider = ({ children }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MobileContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MobileContext.Provider>
  );
};
