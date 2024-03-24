// hooks
import usePokemonList from './usePokemonList.ts';
// components
import Header from 'components/header';
import Table from 'components/table';
import TableBody from './components/TableBody.tsx';
import TableHead from './components/TableHead.tsx';
// styles
import classes from './styles.module.css';

const PokemonListPage = () => {
  const { data, toItemPage } = usePokemonList();

  return (
    <>
      <Header />
      <Table
        head={<TableHead />}
        rows={<TableBody data={data} toItemPage={toItemPage} />}
        tableClassName={classes.table}
        tableContainerClassName={classes.tableContainer}
      />
    </>
  );
};

export default PokemonListPage;
