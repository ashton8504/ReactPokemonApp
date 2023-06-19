import React from "react";

function PokemonCard({ name, image, type }) {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-image" />
      <h3 className="pokemon-name">{name}</h3>
      <p className="pokemon-type">{type}</p>
    </div>
  );
}

export default PokemonCard;
