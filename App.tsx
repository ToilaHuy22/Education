import { Image, StyleSheet, Text, View } from "react-native";
import Login from "@pages/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Login />
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
});
