import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>flatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
    color: "#fff",
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    margin: 8,
  },
  cardOne: { backgroundColor: "#f00" },
  cardTwo: { backgroundColor: "#0f0" },
  cardThree: { backgroundColor: "#00f" },
});
