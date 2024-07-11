import { View, Text, Linking, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function ActionCards() {
  function openWeb(link: string) {
    Linking.openURL(link);
  }
  return (
    <View>
      <Text className="font-bold text-2xl ml-2 text-white">ActionCards</Text>
      <View className="m-2 bg-slate-300">
        <View>
          <Text className="text-xl font-bold m-2 text-black/70">
            Whats new in javascript es7
          </Text>
        </View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          className="h-48"
        />
        <View className="p-2">
          <Text numberOfLines={3}>
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn't distract from
            the layout. A practice not without controversy, laying out pages
            with meaningless filler text can be very useful when the focus is
            meant to be on design, not content.
          </Text>
        </View>
        <View className="flex-1 items-end m-2">
          <TouchableOpacity
            onPress={() => openWeb("https://not-scripter.github.io")}
            className=""
          >
            <Text>Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
