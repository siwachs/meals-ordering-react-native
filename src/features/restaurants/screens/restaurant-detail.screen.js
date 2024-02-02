import { useState } from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import SafeArea from "../../../components/utility/safe-area.component";
import RestaurantInfoCardComponent from "../components/restaurant-info-card.component";

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpand, setBreakfastExpand] = useState(false);
  const [lunchExpand, setLunchExpand] = useState(false);
  const [dinnerExpand, setDinnerExpand] = useState(false);
  const [drinksExpand, setDrinksExpand] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCardComponent restaurant={restaurant} />

      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpand}
          onPress={() => setBreakfastExpand(!breakfastExpand)}
        >
          <List.Item title="Egg" />
          <List.Item title="Toast" />
          <List.Item title="Coffee" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={lunchExpand}
          onPress={() => setLunchExpand(!lunchExpand)}
        >
          <List.Item title="Sandwich" />
          <List.Item title="Salad" />
          <List.Item title="Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon {...props} icon="silverware-fork-knife" />
          )}
          expanded={dinnerExpand}
          onPress={() => setDinnerExpand(!dinnerExpand)}
        >
          <List.Item title="Steak" />
          <List.Item title="Pasta" />
          <List.Item title="Vegetables" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpand}
          onPress={() => setDrinksExpand(!drinksExpand)}
        >
          <List.Item title="Water" />
          <List.Item title="Soda" />
          <List.Item title="Wine" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

RestaurantDetailScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      restaurant: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RestaurantDetailScreen;
