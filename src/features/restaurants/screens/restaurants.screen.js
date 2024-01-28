import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import SafeArea from "../../../components/utility/safe-area.component";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const restaurantData = [
  {
    name: "Sample Restaurant",
    icon: "https://placekitten.com/200/200",
    photos: [
      "https://placekitten.com/300/300",
      "https://placekitten.com/400/400",
    ],
    address: "123 Main St",
    isOpenedNow: true,
    rating: 4.5,
    isClosedTemporarily: false,
  },
  {
    name: "Delicious Bites",
    icon: "https://placekitten.com/201/201",
    photos: [
      "https://placekitten.com/301/301",
      "https://placekitten.com/401/401",
    ],
    address: "456 Oak St",
    isOpenedNow: false,
    rating: 4.2,
    isClosedTemporarily: true,
  },
  {
    name: "Tasty Treats",
    icon: "https://placekitten.com/202/202",
    photos: [
      "https://placekitten.com/302/302",
      "https://placekitten.com/402/402",
    ],
    address: "789 Pine St",
    isOpenedNow: true,
    rating: 4.7,
    isClosedTemporarily: false,
  },
  {
    name: "Savor Delights",
    icon: "https://placekitten.com/203/203",
    photos: [
      "https://placekitten.com/303/303",
      "https://placekitten.com/403/403",
    ],
    address: "567 Maple St",
    isOpenedNow: true,
    rating: 4.3,
    isClosedTemporarily: false,
  },
  {
    name: "Spice Fusion",
    icon: "https://placekitten.com/204/204",
    photos: [
      "https://placekitten.com/304/304",
      "https://placekitten.com/404/404",
    ],
    address: "890 Elm St",
    isOpenedNow: true,
    rating: 4.6,
    isClosedTemporarily: false,
  },
  {
    name: "Fresh Flavors",
    icon: "https://placekitten.com/205/205",
    photos: [
      "https://placekitten.com/305/305",
      "https://placekitten.com/405/405",
    ],
    address: "123 Oak St",
    isOpenedNow: false,
    rating: 4.0,
    isClosedTemporarily: true,
  },
];

const RestaurantsScreen = ({ theme }) => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurantData}
        renderItem={({ item }) => (
          <RestaurantInfoCardComponent restaurant={item} />
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
