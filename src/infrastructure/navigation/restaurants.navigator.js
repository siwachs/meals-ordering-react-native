import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native-paper";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

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
        component={() => <Text>Details Screen</Text>}
      />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantsNavigator;
