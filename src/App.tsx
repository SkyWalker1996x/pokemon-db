import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import pokeApiClient from 'api/pokeApi/pokeApiClient.ts';
import AppRoutes from 'router';

const App = () => {
  const { getPokemonList, getPokemonItem } = pokeApiClient;
  const limit = 10;
  const offset = 0;

  useEffect(() => {
    getPokemonList(limit, offset).then((data) => console.log('list', data));
    getPokemonItem('1').then((data) => console.log('item', data));
  }, []);

  return (
    <BrowserRouter>
      Init pokemon-db task
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
