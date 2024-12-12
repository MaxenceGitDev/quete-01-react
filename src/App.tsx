import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

export default function App() {
  const pokemonList = [
    {
      id: 1,
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: 2,
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id: 3,
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      id: 4,
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button
            type="button"
            key={pokemon.id}
            onClick={() => setPokemonIndex(index)}
          >
            {pokemon.name}
          </button>
        ))}
        ;
      </nav>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}
