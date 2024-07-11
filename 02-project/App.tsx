import FlatCards from "./components/FlatCards";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCards from "./components/ActionCards";
import ContactList from "./components/ContactList";

export default function App(): JSX.Element {
  return (
    <SafeAreaView className="bg-gray-700">
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCards />
        <ContactList />
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}
