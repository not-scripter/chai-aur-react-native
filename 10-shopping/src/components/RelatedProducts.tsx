import { PRODUCTS_LIST } from "@/data/constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  VirtualizedList,
} from "react-native";
import { RootStackParamList } from "../../App";
import ProduckItem from "./ProduckItem";
import Seperator from "./Seperator";

type RelatedProductsProps = {
  product: Product;
};

export default function RelatedProducts({ product }: RelatedProductsProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView>
      <FlatList
        horizontal
        data={PRODUCTS_LIST}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({ item }) =>
          item.tags.toString() == product.tags.toString() ||
          item.brand == product.brand ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { product: item })}
              className="w-[95vw] overflow-hidden"
            >
              <ProduckItem product={item} />
            </TouchableOpacity>
          ) : null
        }
      />
    </SafeAreaView>
  );
}
