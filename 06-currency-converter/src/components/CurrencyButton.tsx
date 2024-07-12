import { View, Text } from "react-native";
import React from "react";

import type { PropsWithChildren } from "react";

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

export default function CurrencyButton(
  props: CurrencyButtonProps,
): JSX.Element {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{props.flag}</Text>
      <Text className="text-white/80 font-bold">{props.name}</Text>
    </View>
  );
}
