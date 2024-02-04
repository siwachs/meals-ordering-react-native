import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";
import SafeArea from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import FavouritesBar from "../../../components/favourites/favourites-bar.component";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";
import Search from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const RestaurantsScreen = ({ navigation }) => {
  const [heartIconIsToggled, setHeartIconIsToggled] = useState(false);
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={heartIconIsToggled}
        setIsFavouritesToggled={setHeartIconIsToggled}
      />
      {heartIconIsToggled && (
        <FavouritesBar
          favourites={favourites}
          goToDetails={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetails", {
                restaurant: item,
              })
            }
          >
            <RestaurantInfoCardComponent restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

RestaurantsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default RestaurantsScreen;
