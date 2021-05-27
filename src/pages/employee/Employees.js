import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { PeopleAltOutlined as PeopleAltOutlinedIcon, Search } from "@material-ui/icons";
import PageHeader from "../../components/PageHeader";
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from "@material-ui/core";
import useTable from "../../components/controlsHandlers/useTable";
import { getAllEmployees } from "../../services/employeeService";
import { MyControls } from "../../components/controls/MyControls";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(2),
  },
  searcInput: {
    width: "75%",
  },
}));

const HeadCells = [
  { id: "id", label: "EmployeeId" },
  { id: "fullName", label: "Full Name" },
  { id: "email", label: "Email" },
  { id: "mobile", label: "Mobile" },
  { id: "department", label: "Department", disableSorting: true },
];

const Employees = () => {
  const classes = useStyles();
  const [records, setRecords] = useState(getAllEmployees());
  const [filterFunction, setFilterFunction] = useState({ fn: (items) => items });

  const { TableContainer, TableHead, TablePagination, recordsAfterPagingAndSorting } = useTable(records, HeadCells, filterFunction);

  const handleSearch = (event) => {
    let target = event.target;
    setFilterFunction({
      fn: (items) => {
        if (target.value == "") {
          return items;
        } else {
          debugger;
          return items.filter((x) => x.fullName.toString().toLowerCase().includes(target.value.toLowerCase()));
        }
      },
    });
  };

  return (
    <div>
      <PageHeader title="New Employee" description="With Form Validation" icon={<PeopleAltOutlinedIcon />} />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
      <Paper className={classes.pageContent}>
        <Toolbar>
          <MyControls.Input
            className={classes.searcInput}
            label="search employee by name"
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
        <TableContainer>
          <TableHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((record, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{record.id}</TableCell>
                  <TableCell>{record.fullName}</TableCell>
                  <TableCell>{record.email}</TableCell>
                  <TableCell>{record.mobile}</TableCell>
                  <TableCell>{record.department}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableContainer>
        <TablePagination />
      </Paper>
    </div>
  );
};

export default Employees;
