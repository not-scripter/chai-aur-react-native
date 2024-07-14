import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import ProduckItem from "@/components/ProduckItem";
import Seperator from "@/components/Seperator";
import { PRODUCTS_LIST } from "@/data/constants";
import { FlatList } from "react-native-gesture-handler";

type HomeProps = StackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  return (
    <View className="bg-gray-900">
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { product: item })}
            className="overflow-hidden"
          >
            <ProduckItem product={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
