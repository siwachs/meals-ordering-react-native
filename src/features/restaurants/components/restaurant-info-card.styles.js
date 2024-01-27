import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const CardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: ${(props) => props.theme.space[3]};
`;
const Icon = styled.Image`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export {
  RestaurantCard,
  CardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Icon,
  Address,
};
