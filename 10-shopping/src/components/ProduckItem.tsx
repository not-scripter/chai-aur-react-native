import { View, Text, Image } from "react-native";
import React, { PropsWithChildren } from "react";

type ProductProps = PropsWithChildren<{
  product: Product;
}>;

export default function ProduckItem({ product }: ProductProps) {
  return (
    <View className="bg-gray-900 flex-row p-4 gap-2">
      <Image
        source={{ uri: product.imageUrl }}
        style={{ resizeMode: "contain" }}
        className="w-36 h-36 bg-white rounded-md"
      />
      <View>
        <View className="w-52">
          <Text className="text-white/80 font-bold text-lg" style={{}}>
            {product.name}
          </Text>
        </View>
        <View>
          <Text className="text-white/70 font-bold">
            {product.rating} ({product.ratingCount.toLocaleString()})
          </Text>
        </View>
        <View className="flex-row gap-2 items-center">
          <Text className="text-white/70 font-bold text-2xl">
            ₹{product.discountPrice}
          </Text>
          <Text className="text-white/50 font-bold text-sm line-through">
            ₹{product.originalPrice}
          </Text>
        </View>
        <Text className="text-white/70 font-bold">
          {product.offerPercentage}% Off
        </Text>
      </View>
    </View>
  );
}
