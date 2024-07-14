import { View, Text, Image } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { ScrollView } from "react-native-gesture-handler";

type DetailsProps = StackScreenProps<RootStackParamList, "Details">;

export default function Details({ route }: DetailsProps) {
  const { product } = route.params;
  return (
    <ScrollView>
      <View>
        <Image source={{ uri: product.imgUrl }} />
        <View>
          <Text>{product.name}</Text>
          <View>
            <Text>{product.rating}</Text>
            <Text>({product.ratingCount.toLocaleString()})</Text>
          </View>
          <View>
            <Text>{product.originalPrice}</Text>
            <Text>{product.discountPrice}</Text>
            <Text>{product.offerPercentage}</Text>
          </View>
          <View>
            {product.tags.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
