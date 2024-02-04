import { useContext } from "react";
import AppNavigator from "./app.navigator";
import AccountNatigator from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Navigation = () => {
  const { user } = useContext(AuthenticationContext);

  return user ? <AppNavigator /> : <AccountNatigator />;
};

export default Navigation;
