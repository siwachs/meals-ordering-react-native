import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, // On IOS it is null
  },
});
