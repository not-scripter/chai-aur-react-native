import Home from "@/screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

export type appStackProps = {
  Home: undefined;
};

const Stack = createStackNavigator<appStackProps>();

export default function appStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerTintColor: "#f0f0f0",
          headerStyle: {
            backgroundColor: "#0f0f0f",
          },
        }}
      />
    </Stack.Navigator>
  );
}
