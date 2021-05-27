import {
  makeStyles,
  Table,
  TableCell,
  TableHead as MuiTableHead,
  TablePagination as MuiTablePagination,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(2),
    "& thead th": {
      fontWeight: "600",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": { cursor: "pointer", backgroundColor: theme.palette.theme.light },
  },
}));

const useTable = (records, headers) => {
  const classes = useStyles();

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const handleSortRequest = () => {};

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10));
    setPage(0);
  };

  const recordsAfterPagingAndSorting = () => {
    return records.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  const TableContainer = (props) => {
    return <Table className={classes.table}>{props.children}</Table>;
  };

  const TableHead = (props) => {
    return (
      <MuiTableHead>
        <TableRow>
          {headers.map((header) => {
            return <TableCell key={header.id}>{header.label}</TableCell>;
          })}
        </TableRow>
      </MuiTableHead>
    );
  };

  const TablePagination = () => {
    return (
      <MuiTablePagination
        component="div"
        count={records.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      ></MuiTablePagination>
    );
  };

  return { TableContainer, TableHead, TablePagination, recordsAfterPagingAndSorting };
};

export default useTable;
