import { useEffect } from 'react';
import pokeApiClient from 'api/pokeApi/pokeApiClient.ts';

const App = () => {
  const { getPokemonList } = pokeApiClient;
  const limit = 10;
  const offset = 0;

  useEffect(() => {
    getPokemonList(limit, offset).then((data) => console.log('data', data));
  }, []);

  return <>Init pokemon-db task</>;
};

export default App;
