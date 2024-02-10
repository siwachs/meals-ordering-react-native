import { useContext } from "react";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";
import SafeArea from "../../../components/utility/safe-area.component";
import Text from "../../../components/typography/text.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import RestaurantInfoCardComponent from "../../restaurants/components/restaurant-info-card.component";
import { TouchableOpacity } from "react-native";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea hasHeader>
      <RestaurantList
        data={favourites}
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
  ) : (
    <NoFavouritesArea hasHeader>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};

export default FavouritesScreen;
