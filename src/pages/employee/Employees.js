import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { PeopleAltOutlined as PeopleAltOutlinedIcon } from "@material-ui/icons";
import PageHeader from "../../components/PageHeader";
import { makeStyles, Paper, TableBody, TableCell, TableRow } from "@material-ui/core";
import useTable from "../../components/controlsHandlers/useTable";
import { getAllEmployees } from "../../services/employeeService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(2),
  },
}));

const HeadCells = [
  { id: "id", label: "EmployeeId" },
  { id: "fullName", label: "Full Name" },
  { id: "email", label: "Email" },
  { id: "mobile", label: "Mobile" },
  { id: "department", label: "Department" },
];

const Employees = () => {
  const classes = useStyles();
  const [records, setRecords] = useState(getAllEmployees());
  const { TableContainer, TableHead } = useTable(records, HeadCells);
  return (
    <div>
      <PageHeader title="New Employee" description="With Form Validation" icon={<PeopleAltOutlinedIcon />} />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
      <Paper className={classes.pageContent}>
        <TableContainer>
          <TableHead />
          <TableBody>
            {records.map((record, index) => {
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
      </Paper>
    </div>
  );
};

export default Employees;
