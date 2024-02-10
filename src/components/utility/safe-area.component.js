import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${(props) =>
    !props.hasHeader && StatusBar.currentHeight
      ? `${StatusBar.currentHeight}px`
      : 0};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export default SafeArea;
