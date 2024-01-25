import styled from "styled-components/native";
import { Card } from "react-native-paper";
import PropTypes from "prop-types";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const CardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Info = styled.Text`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantInfoCardComponent = ({ restaurant }) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenedNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
      </Info>
    </RestaurantCard>
  );
};

RestaurantInfoCardComponent.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
    isOpenedNow: PropTypes.bool,
    rating: PropTypes.number,
    isClosedTemporarily: PropTypes.bool,
  }).isRequired,
};

export default RestaurantInfoCardComponent;
