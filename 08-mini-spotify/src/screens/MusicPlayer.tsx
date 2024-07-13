import { View, Text, Dimensions, Image, FlatList } from "react-native";
import React, { useState } from "react";
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from "react-native-track-player";
import { playlistData } from "../constants";
import SongInfo from "@/components/SongInfo";
import SongSlider from "@/components/SongSlider";
import ControlCentre from "@/components/ControlCentre";

const { width } = Dimensions.get("window");

export default function MusicPlayer() {
  const [track, settrack] = useState<Track | null>();

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    switch (event.type) {
      case Event.PlaybackTrackChanged:
        const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
        settrack(playingTrack);
        break;
    }
  });

  const renderArtwork = () => {
    return (
      <View className="mt-16 flex items-center">
        <View>
          {track?.artwork && (
            <Image
              source={{ uri: track?.artwork }}
              className="w-[80vw] h-[80vw] rounded-md"
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <View>
      {renderArtwork()}
      <SongInfo track={track} />
      <SongSlider />
      <ControlCentre />
    </View>
  );
}
