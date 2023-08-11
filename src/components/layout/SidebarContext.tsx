import React, { createContext, useState, ReactNode } from "react";

interface SidebarContextProps {
  open: boolean;
  toggleOpen: () => void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarContext = createContext<SidebarContextProps>({
  open: false,
  toggleOpen: () => {},
});

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => prevOpen);
  };

  return (
    <SidebarContext.Provider value={{ open, toggleOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
