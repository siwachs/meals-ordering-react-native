import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const restaurants = favourites.filter(
      (item) => item.placeId !== restaurant.placeId
    );
    setFavourites(restaurants);
  };

  const contextValue = useMemo(() => {
    return {
      favourites,
      addToFavourites: add,
      removeFromFavourites: remove,
    };
  }, [favourites]);

  return (
    <FavouritesContext.Provider value={contextValue}>
      {children}
    </FavouritesContext.Provider>
  );
};

FavouritesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
