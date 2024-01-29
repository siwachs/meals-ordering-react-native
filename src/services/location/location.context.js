import { useState, useEffect, createContext, useMemo } from "react";
import PropTypes from "prop-types";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = () => {
    setIsLoading(true);
    locationRequest(keyword)
      .then(locationTransform)
      .then()
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {}, []);

  const contextValue = useMemo(() => {
    return { location, isLoading, error, search: onSearch, keyword };
  }, [location, isLoading, error]);

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
};

LocationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
