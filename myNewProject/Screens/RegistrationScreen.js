import { useState } from "react";
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
  TouchableWithoutFeedback,
} from "react-native";

const initialState = { email: "", password: "" };

export default function RegistrationScreen() {
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);

  const keyboarsHide = () => {
    setisShowKeyboard(false);
  };
  const resetForm = () => {
    console.log(state);
    Keyboard.dismiss();
    setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboarsHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/Photo_BG.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "inherit"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 20 : 113,
              }}
            >
              <Text style={styles.text}>Регистрация</Text>
              <View style={styles.inputBox}>
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
                <Text style={styles.signBtn}>Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 10,
    textAlign: "center",
  },
  form: {
    backgroundColor: "#fff",
    // marginHorizontal: 40,
  },
  inputBox: {
    marginTop: 20,
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

    backgroundColor: "#FF6C00",
  },
  signBtn: {
    color: "#fff",
    fontSize: 14,
  },
});
