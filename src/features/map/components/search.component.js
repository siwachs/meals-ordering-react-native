import { useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

const Search = () => {
  const { search, keyword, setKeyword } = useContext(LocationContext);

  useEffect(() => {
    search();
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        icon="map"
        placeholder="Search for a location"
        value={keyword}
        onSubmitEditing={search}
        onChangeText={setKeyword}
      />
    </SearchContainer>
  );
};

export default Search;
