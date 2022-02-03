import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ placeholder, setWord }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} />
        <input type="text" placeholder="mariama" />
        <div className="searchIcon">
          <SearchIcon />
          <button onClick={() => setWord("skyscraper")}>Click me</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
