import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import store from "./store";
import { Provider } from "react-redux";
import DatePicker from "./screens/DatePicker";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <StatusBar style="auto" />
        <DatePicker />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#345454",
  },
});
