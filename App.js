import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import AllPlayers from "./screens/AllPlayers";
import picture from "./photos/leaguev3.jpeg";

export default function App() {
  return (
    <ImageBackground
      source={picture}
      style={styles.container}
      resizeMode="cover"
    >
      <AllPlayers />
      <StatusBar style="light" backgroundColor="#000" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
