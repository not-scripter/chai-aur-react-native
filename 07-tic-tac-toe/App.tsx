import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import Icons from "@/components/Icons";

export default function App() {
  const [isCross, setisCross] = useState<boolean>(false);
  const [winner, setwinner] = useState<string>("");
  const [gameState, setgameState] = useState(new Array(9).fill("empty", 0, 9));

  const relodeGame = () => {
    setisCross(false);
    setwinner("");
    setgameState(new Array(9).fill("empty", 0, 9));
  };

  const checkIsWinner = () => {
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== "empty"
    ) {
      setwinner(
        `${gameState[0] === "cross" ? "Opponent" : "You"} won the game! 🥳`,
      );
    } else if (
      gameState[3] !== "empty" &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setwinner(
        `${gameState[3] === "cross" ? "Opponent" : "You"} won the game! 🥳`,
      );
    } else if (
      gameState[6] !== "empty" &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setwinner(
        `${gameState[6] === "cross" ? "Opponent" : "You"} won the game! 🥳`,
      );
    } else if (
      gameState[0] !== "empty" &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setwinner(
        `${gameState[0] === "cross" ? "Opponent" : "You"} won the game! 🥳`,
      );
    } else if (
      gameState[1] !== "empty" &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setwinner(
        `${gameState[1] === "cross" ? "Opponent" : "You"} won the game! 🥳`,
      );
    } else if (
      gameState[2] !== "empty" &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setwinner(
        `${gameState[2] === "cross" ? "Opponent" : "You"} won the game! 🥳`,
      );
    } else if (
      gameState[0] !== "empty" &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setwinner(
        `${gameState[0] === "cross" ? "Opponent" : "You"} won the game! 🥳`,
      );
    } else if (
      gameState[2] !== "empty" &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setwinner(
        `${gameState[2] === "cross" ? "Opponent" : "You"} won the game! 🥳`,
      );
    } else if (!gameState.includes("empty", 0)) {
      setwinner("Draw game... ⌛️");
    }
  };

  const onChangeItem = (itemNumber: number) => {
    if (winner) {
      alert(winner);
    }

    if (gameState[itemNumber] === "empty") {
      gameState[itemNumber] = isCross ? "cross" : "circle";
      setisCross(!isCross);
    } else {
      alert("already filled");
    }

    checkIsWinner();
  };

  return (
    <SafeAreaView className="bg-gray-900 h-full flex-1 items-center justify-center">
      <StatusBar />
      <View style={isCross ? {} : {}} className="mt-16">
        {winner ? (
          <Text className="text-2xl font-bold text-green-300 text-center">
            {winner}
          </Text>
        ) : (
          <Text className="text-2xl font-bold text-white/80 text-center">
            It's {isCross ? "Opponent" : "Your"}'s take
          </Text>
        )}
      </View>
      <View className="flex-1 justify-center items-center mt-8">
        <FlatList
          numColumns={3}
          data={gameState}
          renderItem={({ item, index }) => (
            <Pressable
              className="bg-gray-700 p-2 m-2 rounded-full shadow-md shadow-white w-24 h-24 flex items-center justify-center"
              disabled={winner ? true : false}
              key={index}
              onPress={() => onChangeItem(index)}
            >
              <Icons name={item} />
            </Pressable>
          )}
        />
        <TouchableOpacity
          onPress={() => relodeGame()}
          className="mb-16 bg-gray-700 px-4 py-1 shadow-md shadow-white rounded-full"
        >
          <Text className="text-white/80 text-xl font-bold">
            {winner ? "Start again" : "Reload"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
