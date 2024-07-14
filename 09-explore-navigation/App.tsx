import Details from "@/screens/Details";
import Home from "@/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string };
};

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "09 Pronect App" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: "09 Pronect App Desc" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
