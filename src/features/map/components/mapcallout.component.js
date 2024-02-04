import PropTypes from "prop-types";
import CompactRestauranInfoComponent from "../../../components/restaurant/compact-restaurant-info.component";

const MapCallOutComponent = ({ restaurant }) => {
  return <CompactRestauranInfoComponent restaurant={restaurant} isMap />;
};

MapCallOutComponent.propTypes = {
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

export default MapCallOutComponent;
