import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native-paper";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

const RestaurantsStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        options={{ headerShown: false }}
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        options={{ headerShown: false }}
        name="RestaurantDetails"
        component={() => <Text>Details Screen</Text>}
      />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantsNavigator;
