import React from "react";
import EmployeeForm from "./EmployeeForm";
import { PeopleAltOutlined as PeopleAltOutlinedIcon } from "@material-ui/icons";
import PageHeader from "../../components/PageHeader";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(2),
  },
}));

const Employees = () => {
  const classes = useStyles();

  return (
    <div>
      <PageHeader title="New Employee" description="With Form Validation" icon={<PeopleAltOutlinedIcon />} />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </div>
  );
};

export default Employees;
