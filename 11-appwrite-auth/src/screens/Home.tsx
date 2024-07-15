import { View, Text, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FAB, Image } from "@rneui/themed";
import { AppwriteContext } from "@/appwrite/AppwriteContext";
import Loading from "@/components/Loading";

type UserProps = {
  name: string;
  email: string;
};

export default function Home() {
  const [userData, setuserData] = useState<UserProps>();

  const { appwrite, setisLoggedIn } = useContext(AppwriteContext);

  const [isLoading, setisLoading] = useState<boolean>(false);

  const handleLogout = () => {
    setisLoading(true);
    appwrite
      .logout()
      .then(() => {
        setisLoggedIn(false);
      })
      .finally(() => {
        setisLoading(false);
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="bg-gray-900 h-full flex-1 items-center justify-center">
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
        <Text className="text-white">
          Build Fast. Scale Big. All in One Place.
        </Text>
        {userData && (
          <View>
            <Text className="text-white">Name: {userData.name}</Text>
            <Text className="text-white">Email: {userData.email}</Text>
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
