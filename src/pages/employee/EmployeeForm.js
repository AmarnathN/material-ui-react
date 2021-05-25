import { Grid } from "@material-ui/core";
import React from "react";
import MyInput from "../../components/controls/MyInput";
import MyRadioGroup from "../../components/controls/MyRadioGroup";
import { useForm, MyForm } from "../../components/controls/useForm";

const genderItems = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
  { id: "other", label: "Other" },
];

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
          <MyRadioGroup name="gender" value={values.gender} onChange={handleInputChange} items={genderItems} />
        </Grid>
      </Grid>
    </MyForm>
  );
};

export default EmployeeForm;
