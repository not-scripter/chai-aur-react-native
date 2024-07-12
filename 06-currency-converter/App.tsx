import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { currencyByRupee } from "@/constants";
import CurrencyButton from "@/components/CurrencyButton";
// import Snackbar from "react-native-snackbar";
import { useState } from "react";

export default function App() {
  const [inputValue, setinputValue] = useState("");
  const [resultValue, setresultValue] = useState("");
  const [targetCurrency, settargetCurrency] = useState("");

  const onPress = (targetValue: Currency) => {
    if (!inputValue) {
      // Snackbar.show({
      //   text: "enter ruppee value to convert",
      //   backgroundColor: "#f0f0f0",
      //   textColor: "#000",
      // });
    }

    const inputAmmount = parseFloat(inputValue);
    if (!isNaN(inputAmmount)) {
      const convertedValue = inputAmmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setresultValue(result);
      settargetCurrency(targetValue.name);
    } else {
      // Snackbar.show({
      //   text: "not a valid number",
      //   backgroundColor: "#f00f0f",
      //   textColor: "#fff",
      // });
    }
  };

  return (
    <>
      <View className="bg-gray-900 h-full flex-1 items-center">
        <View>
          <View className="flex-row mt-16">
            <Text className="text-white/80 mr-6 font-bold text-2xl">
              🇮🇳 Rupee ₹
            </Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode="always"
              onChangeText={setinputValue}
              keyboardType="number-pad"
              placeholder="enter rupee ammount"
              className="text-white/80 border border-white/60 rounded-md px-4 py-1"
            />
          </View>
          {resultValue && (
            <Text className="text-green-400 text-xl font-bold text-center mt-4">
              {resultValue}
            </Text>
          )}
        </View>
        <View className="mt-4">
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={(every) => every.name}
            renderItem={({ item }) => (
              <Pressable
                style={
                  targetCurrency === item.name && {
                    backgroundColor: "#00a0a0",
                  }
                }
                onPress={() => onPress(item)}
                className="p-2 rounded-md bg-gray-600 mt-2 mr-2"
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
      <StatusBar />
    </>
  );
}
