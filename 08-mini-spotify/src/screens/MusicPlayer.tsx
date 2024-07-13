import ControlCentre from "@/components/ControlCentre";
import SongInfo from "@/components/SongInfo";
import SongSlider from "@/components/SongSlider";
import React, { useState } from "react";
import { Dimensions, Image, View } from "react-native";
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from "react-native-track-player";

const { width } = Dimensions.get("window");

export default function MusicPlayer() {
  const [track, settrack] = useState<Track | null>();

  useTrackPlayerEvents(
    [Event.PlaybackActiveTrackChanged, Event.MetadataCommonReceived],
    async (event) => {
      switch (event.type) {
        case Event.PlaybackActiveTrackChanged:
          const playingTrack = await TrackPlayer.getActiveTrack();
          settrack(playingTrack);
          break;
      }
    },
  );

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
