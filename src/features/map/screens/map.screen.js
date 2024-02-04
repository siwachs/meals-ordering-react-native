import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Search from "../components/search.component";
import MapView, { Marker, Callout } from "react-native-maps";
import MapCallOutComponent from "../components/mapcallout.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const MapContainer = styled.View`
  flex: 1;
`;
const MapComponent = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  // Map States
  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;
  useEffect(() => {
    const northEastLat = viewport.northeast.lat;
    const southWestLat = viewport.southwest.lat;

    setLatDelta(northEastLat - southWestLat);
  }, [location, viewport]);

  return (
    <MapContainer>
      <Search />
      <MapComponent
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <Callout
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant,
                })
              }
            >
              <MapCallOutComponent restaurant={restaurant} />
            </Callout>
          </Marker>
        ))}
      </MapComponent>
    </MapContainer>
  );
};

MapScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default MapScreen;
