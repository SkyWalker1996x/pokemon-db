import { ReactElement } from 'react';
// components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

type Props = {
  head: ReactElement;
  rows: ReactElement;
  tableContainerClassName?: string;
  tableClassName?: string;
  tableHeadClassName?: string;
  tableBodyClassName?: string;
};

const TableComponent = (props: Props) => {
  const {
    rows,
    head,
    tableHeadClassName,
    tableBodyClassName,
    tableClassName,
    tableContainerClassName,
  } = props;

  return (
    <TableContainer className={tableContainerClassName} component={Paper}>
      <Table className={tableClassName}>
        <TableHead className={tableHeadClassName}>{head}</TableHead>
        <TableBody className={tableBodyClassName}>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
