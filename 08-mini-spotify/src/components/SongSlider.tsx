import Slider from "@react-native-community/slider";
import React from "react";
import { Text, View } from "react-native";
import { useProgress } from "react-native-track-player";

export default function SongSlider() {
  const { position, duration } = useProgress();
  return (
    <View className="mt-8">
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor="#fff"
        maximumTrackTintColor="#fff"
      />
      <View className="flex-row justify-between mb-4">
        <Text className="text-white/80 font-bold">
          {new Date(position * 1000).toISOString().substring(15, 19)}
        </Text>
        <Text className="text-white/80 font-bold">
          {new Date((duration - position) * 1000)
            .toISOString()
            .substring(15, 19)}
        </Text>
      </View>
    </View>
  );
}
