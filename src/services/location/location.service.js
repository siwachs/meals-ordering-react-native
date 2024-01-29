import locations from "./location.mock";
import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject(new Error("Location Not Found."));
    }

    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lng, lat } = geometry.location;
  return { lng, lat };
};
