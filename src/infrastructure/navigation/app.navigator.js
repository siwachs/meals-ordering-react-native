import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsNavigator from "./restaurants.navigator";
import MapScreen from "../../features/map/screens/map.screen";
import SettingsScreen from "../../features/settings/screens/settings.screen";

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
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="RestaurantsTab"
        options={{ tabBarLabel: "Restaurants" }}
        component={RestaurantsNavigator}
      />
      <Tab.Screen
        name="MapTab"
        options={{ tabBarLabel: "Map" }}
        component={MapScreen}
      />
      <Tab.Screen
        name="SettingsTab"
        options={{ tabBarLabel: "Settings" }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
