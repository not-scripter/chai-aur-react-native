import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Home from "@/screens/Home";
import Details from "@/screens/Details";

export type RootStackParamList = {
  Home: undefined;
  Details: { product: Product };
  RelatedProducts: { product: Product };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Trending Items",
            headerStyle: {
              backgroundColor: "#0f0f0f",
            },
            headerTintColor: "#f0f0f0",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Product Details",
            headerStyle: {
              backgroundColor: "#0f0f0f",
            },
            headerTintColor: "#f0f0f0",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
