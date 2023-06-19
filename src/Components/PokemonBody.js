import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonBody({ pokemonData }) {
    return (
      <div className="pokemon-body">
        {pokemonData.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
    );
  }
  

export default PokemonBody;
