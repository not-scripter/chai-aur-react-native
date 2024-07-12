import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import DiseOne from "@/assets/One.png";
import DiseTwo from "@/assets/Two.png";
import DiseThree from "@/assets/Three.png";
import DiseFour from "@/assets/Four.png";
import DiseFive from "@/assets/Five.png";
import DiseSix from "@/assets/Six.png";
import { PropsWithChildren, useState } from "react";

type DiseProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dise = ({ imageUrl }: DiseProps): JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} className="w-48 h-48" />
    </View>
  );
};

export default function App() {
  const [diseImage, setdiseImage] = useState<ImageSourcePropType>(DiseOne);

  const rollDise = () => {
    let randomNumber: number = 1;
    let generatedNumber: number = 1;
    const generateNumber = () => {
      generatedNumber = Math.floor(Math.random() * 6 + 1);
    };
    generateNumber();
    if (randomNumber !== generatedNumber) {
      randomNumber = generatedNumber;
    } else {
      generateNumber();
    }
    // const tempNum = genNum();
    // tempNum !== randomNumber ? (randomNumber = tempNum) : genNum();

    switch (randomNumber) {
      case 1:
        setdiseImage(DiseOne);
        break;
      case 2:
        setdiseImage(DiseTwo);
        break;
      case 3:
        setdiseImage(DiseThree);
        break;
      case 4:
        setdiseImage(DiseFour);
        break;
      case 5:
        setdiseImage(DiseFive);
        break;
      case 6:
        setdiseImage(DiseSix);
        break;

      default:
        setdiseImage(DiseOne);
        break;
    }
  };

  return (
    <>
      <View className="flex-1 items-center justify-center h-full bg-gray-900">
        <Dise imageUrl={diseImage} />
        <TouchableOpacity
          className="bg-gray-400 px-4 py-1 mt-4 rounded-md"
          onPress={() => rollDise()}
        >
          <Text className="text-white/80 text-2xl font-bold">Roll</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </>
  );
}
