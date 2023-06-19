import React, { useState } from "react";

function SearchBar({ onPokemonSearch }) {
  const [query, setQuery] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onPokemonSearch(query);
    }
  };

  const handleSearchClick = () => {
    onPokemonSearch(query);
  };

  return (
    <div className="search-bar-container">
      <h1 className="titleHeader">Pokemon</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search Pokemon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
