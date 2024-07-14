import { View, Text, Image } from "react-native";
import React, { PropsWithChildren } from "react";

type ProductProps = PropsWithChildren<{
  product: Product;
}>;

export default function ProduckItem({ product }: ProductProps) {
  return (
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
      </View>
    </View>
  );
}
