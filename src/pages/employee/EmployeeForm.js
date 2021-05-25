import { Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const intialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "M",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const EmployeeForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState(intialFieldValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField variant={"outlined"} label="FullName" value={values.fullName} onChange={handleInputChange} name="fullName" />
          <TextField variant={"outlined"} label="Email" value={values.email} onChange={handleInputChange} name="email" />
          <TextField variant={"outlined"} label="Mobile" value={values.mobile} onChange={handleInputChange} name="mobile" />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;
