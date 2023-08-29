import { StatusBar as expoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Main from "./Main";
import { NativeBaseProvider, Box} from "native-base";
export default function App() {
  return (
    
      <Main />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
