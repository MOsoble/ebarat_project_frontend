import React, { useState } from "react";

function SearchBar({ handleSearchClick }) {
  const [searchValue, setSearchValue] = useState("");

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
