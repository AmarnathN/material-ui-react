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
      color: theme.palette.theme.dark,
      backgroundColor: theme.palette.background.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": { cursor: "pointer", backgroundColor: theme.palette.theme.light },
  },
}));

const useTable = (records, headers, filterFunction) => {
  const classes = useStyles();

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const handleSortRequest = (cellId) => {
    const isAsc = orderBy === cellId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(cellId);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10));
    setPage(0);
  };

  const stableArraySort = (recordsArray, comparator) => {
    const stablizedArray = recordsArray.map((ele, index) => [ele, index]);
    stablizedArray.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order != 0) return order;
      return (a[1] = b[1]);
    });
    return stablizedArray.map((ele) => ele[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };
  const recordsAfterPagingAndSorting = () => {
    return stableArraySort(filterFunction.fn(records), getComparator(order, orderBy)).slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  const TableContainer = (props) => {
    return <Table className={classes.table}>{props.children}</Table>;
  };

  const TableHead = (props) => {
    return (
      <MuiTableHead>
        <TableRow>
          {headers.map((header) => {
            return (
              <TableCell key={header.id} sortDirection={orderBy === header.id ? order : false}>
                {header.disableSorting ? (
                  header.label
                ) : (
                  <TableSortLabel
                    active={orderBy === header.id}
                    direction={orderBy === header.id ? order : "asc"}
                    onClick={() => handleSortRequest(header.id)}
                  >
                    {header.label}
                  </TableSortLabel>
                )}
              </TableCell>
            );
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
