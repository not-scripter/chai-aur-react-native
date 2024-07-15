import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View } from "react-native";
export default function Loading() {
  return (
    <View className="bg-gray-900 h-full flex-1 items-center justify-center">
      <Ionicons name="reload" size={36} color={"#fff"} />
    </View>
  );
}
