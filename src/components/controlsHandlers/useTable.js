import { makeStyles, Table, TableCell, TableHead as MuiTableHead, TableRow } from "@material-ui/core";
import React from "react";

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
  return { TableContainer, TableHead };
};

export default useTable;
