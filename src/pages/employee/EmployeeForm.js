import { Grid } from "@material-ui/core";
import React from "react";
import { MyControls } from "../../components/controls/MyControls";
import { getDepartments } from "../../services/employeeService";

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
  const { values, setValues, handleInputChange } = MyControls.useForm(intialFieldValues);

  return (
    <MyControls.Form>
      <Grid container>
        <Grid item xs={6}>
          <MyControls.Input label="Full Name" value={values.fullName} onChange={handleInputChange} name="fullName" />
          <MyControls.Input label="Email" value={values.email} onChange={handleInputChange} name="email" />
          <MyControls.Input label="Mobile" value={values.mobile} onChange={handleInputChange} name="mobile" />
          <MyControls.Input label="City" value={values.city} onChange={handleInputChange} name="city" />
        </Grid>
        <Grid item xs={6}>
          <MyControls.RadioGroup name="gender" value={values.gender} onChange={handleInputChange} items={genderItems} />
          <MyControls.Select
            label="Department"
            name="departmentId"
            value={values.departmentId}
            onChange={handleInputChange}
            options={getDepartments()}
          />
          <MyControls.Checkbox label="Permanent Employee" name="isPermanent" value={values.isPermanent} onChange={handleInputChange} />
          <MyControls.DatePicker label="Hire Date" name="hireDate" value={values.hireDate} onChange={handleInputChange} />
          <div>
            <MyControls.Button color="primary" size="medium" text="Submit" type="submit" />
            <MyControls.Button color="secondary" size="medium" text="Reset" />
          </div>
        </Grid>
      </Grid>
    </MyControls.Form>
  );
};

export default EmployeeForm;
