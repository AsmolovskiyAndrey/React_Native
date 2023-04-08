import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/fon.jpeg")}
        style={styles.image}
      >
        <View style={styles.innerBox}>
          <Text style={styles.text}>Hello Andrii</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputTitle}>PASSWORD</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <Button title="SIGN IN" />
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
  text: {
    color: "red",
    fontSize: 30,
  },
  innerBox: {
    borderWidth: 1,
    borderColor: "green",
    padding: 40,
    borderRadius: 20,
    width: 250,
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
});
