import { useState, useEffect } from 'react'

const PokemonList = ({ setSinglePokemonDetails }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getAllPokemon = async() => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const responseJson = await response.json();
      const allPokemon = responseJson.results;
      setPokemonList(allPokemon);
    }
    getAllPokemon();
  }, []);

  const getPokemonDetails = async(nameOfPokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOfPokemon}`);
    const individualPokemon = await response.json();
    setSinglePokemonDetails(individualPokemon);
  }

  return (
    <ul>
    {
      pokemonList.map((singlePokemon) => {
        // console.log(singlePokemon);
        return <li key={singlePokemon.url} onClick={(event) => {
          const pokemonName = event.target.innerText;
          getPokemonDetails(pokemonName)
        }}>{singlePokemon.name}</li>
      })
    }
    </ul> 
  )
}

export default PokemonList;

