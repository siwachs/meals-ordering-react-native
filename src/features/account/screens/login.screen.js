import { useContext, useState } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import Text from "../../../components/typography/text.component";
import { space } from "../../../infrastructure/theme/spacing";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  console.log(error);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer rowGap={space[3]}>
        <AuthInput
          label="E-mail"
          value={email}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(e) => setEmail(e)}
        />
        <AuthInput
          label="Password"
          value={password}
          autoCapitalize="none"
          textContentType="password"
          secureTextEntry
          onChangeText={(p) => setPassword(p)}
        />
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default LoginScreen;
