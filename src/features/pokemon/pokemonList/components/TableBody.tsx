import TableRow from '@mui/material/TableRow';
// types
import { TPokemonListItem } from '../types.ts';
// components
import TableCell from '@mui/material/TableCell';
// styles
import classes from '../styles.module.css';

type Props = {
  data: TPokemonListItem[];
};

const TableBody = (props: Props) => {
  const { data } = props;

  return (
    <>
      {data.map((row) => {
        return (
          <TableRow className={classes.row} key={row.id}>
            <TableCell component="th" scope="row">
              <img width={50} src={row.imageSrc} alt="pokemon image" />
            </TableCell>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

export default TableBody;
