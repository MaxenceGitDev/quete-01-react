interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}
export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <figure className="card">
      {pokemon ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} className="card-img" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
