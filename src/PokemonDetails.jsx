const PokemonDetails = ({ setSinglePokemonDetails, singlePokemonDetails }) => {
  return (
    <>
      <h2>{singlePokemonDetails.name}</h2>

      <img src={singlePokemonDetails.sprites.front_default} alt="Pokemon Image"/>

      <button onClick={() => {
        setSinglePokemonDetails({});
      }}>Back</button>
    </>
  )
}

export default PokemonDetails;
