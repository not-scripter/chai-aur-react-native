import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

export default function App(): JSX.Element {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colorScheme === "dark" ? "#333" : "#fff",
    },
    text: {
      color: colorScheme === "dark" ? "#fff" : "#000",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {colorScheme === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </View>
  );
}
