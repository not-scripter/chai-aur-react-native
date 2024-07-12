import { StatusBar } from "expo-status-bar";
import { createContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [randomColor, setrandomColor] = useState("");

  const createColor = () => {
    let color = "#";

    const hexChar = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
      color += hexChar[Math.floor(Math.random() * 16)];
    }
    setrandomColor(color);
  };

  useEffect(() => {
    createColor();
  }, []);

  return (
    <>
      <View
        style={{ backgroundColor: randomColor }}
        className={`flex-1 items-center justify-center`}
      >
        <TouchableOpacity
          className="backdrop-blur-xl bg-white/80 px-4 py-1 border border-black/60 shadow rounded-md"
          onPress={() => createColor()}
        >
          <Text
            style={{ color: randomColor }}
            className="text-center font-bold text-2xl"
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </>
  );
}
