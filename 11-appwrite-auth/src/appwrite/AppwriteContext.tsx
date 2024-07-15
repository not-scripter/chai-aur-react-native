import React, { createContext, FC, PropsWithChildren, useState } from "react";

import appwriteService from "./service";

type AppContextProps = {
  appwrite: appwriteService;
  isLoggedIn: boolean;
  setisLoggedIn: (isLoggedIn: boolean) => void;
};

export const AppwriteContext = createContext<AppContextProps>({
  appwrite: new appwriteService(),
  isLoggedIn: false,
  setisLoggedIn: () => {},
});

export const AppwriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const defaultValue = {
    appwrite: new appwriteService(),
    isLoggedIn,
    setisLoggedIn,
  };

  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  );
};
