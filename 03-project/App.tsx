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
  const [lowercase, setlowercase] = useState(false);
  const [uppercase, setuppercase] = useState(false);
  const [numbers, setnumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charList = "";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    if (uppercase) {
      charList += upperCaseChars;
    }
    if (lowercase) {
      charList += lowerCaseChars;
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
    setlowercase(false);
    setnumbers(false);
    setsymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps>
      <View>
        <Text>Password Generator</Text>
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
              <View>
                <View>
                  <Text>Password Length</Text>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text>{errors.passwordLength}</Text>
                  )}
                </View>
                <TextInput
                  value={values.passwordLength}
                  onChangeText={handleChange("passwordLength")}
                  placeholder="E.g. 8"
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text>Include Lowercase</Text>
                <BouncyCheckbox
                  isChecked={lowercase}
                  onPress={() => setlowercase(!lowercase)}
                  fillColor="#0ff"
                />
              </View>
              <View>
                <Text>Include Uppercase</Text>
                <BouncyCheckbox
                  isChecked={uppercase}
                  onPress={() => setuppercase(!uppercase)}
                  fillColor="#0ff"
                />
              </View>
              <View>
                <Text>Include Numbers</Text>
                <BouncyCheckbox
                  isChecked={numbers}
                  onPress={() => setnumbers(!numbers)}
                  fillColor="#0ff"
                />
              </View>
              <View>
                <Text>Include Symbols</Text>
                <BouncyCheckbox
                  isChecked={symbols}
                  onPress={() => setsymbols(!symbols)}
                  fillColor="#0ff"
                />
              </View>

              <View>
                <TouchableOpacity
                  disabled={!isValid}
                  onPress={() => handleSubmit()}
                >
                  <Text>Generate Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleReset();
                    resetPassword();
                  }}
                >
                  <Text>Reset</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
        {isPasswordGenerated ? (
          <View>
            <Text selectable>{password}</Text>
            <TouchableOpacity
              onPress={() => Clipboard.setStringAsync(password)}
            >
              <Text>Copy</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
