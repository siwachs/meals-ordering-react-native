import styled from "styled-components/native";
import { Card } from "react-native-paper";
import PropTypes from "prop-types";

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const CardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;
const Title = styled.Text`
  padding: 16px;
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
      <Title>{name}</Title>
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
