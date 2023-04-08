import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/fon.jpeg")}
        style={styles.image}
      >
        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputTitle}>PASSWORD</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <Text style={styles.signBtn}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: "center",
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
    backgroundColor: "#6495ed",
    height: 40,
    height: 40,
    borderRadius: 10,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  signBtn: {
    color: "#f0f8ff",
    fontSize: 14,
  },
});
