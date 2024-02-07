import { useContext } from "react";
import { View, Button } from "react-native";
import SafeArea from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

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
