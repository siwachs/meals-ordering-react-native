import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Search from "../components/search.component";
import MapView, { Marker } from "react-native-maps";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const MapScreen = () => {
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
      <Map
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
            coordinate={{
              latitude: 37.7749,
              longitude: -122.4194,
            }}
          ></Marker>
        ))}
      </Map>
    </MapContainer>
  );
};

const MapContainer = styled.View`
  flex: 1;
`;
const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export default MapScreen;
