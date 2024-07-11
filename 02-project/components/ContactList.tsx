import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: "Hitesh Choudhary",
      status: "Just an extra ordinary teacher",
      imageUrl: "https://avatars.githubusercontent.com/u/11613311?v=4",
    },
    {
      uid: 2,
      name: "Anurag Tiwari",
      status: "I ❤️ To Code and Teach!",
      imageUrl: "https://avatars.githubusercontent.com/u/94738352?v=4",
    },
    {
      uid: 3,
      name: "Sanket Singh",
      status: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
    },
    {
      uid: 4,
      name: "Anirudh Jwala",
      status: "Building secure Digital banks",
      imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4",
    },
  ];
  return (
    <View>
      <Text className="font-bold text-2xl ml-2 text-white">Contacts</Text>
      <ScrollView scrollEnabled={false}>
        <View className="flex-1 items-center justify-center gap-4 m-2">
          {contacts.map(({ uid, name, status, imageUrl }) => (
            <View key={uid} className="flex-row items-center">
              <Image
                source={{ uri: imageUrl }}
                className="h-16 w-16 rounded-full"
              />
              <View className="flex-1 ml-2">
                <Text className="font-bold text-white">{name}</Text>
                <Text className="text-white/80">{status}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
