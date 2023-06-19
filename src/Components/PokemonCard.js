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
        const { height, weight, abilities, sprites } = response.data;
        setPokemonDetails({ height, weight, abilities, image: sprites.front_default });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  const handleClose = () => {
    setPokemonDetails(null);
  };

  if (!pokemonDetails) {
    return null;
  }

  return (
    <div className="pokemon-card">
      <button className="close-button" onClick={handleClose}>
        Close
      </button>
      <h3>{name}</h3>
      <img src={pokemonDetails.image} alt={name} className="pokemon-image" />
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      <p>Abilities: {pokemonDetails.abilities.join(", ")}</p>
    </div>
  );
}

export default PokemonCard;
