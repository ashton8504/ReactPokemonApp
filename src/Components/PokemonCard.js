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
        const abilityNames = abilities.map((ability) => ability.ability.name);
        setPokemonDetails({ height, weight, abilities: abilityNames, image: sprites.front_default });
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

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="pokemon-card">
      <h3 className="pokemon-card-title">{capitalizedName}</h3>
      <img src={pokemonDetails.image} alt={capitalizedName} className="pokemon-image" />
      <div className="pokemon-card-content">
        <p>Height: {pokemonDetails.height}</p>
        <p>Weight: {pokemonDetails.weight}</p>
        <p>Abilities: {pokemonDetails.abilities.join(", ")}</p>
      </div>
      <button className="close-button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
}

export default PokemonCard;
