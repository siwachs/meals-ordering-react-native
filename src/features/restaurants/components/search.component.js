import { useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Search = () => {
  const { search, keyword, setKeyword } = useContext(LocationContext);

  useEffect(() => {
    search();
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={keyword}
        onSubmitEditing={search}
        onChangeText={setKeyword}
      />
    </SearchContainer>
  );
};

export default Search;
