import { View, Text, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FAB, Image } from "@rneui/themed";
import { appwriteContext } from "@/appwrite/appwriteContext";

type UserProps = {
  name: string;
  email: string;
};

export default function Home() {
  const [userData, setuserData] = useState<UserProps>();

  const { appwrite, setIsLoggedIn } = useContext(appwriteContext);

  const handleLogout = () => {
    appwrite.logout().then(() => {
      setIsLoggedIn(false);
    });
  };

  useEffect(() => {
    appwrite.getCurrwntUser().then((response) => {
      if (response) {
        const user: UserProps = {
          name: response.name,
          email: response.email,
        };
        setuserData(user);
      }
    });
  }, [appwrite]);

  return (
    <SafeAreaView>
      <View>
        <Image
          source={{
            uri: "https://appwrite.io/images-ee/blog/og-private-beta.png",
            width: 400,
            height: 300,
            cache: "default",
          }}
          resizeMode="contain"
        />
        <Text>Build Fast. Scale Big. All in One Place.</Text>
        {userData && (
          <View>
            <Text>Name: {userData.name}</Text>
            <Text>Email: {userData.email}</Text>
          </View>
        )}
      </View>
      <FAB
        placement="right"
        color="#f02e65"
        size="large"
        title="Logout"
        icon={{ name: "logout", color: "#FFFFFF" }}
        onPress={handleLogout}
      />
    </SafeAreaView>
  );
}
