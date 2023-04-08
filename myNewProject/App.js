import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
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

        <TextInput style={styles.input} />
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
    marginHorizontal: 40,
    height: 40,
    borderRadius: 10,
    color: "#f0f8ff",
    textAlign: "center",
  },
});
