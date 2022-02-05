// import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";

function SearchBar({ placeholder, setWord }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} />

        <div className="searchButton">
          {/* <SearchIcon /> */}
          <button onClick={() => setWord("skyscraper")}>Search</button>
        </div>
      </div>
    </div>
  );
}


export default SearchBar;
