import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Clipboard from "expo-clipboard";

const passwordSchema = yup.object().shape({
  passwordLength: yup
    .number()
    .min(4, "minimum is 4")
    .max(20, "maximum is 20")
    .required("this is required"),
});

export default function App() {
  const [password, setpassword] = useState("");
  const [isPasswordGenerated, setisPasswordGenerated] = useState(false);
  const [uppercase, setuppercase] = useState(false);
  const [numbers, setnumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charList = "abcdefghijklmnopqrstuvwxyz";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digitChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    if (uppercase) {
      charList += upperCaseChars;
    }
    if (numbers) {
      charList += digitChars;
    }
    if (symbols) {
      charList += specialChars;
    }

    const passwordResult = createPassword(charList, passwordLength);

    setpassword(passwordResult);
    setisPasswordGenerated(true);
  };
  const createPassword = (char: string, passwordLength: number) => {
    let result = "";

    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.round(Math.random() * char.length);
      result += char.charAt(charIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setpassword("");
    setisPasswordGenerated(false);
    setuppercase(false);
    setnumbers(false);
    setsymbols(false);
  };

  return (
    <ScrollView className="bg-gray-900 p-4" keyboardShouldPersistTaps>
      <View className="flex-1 items-center">
        <Text className="text-white text-3xl font-bold mt-8 mb-4">
          Password Generator
        </Text>
        <Formik
          initialValues={{ passwordLength: "" }}
          validationSchema={passwordSchema}
          onSubmit={(values) =>
            generatePasswordString(Number(values.passwordLength))
          }
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            handleSubmit,
            handleReset,
            /* and other goodies */
          }) => (
            <>
              <View className="flex-row justify-center items-center gap-2">
                <View>
                  <Text className="text-white/80 text-xl font-bold">
                    Password Length
                  </Text>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text className="text-red-400">
                      {errors.passwordLength}
                    </Text>
                  )}
                </View>
                <TextInput
                  value={values.passwordLength}
                  onChangeText={handleChange("passwordLength")}
                  placeholder="E.g. 8"
                  keyboardType="numeric"
                  className="text-white border border-white px-4 py-1 rounded-md"
                />
              </View>

              <View className="m-4 flex-1 gap-2">
                <View className="flex-row justify-between gap-4">
                  <Text className="text-white/80 text-xl font-bold">
                    Include Uppercase
                  </Text>
                  <BouncyCheckbox
                    isChecked={uppercase}
                    onPress={() => setuppercase(!uppercase)}
                    fillColor="#0ff"
                  />
                </View>
                <View className="flex-row justify-between gap-4">
                  <Text className="text-white/80 text-xl font-bold">
                    Include Numbers
                  </Text>
                  <BouncyCheckbox
                    isChecked={numbers}
                    onPress={() => setnumbers(!numbers)}
                    fillColor="#0ff"
                  />
                </View>
                <View className="flex-row justify-between gap-4">
                  <Text className="text-white/80 text-xl font-bold">
                    Include Symbols
                  </Text>
                  <BouncyCheckbox
                    isChecked={symbols}
                    onPress={() => setsymbols(!symbols)}
                    fillColor="#0ff"
                  />
                </View>
              </View>

              <View className="flex-row justify-between gap-4">
                <TouchableOpacity
                  disabled={!isValid}
                  onPress={() => handleSubmit()}
                  className=""
                >
                  <Text className="text-white/80 font-bold text-xl border border-green-300 px-2 py-1 rounded-md">
                    Generate Password
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleReset();
                    resetPassword();
                  }}
                >
                  <Text className="text-white/80 font-bold text-xl border border-red-300 px-2 py-1 rounded-md">
                    Reset
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
        {isPasswordGenerated ? (
          <View className="bg-gray-600 w-full p-4 flex-1 items-center rounded-md mt-4">
            <Text
              selectable
              className="text-green-100 font-bold tracking-wide text-xl"
            >
              {password}
            </Text>
            <TouchableOpacity
              onPress={() => Clipboard.setStringAsync(password)}
            >
              <Text className="text-green-300 mt-4 font-bold text-xl">
                Copy
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
