import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { Add as AddIcon, PeopleAltOutlined as PeopleAltOutlinedIcon, Search } from "@material-ui/icons";
import PageHeader from "../../components/PageHeader";
import { Grid, InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from "@material-ui/core";
import useTable from "../../components/controlsHandlers/useTable";
import { getAllEmployees } from "../../services/employeeService";
import { MyControls } from "../../components/controls/MyControls";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(2),
  },
  searchInput: {
    width: "100%",
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
  const [openPopup, setOpenPopup] = useState(false);

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

  const handleOpenPopup = (e) => {
    setOpenPopup(true);
  };

  const handleClosePopup = (e) => {
    setOpenPopup(false);
  };

  return (
    <div>
      <PageHeader title="New Employee" description="With Form Validation" icon={<PeopleAltOutlinedIcon />} />
      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item xs={12} md={10}>
            <MyControls.Input
              className={classes.searchInput}
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
          </Grid>
          <Grid item xs={12} md={2}>
            <MyControls.Button text={"Add New"} size="medium" variant="outlined" startIcon={<AddIcon />} onClick={handleOpenPopup} />
          </Grid>
        </Grid>

        <MyControls.PopupDialog
          title="Add New Employee"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          handleClosePopup={handleClosePopup}
        >
          <EmployeeForm />
        </MyControls.PopupDialog>

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
