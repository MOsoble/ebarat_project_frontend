import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ placeholder, setWord }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} />

        <div className="searchIcon">
          <SearchIcon />
          <button onClick={() => setWord("skyscraper")}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
