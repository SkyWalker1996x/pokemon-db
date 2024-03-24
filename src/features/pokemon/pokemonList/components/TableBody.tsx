// types
import { TPokemonListItem } from 'features/pokemon/pokemonList/types';
// components
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
// styles
import classes from 'features/pokemon/pokemonList/styles.module.css';

type Props = {
  data: TPokemonListItem[];
  toItemPage: (id: string) => void;
};

const TableBody = (props: Props) => {
  const { data, toItemPage } = props;

  return (
    <>
      {data.map((row) => {
        return (
          <Tooltip key={row.id} title={'Click for more information'} placement={'right-end'}>
            <TableRow className={classes.row} onClick={() => toItemPage(row.id)}>
              <TableCell component="th" scope="row" className={classes.imageCell} align="center">
                <img width={50} src={row.imageSrc} alt="pokemon image" />
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
            </TableRow>
          </Tooltip>
        );
      })}
    </>
  );
};

export default TableBody;
