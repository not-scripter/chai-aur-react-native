import { View, Text, Image } from "react-native";
import React from "react";

export default function FancyCards() {
  return (
    <View className="">
      <Text className="text-2xl font-bold ml-2 text-white">
        Trending Places
      </Text>
      <View className="m-2 bg-slate-300 h-96">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          className="w-full h-48 bg-cover bg-center"
        />
        <View className="w-full flex flex-grow gap-2 p-2">
          <Text className="text-2xl font-bold tracking-wider">
            Victoria Memorial
          </Text>
          <Text className="font-bold tracking-wide text-xl text-black/80">
            The City Of Joy
          </Text>
          <Text className="text-sm font-bold shrink text-black/60">
            Kolkata also known as The Coty of Joy is located in west bengal in
            india.
          </Text>
          <Text className="">1 hour away</Text>
        </View>
      </View>
    </View>
  );
}
