import FlatCards from "./components/FlatCards";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import ElevatedCards from "./components/ElevatedCards";

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}
