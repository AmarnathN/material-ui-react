import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { Add as AddIcon, Delete, Edit, PeopleAltOutlined as PeopleAltOutlinedIcon, Search } from "@material-ui/icons";
import PageHeader from "../../components/PageHeader";
import { Grid, InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from "@material-ui/core";
import useTable from "../../components/controlsHandlers/useTable";
import { addEmployee, getAllEmployees, updateEmployee } from "../../services/employeeService";
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
  { id: "department", label: "Department" },
  { id: "actions", label: "Actions", disableSorting: true },
];

const Employees = () => {
  const classes = useStyles();
  const [records, setRecords] = useState(getAllEmployees());
  const [recordForEdit, setRecordForEdit] = useState({});
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

  const addOrEditEmployees = (employeeValues, resetForm, isUpdate = false) => {
    if (isUpdate) {
      updateEmployee(employeeValues);
      setRecordForEdit({});
    } else {
      addEmployee(employeeValues);
    }
    resetForm();
  };

  const handleOpenPopup = (e) => {
    setOpenPopup(true);
  };

  const handleClosePopup = (e) => {
    setOpenPopup(false);
  };

  const openInpopup = (record) => {
    setRecordForEdit(record);
    setOpenPopup(true);
  };

  const getRecordForEdit = () => {
    return recordForEdit;
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
          <EmployeeForm
            recordForEdit={getRecordForEdit()}
            addOrEditEmployees={addOrEditEmployees}
            handleClosePopup={handleClosePopup}
            setRecords={() => setRecords(getAllEmployees())}
          />
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
                  <TableCell>
                    {
                      <div>
                        <MyControls.ActionIconButton color="secondary" onClick={() => openInpopup(record)}>
                          <Edit />
                        </MyControls.ActionIconButton>
                        <MyControls.ActionIconButton color="theme">
                          <Delete />
                        </MyControls.ActionIconButton>
                      </div>
                    }
                  </TableCell>
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
