import { useState } from 'react';
import PokemonList from './PokemonList.jsx';
import PokemonDetails from './PokemonDetails.jsx';

const App = () => {
  const [singlePokemonDetails, setSinglePokemonDetails] = useState({})

  return (
    <>
      <h1>Pokemon Details App</h1>

      {
        singlePokemonDetails.id ? 
          <PokemonDetails 
            setSinglePokemonDetails={setSinglePokemonDetails} 
            singlePokemonDetails={singlePokemonDetails} 
          /> :
          <PokemonList setSinglePokemonDetails={setSinglePokemonDetails} />
      }
    </>
  )
}

export default App
