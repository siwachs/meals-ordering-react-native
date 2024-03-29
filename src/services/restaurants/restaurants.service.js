import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject(new Error("No Restaurants Found."));
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const DEFAULT_RATING = 0;
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.floor(Math.random() * mockImages.length)];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      rating: restaurant.rating || DEFAULT_RATING,
      isOpenedNow: restaurant.opening_hours?.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
