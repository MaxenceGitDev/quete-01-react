import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

export default function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  // const handleClickS = () => {
  //   setPokemonIndex((index) =>
  //     index < pokemonList.length - 1 ? index + 1 : index
  //   )};

  // const handleClickP = () => {
  //   setPokemonIndex((index) => (index > 0 ? index - 1 : index));
  // };

  const handleClickS = () => {
    setPokemonIndex((index) => index + 1);
  };

  const handleClickP = () => {
    setPokemonIndex((index) => index - 1);
  };

  return (
    <div>
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
      {pokemonIndex > 0 && (
        <button type="button" onClick={handleClickP}>
          Précédent
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={handleClickS}>
          Suivant
        </button>
      )}
    </div>
  );
}
