import { View, Text } from "react-native";
import React, { PropsWithChildren } from "react";
import { Track } from "react-native-track-player";

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined;
}>;

export default function SongInfo({ track }: SongInfoProps) {
  return (
    <View className="mt-8">
      <View>
        <Text className="text-white/80 text-center text-2xl font-bold">
          {track?.title}
        </Text>
        <Text className="text-white/70 font-bold text-center text-xl">
          {track?.artist} , {track?.album}
        </Text>
      </View>
    </View>
  );
}
