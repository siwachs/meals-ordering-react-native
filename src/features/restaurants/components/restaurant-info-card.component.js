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
import Text from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantInfoCardComponent = ({ restaurant }) => {
  const {
    name,
    icon,
    photos,
    vicinity,
    isOpenedNow,
    rating,
    isClosedTemporarily,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml key={`star_${index}`} xml={star} width={20} height={20} />
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
        <Address>{vicinity}</Address>
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
