import { appwriteContext } from "@/appwrite/appwriteContext";
import Loading from "@/components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function router() {
  const [isLoading, setisLoading] = useState<boolean>(true);

  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(appwriteContext);

  useEffect(() => {
    appwrite
      .getCurrwntUser()
      .then((res: any) => {
        setisLoading(false);
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch((_: any) => {
        setisLoading(false);
        setIsLoggedIn(false);
      });
  }, [appwrite, setIsLoggedIn]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
