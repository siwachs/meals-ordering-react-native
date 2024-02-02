import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantsStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantsNavigator;
