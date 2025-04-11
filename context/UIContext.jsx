"use client";
import { createContext, useContext, useState } from "react";
import rulesData from "@/data/rules.json";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const { rules } = rulesData;
  const [helpDropdown, setHelpDropdown] = useState(false);
  const [modalCongratulations, setModalCongratulations] = useState(false);

  return (
    <UIContext.Provider value={{ helpDropdown, rules, modalCongratulations, setHelpDropdown, setModalCongratulations }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
