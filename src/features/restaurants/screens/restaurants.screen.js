import { View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const ListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCardComponent
          restaurant={{
            name: "Sample Restaurant",
            icon: "https://placekitten.com/300/300",
            photos: [
              "https://placekitten.com/300/300",
              "https://placekitten.com/300/300",
            ],
            address: "123 Main St",
            isOpenedNow: true,
            rating: 4.5,
            isClosedTemporarily: false,
          }}
        />
      </ListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
