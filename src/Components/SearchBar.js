import React, { useState } from "react";

function SearchBar({ initialValue, onSearch }) {
  const [query, setQuery] = useState(initialValue);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
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
      <button className="search-button" onClick={() => onSearch(query)}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
