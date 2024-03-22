// hooks
import usePokemonList from './usePokemonList.ts';
// components
import Table from 'components/table';
import TableBody from './components/TableBody.tsx';
import TableHead from './components/TableHead.tsx';
// styles
import classes from './styles.module.css';

const PokemonListPage = () => {
  const { data } = usePokemonList();

  return (
    <Table
      head={<TableHead />}
      rows={<TableBody data={data} />}
      tableClassName={classes.table}
      tableContainerClassName={classes.tableContainer}
    />
  );
};

export default PokemonListPage;
