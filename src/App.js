import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import PokemonCard from "./Components/PokemonCard";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSearch = (query) => {
    setSelectedPokemon(query.toLowerCase());
  };

  const handleCardClose = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="App">
      <header>
        <h1 className="titleHeader">Pokemon Search</h1>
      </header>
      <div className="content-container">
        <div className="search-container">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="pokemon-container">
          {selectedPokemon && (
            <PokemonCard name={selectedPokemon} onClose={handleCardClose} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
