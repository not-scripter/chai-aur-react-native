import Login from "@/screens/Login";
import Signup from "@/screens/Signup";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

export type authStackProps = {
  Signup: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<authStackProps>();

export default function authStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
