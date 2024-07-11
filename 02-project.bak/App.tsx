import FlatCards from "@/components/FlatCards";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}
