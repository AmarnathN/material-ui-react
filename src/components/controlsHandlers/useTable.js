import { Table, TableCell, TableHead as MuiTableHead, TableRow } from "@material-ui/core";
import React from "react";

const useTable = (records, headers) => {
  const TableContainer = (props) => {
    return <Table>{props.children}</Table>;
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
