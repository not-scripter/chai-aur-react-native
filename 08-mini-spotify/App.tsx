import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import TrackPlayer from "react-native-track-player";
import { playbackService, setupPlayer, addTrack } from "./musicPlayerServices";
import { useEffect, useState } from "react";
import MusicPlayer from "@/screens/MusicPlayer";

export default function App() {
  const [isPlayerReady, setisPlayerReady] = useState(false);

  async function setupFunction() {
    let isSetup = await setupPlayer();
    if (isSetup) {
      await addTrack();
    }
    setisPlayerReady(isSetup);
  }

  useEffect(() => {
    setupFunction();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-gray-900 h-full p-4">
      <StatusBar style="light" />
      <MusicPlayer />
    </SafeAreaView>
  );
}

TrackPlayer.registerPlaybackService(() => playbackService);
