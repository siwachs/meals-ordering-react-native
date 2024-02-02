import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsNavigator from "./restaurants.navigator";
import SettingsScreen from "../../features/restaurants/screens/settings.screen";
import MapScreen from "../../features/restaurants/screens/map.screen";

const Tab = createBottomTabNavigator();
const TAB_ICONS = {
  RestaurantsTab: "restaurant",
  SettingsTab: "settings",
  MapTab: "map",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  return {
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="RestaurantsTab" component={RestaurantsNavigator} />
        <Tab.Screen name="SettingsTab" component={SettingsScreen} />
        <Tab.Screen name="MapTab" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
