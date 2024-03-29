import { createContext, useMemo, useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);
  const saveFavourites = async (items, uid) => {
    try {
      const jsonItems = JSON.stringify(items);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonItems);
    } catch (error) {
      alert(error.message);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const items = await AsyncStorage.getItem(`@favourites-${uid}`);
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
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

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
