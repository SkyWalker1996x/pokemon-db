import { Routes, Route } from 'react-router-dom';
// pokemon
import PokemonListPage from 'features/pokemon/pokemonList/PokemonListPage.tsx';
import PokemonItemPage from 'features/pokemon/pokemonItem/PokemonItemPage.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={PokemonListPage}/>
      <Route path="/:id" Component={PokemonItemPage}/>
    </Routes>
  );
};

export default AppRoutes;
