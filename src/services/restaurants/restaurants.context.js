import { useState, createContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retriveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 1600);
  };

  useEffect(() => {
    retriveRestaurants();
  }, []);

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
