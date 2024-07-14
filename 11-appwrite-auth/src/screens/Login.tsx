import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FAB, Image } from "@rneui/themed";
import { appwriteContext } from "@/appwrite/appwriteContext";

import { StackScreenProps } from "@react-navigation/stack";
import { authStackProps } from "@/routes/AuthStack";
import { Platform } from "react-native";

type LoginScreenProps = StackScreenProps<authStackProps, "Login">;

export default function Signup({ navigation }: LoginScreenProps) {
  const { appwrite, setIsLoggedIn } = useContext(appwriteContext);

  const [error, seterror] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  const handleSignup = () => {
    if (email.length < 1 || password.length < 1) {
      seterror("All fields are required");
    } else {
      const user = {
        email,
        password,
      };
      appwrite
        .login(user)
        .then((response) => {
          if (response) {
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          console.log(error);
          seterror(error.message);
        });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text>Appwrite Auth</Text>

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
        />

        {/* Validation error */}
        {error ? <Text>{error}</Text> : null}

        {/* Signup button */}
        <Pressable onPress={handleSignup}>
          <Text>Login</Text>
        </Pressable>

        {/* Login navigation */}
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text>
            Already have an account?{"  "}
            <Text>Signup</Text>
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
