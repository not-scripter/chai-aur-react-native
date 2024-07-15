import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Button, FAB, Image } from "@rneui/themed";
import { AppwriteContext } from "@/appwrite/AppwriteContext";

import { StackScreenProps } from "@react-navigation/stack";
import { authStackProps } from "@/routes/AuthStack";
import { Platform } from "react-native";
import Loading from "@/components/Loading";

type LoginScreenProps = StackScreenProps<authStackProps, "Login">;

export default function Signup({ navigation }: LoginScreenProps) {
  const { appwrite, setisLoggedIn } = useContext(AppwriteContext);

  const [error, seterror] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  const [isLoading, setisLoading] = useState<boolean>(false);

  const handleSignup = () => {
    setisLoading(true);
    if (email.length < 1 || password.length < 1) {
      seterror("All fields are required");
    } else {
      const user = {
        email,
        password,
      };
      appwrite
        .login(user)
        .then((response: any) => {
          if (response) {
            setisLoggedIn(true);
          }
        })
        .catch((error: any) => {
          setisLoggedIn(false);
          seterror(error.message);
        })
        .finally(() => {
          setisLoading(false);
        });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="bg-gray-900 h-full p-4"
    >
      <View className="bg-gray-700 flex items-center rounded-md p-4">
        <Text className="text-white/80 font-bold text-2xl">Appwrite Auth</Text>

        {/* Email */}
        <TextInput
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => {
            seterror("");
            setemail(text);
          }}
          placeholderTextColor={"#AEAEAE"}
          placeholder="Email"
          className="bg-gray-500 text-white/90 font-bold w-full px-4 rounded-md py-1 mt-4"
        />

        {/* Password */}
        <TextInput
          value={password}
          onChangeText={(text) => {
            seterror("");
            setpassword(text);
          }}
          placeholderTextColor={"#AEAEAE"}
          placeholder="Password"
          secureTextEntry
          className="bg-gray-500 text-white/90 font-bold w-full px-4 rounded-md py-1 mt-4"
        />

        {/* Validation error */}
        {error ? (
          <Text className="text-red-300  w-full text-start p-2">{error}</Text>
        ) : null}

        {/* Signup button */}
        <Pressable
          className="bg-gray-200 px-4 py-1 rounded-md mt-4"
          onPress={handleSignup}
        >
          <Text className="text-black/80 font-bold text-lg">Login</Text>
        </Pressable>

        {/* Login navigation */}
        <Pressable
          onPress={() => navigation.navigate("Signup")}
          className="px-4 py-1 rounded-md"
        >
          <Text className="text-white/70 mt-4">
            Already have an account?{"  "}
            <Text className="text-blue-300">Signup</Text>
          </Text>
        </Pressable>
      </View>
      <Button onPress={() => appwrite.logout()}>Logout</Button>
    </KeyboardAvoidingView>
  );
}
