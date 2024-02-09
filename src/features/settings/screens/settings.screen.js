import { useContext } from "react";
import { View, Button } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import SafeArea from "../../../components/utility/safe-area.component";

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <View>
        <Button onPress={onLogout} title="Log out" />
      </View>
    </SafeArea>
  );
};

export default SettingsScreen;
