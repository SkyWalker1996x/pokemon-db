// components
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
// styles
import classes from '../styles.module.css';

const TableHead = () => {
  return (
    <TableRow>
      <TableCell className={classes.imageCell} align="center">Pokemon view</TableCell>
      <TableCell align="center">Pokemon name</TableCell>
    </TableRow>
  );
};

export default TableHead;
