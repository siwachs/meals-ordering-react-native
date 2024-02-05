import { Button } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
} from "../components/account.styles";

const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Button icon="lock-open-outline" mode="contained" onPress={() => {}}>
          Login
        </Button>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
