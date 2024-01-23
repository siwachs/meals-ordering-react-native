import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar />
      </View>
      <View style={styles.listContainer}>
        <RestaurantInfoCardComponent
          restaurant={{
            name: "Sample Restaurant",
            icon: "https://placekitten.com/300/300",
            photos: [
              "https://placekitten.com/300/300",
              "https://placekitten.com/300/300",
            ],
            address: "123 Main St",
            isOpenedNow: true,
            rating: 4.5,
            isClosedTemporarily: false,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, // On IOS it is null
  },
  searchContainer: {
    padding: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default RestaurantsScreen;
