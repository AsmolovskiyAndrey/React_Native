import { useState, useEffect } from "react";
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

export default function LoginScreen() {
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);

  //! Следит открыта ли клавиатура на экране
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setisShowKeyboard(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setisShowKeyboard(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const keyboarsHide = () => {
    setisShowKeyboard(false);
  };
  const resetForm = () => {
    setisShowKeyboard(false);
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
                paddingBottom: isShowKeyboard ? 20 : 78,
              }}
            >
              <Text style={styles.text}>Войти</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                  keyboardType="email-address"
                  onFocus={() => {
                    setisShowKeyboard(true);
                  }}
                  value={state.email}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, email: value }))
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
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
              <View style={styles.btnBox}>
                {!isShowKeyboard && (
                  <TouchableOpacity
                    style={styles.btnReg}
                    activeOpacity={0.7}
                    onPress={resetForm}
                  >
                    <Text style={styles.signBtnReg}>Войти</Text>
                  </TouchableOpacity>
                )}
                {!isShowKeyboard && (
                  <TouchableOpacity
                    style={styles.btnIn}
                    activeOpacity={0.7}
                    onPress={() => {
                      console.log("Заругистрироваться");
                    }}
                  >
                    <Text style={styles.signBtnIn}>
                      Нет аккаунта? Зарегистрироваться
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
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
  },
  inputBox: {
    marginTop: 33,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    height: 50,
    marginHorizontal: 16,
    color: "#212121",
    paddingLeft: 16,
    backgroundColor: "#E8E8E8",
    marginBottom: 16,
  },
  form: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
  },
  btnReg: {
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  btnIn: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  signBtnReg: {
    color: "#fff",
    fontSize: 14,
  },
  signBtnIn: {
    color: "#1B4371",
    fontSize: 16,
  },
});
