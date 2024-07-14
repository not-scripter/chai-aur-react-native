import { View, Text, Button } from "react-native";
import React from "react";

import { StackScreenProps, StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";

type DetailsProps = StackScreenProps<RootStackParamList, "Details">;

export default function Details({ route }: DetailsProps) {
  const { productId } = route.params;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>Details: {productId}</Text>
      <Button title="Go to Back" onPress={() => navigation.goBack()}></Button>
      <Button title="Go to Home" onPress={() => navigation.popToTop()}></Button>
    </View>
  );
}
