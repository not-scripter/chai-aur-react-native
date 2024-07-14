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

        {/* Name */}
        <TextInput
          value={name}
          onChangeText={(text) => {
            seterror("");
            setname(text);
          }}
          placeholderTextColor={"#AEAEAE"}
          placeholder="Name"
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
        />

        {/* Validation error */}
        {error ? <Text>{error}</Text> : null}

        {/* Signup button */}
        <Pressable onPress={handleSignup}>
          <Text>Sign Up</Text>
        </Pressable>

        {/* Login navigation */}
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text>
            Already have an account?{"  "}
            <Text>Login</Text>
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
