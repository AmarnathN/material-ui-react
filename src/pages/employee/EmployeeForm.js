import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import MyInput from "../../components/controls/MyInput";
import { useForm, MyForm } from "../../components/controls/useForm";

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
          <MyInput label="Full Name" value={values.fullName} onChange={handleInputChange} name="fullName" />
          <MyInput label="Email" value={values.email} onChange={handleInputChange} name="email" />
          <MyInput label="Mobile" value={values.mobile} onChange={handleInputChange} name="mobile" />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gneder</FormLabel>
            <RadioGroup row={true} name="gender" values={values.gender} onChange={handleInputChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </MyForm>
  );
};

export default EmployeeForm;
