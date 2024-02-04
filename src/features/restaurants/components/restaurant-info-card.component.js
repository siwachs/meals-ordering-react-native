import React from "react";
import PropTypes from "prop-types";
import { SvgXml } from "react-native-svg";
import {
  RestaurantCard,
  CardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Icon,
  Address,
} from "./restaurant-info-card.styles";
import Favourite from "../../../components/favourites/favourite.component";
import Text from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantInfoCardComponent = React.memo(({ restaurant }) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenedNow,
    rating,
    isClosedTemporarily,
    place_id,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${place_id}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpenedNow && <SvgXml xml={open} width={20} height={20} />}
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
});

RestaurantInfoCardComponent.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
    isOpenedNow: PropTypes.bool,
    rating: PropTypes.number,
    isClosedTemporarily: PropTypes.bool,
    place_id: PropTypes.string,
  }).isRequired,
};

export default RestaurantInfoCardComponent;
