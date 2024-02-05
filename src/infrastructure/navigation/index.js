import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app.navigator";
import AccountNatigator from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Navigation = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNatigator />}
    </NavigationContainer>
  );
};

export default Navigation;
