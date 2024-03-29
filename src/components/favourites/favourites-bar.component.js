import PropTypes from "prop-types";
import CompactRestauranInfoComponent from "../restaurant/compact-restaurant-info.component";
import Spacer from "../spacer/spacer.component";
import Text from "../typography/text.component";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
const FavouritesView = styled.View`
  margin: 10px 10px 0 0;
`;

const FavouritesBar = ({ favourites, goToDetails }) => {
  if (!favourites.length) return null;

  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((item) => (
          <TouchableOpacity
            key={item.name}
            onPress={() =>
              goToDetails("RestaurantDetails", {
                restaurant: item,
              })
            }
          >
            <FavouritesView>
              <CompactRestauranInfoComponent restaurant={item} />
            </FavouritesView>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};

FavouritesBar.propTypes = {
  favourites: PropTypes.array.isRequired,
  goToDetails: PropTypes.func.isRequired,
};

export default FavouritesBar;
