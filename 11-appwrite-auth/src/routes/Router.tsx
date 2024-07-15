import { AppwriteContext, AppwriteProvider } from "@/appwrite/AppwriteContext";
import Loading from "@/components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function Router() {
  const [isLoading, setisLoading] = useState<boolean>(true);

  const { appwrite, isLoggedIn, setisLoggedIn } = useContext(AppwriteContext);

  useEffect(() => {
    appwrite
      .getCurrwntUser()
      .then((res: any) => {
        setisLoading(false);
        if (res) {
          setisLoggedIn(true);
        }
      })
      .catch((_: any) => {
        setisLoading(false);
        setisLoggedIn(false);
      });
  }, [appwrite, setisLoggedIn]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
