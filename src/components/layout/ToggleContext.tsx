import React, { createContext, useState, ReactNode } from "react";

interface ToggleContextProps {
  isToggled: boolean;
  toggle: () => void;
}

interface ToggleProviderProps {
  children: ReactNode;
}

export const ToggleContext = createContext<ToggleContextProps>({
  isToggled: false,
  toggle: () => {},
});

export const ToggleProvider: React.FC<ToggleProviderProps> = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled((prevToggled) => !prevToggled);
  };

  return (
    <ToggleContext.Provider value={{ isToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
