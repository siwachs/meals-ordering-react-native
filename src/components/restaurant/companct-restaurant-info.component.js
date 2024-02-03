import PropTypes from "prop-types";
import { Platform } from "react-native";
import Text from "../typography/text.component";
import WebView from "react-native-webview";
import styled from "styled-components/native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Item = styled.View`
  border-radius: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";
const CompactRestauranInfoComponent = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};

CompactRestauranInfoComponent.propTypes = {
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

export default CompactRestauranInfoComponent;
