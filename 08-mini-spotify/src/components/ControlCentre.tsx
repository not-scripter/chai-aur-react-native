import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import TrackPlayer, {
  State,
  usePlaybackState,
} from "react-native-track-player";

export default function ControlCentre() {
  const playbackState = usePlaybackState();

  const togglePlayback = async (playbackState: State | undefined) => {
    const currentTrack = await TrackPlayer.getActiveTrack();

    if (currentTrack !== null) {
      if (playbackState === State.Paused || playbackState === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  return (
    <View className="bg-gray-700 rounded-md flex-row items-center justify-evenly">
      <TouchableOpacity onPress={skipToPrevious}>
        <Icon name="skip-previous" size={40} color={"#fafafa"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => togglePlayback(playbackState.state)}>
        <Icon
          name={playbackState.state === State.Playing ? "pause" : "play"}
          size={72}
          color={"#fafafa"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={skipToNext}>
        <Icon name="skip-next" size={40} color={"#fafafa"} />
      </TouchableOpacity>
    </View>
  );
}
