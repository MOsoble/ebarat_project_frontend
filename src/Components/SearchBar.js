// import SearchIcon from "@mui/icons-material/Search";

import React, { useState, useEffect } from "react";

function SearchBar({ searchTerm, handleSearchClick }) {
  // const [inputChange, setInputChange] = useState(searchTerm);
  // const handleInputChange = (event) => {
  //   setInputChange(event.target.value);
  //   console.log(inputChange);
  // };[]

  const [searchValue, setSearchValue] = useState("");
  // this is state that is only local to this component

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search Term Here..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <div className="translateButton">
          {/* <SearchIcon /> */}
          <button onClick={() => handleSearchClick(searchValue)}>
            {" "}
            Search{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
