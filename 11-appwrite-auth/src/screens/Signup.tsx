import { appwriteContext } from "@/appwrite/appwriteContext";
import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { authStackProps } from "@/routes/AuthStack";
import { StackScreenProps } from "@react-navigation/stack";
import { Platform } from "react-native";

type SignupScreenProps = StackScreenProps<authStackProps, "Signup">;

export default function Signup({ navigation }: SignupScreenProps) {
  const { appwrite, setIsLoggedIn } = useContext(appwriteContext);

  const [error, seterror] = useState<string>("");
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [repeatPassword, setrrepeatPassword] = useState<string>("");

  const handleSignup = () => {
    if (
      name.length < 1 ||
      email.length < 1 ||
      password.length < 1 ||
      repeatPassword.length < 1
    ) {
      seterror("All fields are required");
    } else if (password !== repeatPassword) {
      seterror("Passwords do not match");
    } else {
      const user = {
        email,
        password,
        name,
      };
      appwrite
        .signup(user)
        .then((response) => {
          if (response) {
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          setIsLoggedIn(false);
          seterror(error.message);
        });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="bg-gray-900 h-full p-4"
    >
      <View className="bg-gray-700 flex items-center rounded-md p-4">
        <Text className="text-white/80 font-bold text-2xl">Appwrite Auth</Text>

        {/* Name */}
        <TextInput
          value={name}
          onChangeText={(text) => {
            seterror("");
            setname(text);
          }}
          placeholderTextColor={"#AEAEAE"}
          placeholder="Enter yout name"
          className="bg-gray-500 text-white/90 font-bold w-full px-4 rounded-md py-1 mt-4"
        />

        {/* Email */}
        <TextInput
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => {
            seterror("");
            setemail(text);
          }}
          placeholderTextColor={"#AEAEAE"}
          placeholder="Enter your email"
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

        {/* Repeat password */}
        <TextInput
          secureTextEntry
          value={repeatPassword}
          onChangeText={(text) => {
            seterror("");
            setrrepeatPassword(text);
          }}
          placeholderTextColor={"#AEAEAE"}
          placeholder="Repeat Password"
          className="bg-gray-500 text-white/90 font-bold w-full px-4 rounded-md py-1 mt-4"
        />

        {/* Validation error */}
        {error ? (
          <Text className="text-red-300  w-full text-start p-2">{error}</Text>
        ) : null}

        {/* Signup button */}
        <Pressable
          onPress={handleSignup}
          className="bg-gray-200 px-4 py-1 rounded-md mt-4"
        >
          <Text className="text-black/80 font-bold text-lg">Sign Up</Text>
        </Pressable>

        {/* Login navigation */}
        <Pressable
          onPress={() => navigation.navigate("Login")}
          className="px-4 py-1 rounded-md"
        >
          <Text className="text-white/70 mt-4">
            Already have an account?{"  "}
            <Text className="text-blue-300">Login</Text>
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
