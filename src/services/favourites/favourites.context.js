import { createContext, useMemo, useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);
  const saveFavourites = async (items) => {
    try {
      const jsonItems = JSON.stringify(items);
      await AsyncStorage.setItem(`@favourites-${user?.uid}`, jsonItems);
    } catch (error) {
      alert(error.message);
    }
  };

  const loadFavourites = async () => {
    try {
      const items = await AsyncStorage.getItem("@favourites");
      if (items !== null) {
        setFavourites(JSON.parse(items));
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const restaurants = favourites.filter(
      (item) => item.placeId !== restaurant.placeId
    );
    setFavourites(restaurants);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

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
