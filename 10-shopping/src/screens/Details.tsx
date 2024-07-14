import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { RootStackParamList } from "../../App";
import RelatedProducts from "@/components/RelatedProducts";

type DetailsProps = StackScreenProps<RootStackParamList, "Details">;

export default function Details({ route, navigation }: DetailsProps) {
  const { product } = route.params;
  return (
    <View className="bg-gray-900 h-full">
      <View>
        <View className="flex items-center p-4">
          <Image
            source={{ uri: product.imageUrl }}
            style={{ resizeMode: "contain" }}
            className="w-[90vw] h-[90vw] bg-white rounded-md"
          />
        </View>
        <View className="px-4">
          <Text className="text-white/80 font-bold text-xl">
            {product.name}
          </Text>
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
          <View className="flex-row flex-wrap gap-2 mt-2">
            {product.tags.map((item, index) => (
              <Text
                key={index}
                className="text-white/70 font-bold p-2 bg-gray-500 rounded-full"
              >
                {item}
              </Text>
            ))}
          </View>
        </View>
      </View>
      {/*NOTE: Related Products */}
      <RelatedProducts product={product} />
    </View>
  );
}
