import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <Text style={styles.text}>Hello Andrii</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
});
