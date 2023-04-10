import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
} from "react-native";

const initialState = { email: "", password: "" };

export default function App() {
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setdimensions(width);
      console.log(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboarsHide = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setstate(initialState);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/fon.jpeg")}
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "inherit"}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}
          >
            <View style={styles.inputBox}>
              <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setisShowKeyboard(true);
                }}
                value={state.email}
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, email: value }))
                }
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputTitle}>PASSWORD</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onFocus={() => {
                  setisShowKeyboard(true);
                }}
                value={state.password}
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, password: value }))
                }
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.7}
              onPress={keyboarsHide}
            >
              <Text style={styles.signBtn}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 10,
    color: "#f0f8ff",
    textAlign: "center",
  },
  form: {
    marginHorizontal: 40,
  },
  inputBox: {
    marginTop: 20,
  },
  inputTitle: {
    color: "#f0f8ff",
    marginBottom: 5,
    fontSize: 12,
  },
  btn: {
    height: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,

    ...Platform.select({
      ios: {
        backgroundColor: "#6495ed",
      },
      android: {
        backgroundColor: "red",
      },
    }),
    // backgroundColor: Platform.OS === "ios" ? "#6495ed" : "red",
  },
  signBtn: {
    color: Platform.OS === "ios" ? "black" : "#f0f8ff",
    fontSize: 14,
  },
});
