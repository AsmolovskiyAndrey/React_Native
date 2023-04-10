import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  const [isShowKeuboard, setisShowKeuboard] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/fon.jpeg")}
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeuboard ? 20 : 100 }}
          >
            <View style={styles.inputBox}>
              <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setisShowKeuboard(true);
                }}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputTitle}>PASSWORD</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onFocus={() => {
                  setisShowKeuboard(true);
                }}
              />
            </View>
            <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
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
