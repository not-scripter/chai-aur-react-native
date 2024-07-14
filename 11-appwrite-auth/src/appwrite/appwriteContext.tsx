import { View, Text } from "react-native";
import React, { createContext, FC, PropsWithChildren, useState } from "react";

import appwriteService from "./service";

type AppContextProps = {
  appwrite: appwriteService;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const appwriteContext = createContext<AppContextProps>({
  appwrite: new appwriteService(),
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => {},
});

export const appwriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const defaultValue = {
    appwrite: new appwriteService(),
    isLoggedIn,
    setIsLoggedIn: (isLoggedIn: boolean) => {},
  };

  return (
    <appwriteContext.Provider value={defaultValue}>
      {children}
    </appwriteContext.Provider>
  );
};
