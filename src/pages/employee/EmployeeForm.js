import { Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { useForm, MyForm } from "../../components/useForm";

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

const EmployeeForm = () => {
  const { values, setValues, handleInputChange } = useForm(intialFieldValues);

  return (
    <MyForm>
      <Grid container>
        <Grid item xs={6}>
          <TextField variant={"outlined"} label="FullName" value={values.fullName} onChange={handleInputChange} name="fullName" />
          <TextField variant={"outlined"} label="Email" value={values.email} onChange={handleInputChange} name="email" />
          <TextField variant={"outlined"} label="Mobile" value={values.mobile} onChange={handleInputChange} name="mobile" />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </MyForm>
  );
};

export default EmployeeForm;
