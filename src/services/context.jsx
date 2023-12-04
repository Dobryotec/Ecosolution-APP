import { createContext, useContext, useState } from "react";

const ActiveLinkContext = createContext();

export const useActiveLinkContext = () => {
  return useContext(ActiveLinkContext);
};

export const ActiveLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState(null);

  const setAndSaveActiveLink = (link) => {
    localStorage.setItem("activeLink", link);
    setActiveLink(link);
  };

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setAndSaveActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};
