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

const restaurantData = [
  {
    name: "Sample Restaurant",
    icon: "https://image.shutterstock.com/image-photo/mountain-landscape-nepal-tourism-trekking-260nw-569010778.jpg",
    photos: [
      "https://image.shutterstock.com/image-photo/restaurant-cafe-terrace-greek-tavern-260nw-594260513.jpg",
      "https://image.shutterstock.com/image-photo/delicious-tiramisu-cake-260nw-1652180908.jpg",
    ],
    address: "123 Main St",
    isOpenedNow: true,
    rating: 4.5,
    isClosedTemporarily: true,
  },
  {
    name: "Delicious Bites",
    icon: "https://image.shutterstock.com/image-photo/food-vegetarian-plate-fresh-delicious-260nw-1028266390.jpg",
    photos: [
      "https://image.shutterstock.com/image-photo/assortment-food-colorful-mediterranean-plate-260nw-1350540652.jpg",
      "https://image.shutterstock.com/image-photo/delicious-fried-chicken-on-plate-260nw-1114050326.jpg",
    ],
    address: "456 Oak St",
    isOpenedNow: false,
    rating: 4.2,
    isClosedTemporarily: false,
  },
  {
    name: "Tasty Treats",
    icon: "https://image.shutterstock.com/image-photo/chef-cooking-260nw-671687455.jpg",
    photos: [
      "https://image.shutterstock.com/image-photo/appetizers-spread-table-various-tapas-260nw-1015089965.jpg",
      "https://image.shutterstock.com/image-photo/gourmet-homemade-salmon-tartare-260nw-773948217.jpg",
    ],
    address: "789 Pine St",
    isOpenedNow: true,
    rating: 4.7,
    isClosedTemporarily: false,
  },
  {
    name: "Savor Delights",
    icon: "https://image.shutterstock.com/image-photo/italian-chef-cooking-kitchen-260nw-1021733143.jpg",
    photos: [
      "https://image.shutterstock.com/image-photo/plate-salad-fresh-garden-vegetables-260nw-1853209294.jpg",
      "https://image.shutterstock.com/image-photo/delicious-chocolate-cake-berries-dessert-260nw-1055877551.jpg",
    ],
    address: "567 Maple St",
    isOpenedNow: true,
    rating: 4.3,
    isClosedTemporarily: false,
  },
  {
    name: "Spice Fusion",
    icon: "https://image.shutterstock.com/image-photo/indian-food-curry-chicken-biryani-260nw-1791503121.jpg",
    photos: [
      "https://image.shutterstock.com/image-photo/spicy-indian-chicken-curry-260nw-1741191086.jpg",
      "https://image.shutterstock.com/image-photo/assorted-indian-food-chicken-lamb-260nw-1050749473.jpg",
    ],
    address: "890 Elm St",
    isOpenedNow: true,
    rating: 4.6,
    isClosedTemporarily: false,
  },
  {
    name: "Fresh Flavors",
    icon: "https://image.shutterstock.com/image-photo/fresh-vegetables-fruits-healthy-diet-260nw-1579779356.jpg",
    photos: [
      "https://image.shutterstock.com/image-photo/vegetarian-buddha-bowl-avocado-quinoa-260nw-1679828140.jpg",
      "https://image.shutterstock.com/image-photo/tasty-vegetarian-burger-ingredients-260nw-1579780265.jpg",
    ],
    address: "123 Oak St",
    isOpenedNow: false,
    rating: 4.0,
    isClosedTemporarily: true,
  },
];

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
            isClosedTemporarily: true,
          }}
        />
      </ListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
