import React, { useState, useEffect } from "react";
import axios from "axios";

function PokemonCard({ name }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (!name) {
      setPokemonDetails(null);
      return;
    }

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        const { height, weight, abilities } = response.data;
        setPokemonDetails({ height, weight, abilities });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <div className="pokemon-card">
      {pokemonDetails && (
        <>
          <h3>{name}</h3>
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
          <p>Abilities: {pokemonDetails.abilities.join(", ")}</p>
        </>
      )}
    </div>
  );
}

export default PokemonCard;
