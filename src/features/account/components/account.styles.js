import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

const AccountContainer = styled.View`
  ${(props) => props.rowGap && `row-gap: ${props.rowGap};`}
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

const AuthInput = styled(TextInput)`
  width: 300px;
`;

const Title = styled.Text`
  font-size: 30px;
`;

const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin: ${(props) => props.theme.space[2]} 0;
`;

export {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
};
