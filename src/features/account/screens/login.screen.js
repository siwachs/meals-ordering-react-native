import { useContext, useState } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

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
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        {isLoading ? (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        ) : (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        )}
      </AccountContainer>
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};

export default LoginScreen;
