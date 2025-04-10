"use client";
import { createContext, useContext, useState } from "react";
import rulesData from "@/data/rules.json";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const { rules } = rulesData;
  const [helpDropdown, setHelpDropdown] = useState(false);

  return (
    <UIContext.Provider value={{ helpDropdown, setHelpDropdown, rules }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
