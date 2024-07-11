import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.elevatedScroll}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text>red</Text>
          </View>
          <View style={styles.card}>
            <Text>green</Text>
          </View>
          <View style={styles.card}>
            <Text>blue</Text>
          </View>
          <View style={styles.card}>
            <Text>red</Text>
          </View>
          <View style={styles.card}>
            <Text>green</Text>
          </View>
          <View style={styles.card}>
            <Text>blue</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  elevatedScroll: {},
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
    color: "#fff",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: "#f0f0f0",
  },
});
