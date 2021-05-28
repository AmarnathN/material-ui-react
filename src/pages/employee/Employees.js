import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { Add as AddIcon, Delete, Edit, PeopleAltOutlined as PeopleAltOutlinedIcon, Search } from "@material-ui/icons";
import PageHeader from "../../components/PageHeader";
import { Grid, InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from "@material-ui/core";
import useTable from "../../components/controlsHandlers/useTable";
import { addEmployee, deleteEmployee, getAllEmployees, setMockEmployeeData, updateEmployee } from "../../services/employeeService";
import { MyControls } from "../../components/controls/MyControls";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(2),
    borderRadius: "15px",
    boxShadow: `inset -1px -1px 5px ${theme.palette.background.light},inset 1px 1px 5px ${theme.palette.background.light}`,
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
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" });
  const [notify, setNotify] = useState({ isOpen: false, alertMessage: "", alertType: "" });

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

  const handleDeleteRecord = (id) => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
    deleteEmployee(id);
    setRecords(getAllEmployees());
    setNotify({
      isOpen: true,
      alertMessage: "Deleted succcessfully",
      alertType: "error",
    });
  };

  const handleSetMockData = () => {
    setMockEmployeeData();
    setRecords(getAllEmployees());
    setNotify({
      isOpen: true,
      alertMessage: "Updated Mock succcessfully",
      alertType: "success",
    });
  };

  return (
    <div>
      <PageHeader title="Manage Employees" description="With Form Validation" icon={<PeopleAltOutlinedIcon />} />

      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item xs={6} md={6}>
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
          <Grid item xs={12} md={12}>
            <MyControls.Button
              text={"Add New Employee"}
              size="medium"
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpenPopup}
              color={"inherit"}
            />
            <MyControls.Button
              text={"Set Mock Employee Data"}
              size="medium"
              variant="contained"
              onClick={handleSetMockData}
              color={"inherit"}
            />
          </Grid>
        </Grid>

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
                        <MyControls.ActionIconButton
                          color="theme"
                          onClick={() => {
                            setConfirmDialog({
                              isOpen: true,
                              title: "Are you sure to Delete",
                              subTitle: `Delete record of employee "${record.fullName}"`,
                              onConfirm: () => handleDeleteRecord(record.id),
                            });
                          }}
                        >
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
          setNotify={setNotify}
        />
      </MyControls.PopupDialog>
      <MyControls.Notification notify={notify} setNotify={setNotify} />
      <MyControls.ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
    </div>
  );
};

export default Employees;
