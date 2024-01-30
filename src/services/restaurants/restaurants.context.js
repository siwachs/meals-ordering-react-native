import { useState, createContext, useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retriveRestaurants = (location) => {
    setIsLoading(true);
    setRestaurants([]);
    restaurantsRequest(location)
      .then(restaurantsTransform)
      .then((results) => {
        setIsLoading(false);
        setRestaurants(results);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveRestaurants(locationString);
    }
  }, [location]);

  const contextValue = useMemo(() => {
    return { restaurants, isLoading, error };
  }, [restaurants, isLoading, error]);

  return (
    <RestaurantsContext.Provider value={contextValue}>
      {children}
    </RestaurantsContext.Provider>
  );
};

RestaurantsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
