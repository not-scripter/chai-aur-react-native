import { View, Text, Button } from "react-native";
import React from "react";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type HomeProps = StackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Details Screen"
        onPress={() =>
          navigation.navigate("Details", {
            productId: "88",
          })
        }
      ></Button>
    </View>
  );
}
