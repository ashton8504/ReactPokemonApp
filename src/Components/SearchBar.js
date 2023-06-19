import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(query);
      setQuery(""); // Clear the input after search
    }
  };

  const handleButtonClick = () => {
    onSearch(query);
    setQuery(""); // Clear the input after search
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter a Pokémon name"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
