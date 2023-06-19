import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import PokemonCard from "./Components/PokemonCard";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  const handlePokemonSearch = (query) => {
    setPokemonName(query);
  };

  return (
    <div className="App">
      <SearchBar onPokemonSearch={handlePokemonSearch} />
      {pokemonName && <PokemonCard name={pokemonName} />}
    </div>
  );
}

export default App;
