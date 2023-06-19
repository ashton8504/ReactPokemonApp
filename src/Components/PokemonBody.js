import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonBody({ pokemonData }) {
  return (
    <div className="pokemon-body">
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          type={pokemon.type}
        />
      ))}
    </div>
  );
}

export default PokemonBody;
