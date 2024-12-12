interface Pokemon {
  name: string;
  imgSrc?: string;
  id: number;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}
export default function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
  return (
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
  );
}
