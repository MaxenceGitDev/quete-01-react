interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}
export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <figure>
      {pokemon ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
