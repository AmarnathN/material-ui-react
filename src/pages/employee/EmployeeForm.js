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
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues) {
      temp.fullName = values.fullName.length > 0 ? "" : "This field is required";
    }
    if ("email" in fieldValues) {
      temp.email = /$^|.+@+..+/.test(values.email) ? "" : "Valid Email is required";
    }
    if ("mobile" in fieldValues) {
      temp.mobile = isNaN(values.mobile) ? "Valid Mobile Number is Required" : "";
      temp.mobile = temp.mobile != "" ? temp.mobile : values.mobile.length == 10 ? "" : "Length is should be 10";
    }

    if ("city" in fieldValues) {
      temp.city = values.city ? "" : "This field is required";
    }
    if ("departmentId" in fieldValues) {
      temp.departmentId = values.departmentId.length > 0 ? "" : "This field is required";
    }
    setErrors({
      ...temp,
    });
    if (fieldValues == values) {
      return Object.values(temp).every((x) => x == "");
    }
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } = MyControls.useForm(intialFieldValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(values)) {
      window.alert("All are valid");
    }
  };

  return (
    <MyControls.Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item md={6} sm={12}>
          <MyControls.Input
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            name="fullName"
            errorText={errors.fullName}
          />
          <MyControls.Input label="Email" value={values.email} onChange={handleInputChange} name="email" errorText={errors.email} />
          <MyControls.Input label="Mobile" value={values.mobile} onChange={handleInputChange} name="mobile" errorText={errors.mobile} />
          <MyControls.Input label="City" value={values.city} onChange={handleInputChange} name="city" errorText={errors.city} />
        </Grid>
        <Grid item md={6} sm={12}>
          <MyControls.RadioGroup label={"Gender"} name="gender" value={values.gender} onChange={handleInputChange} items={genderItems} />
          <MyControls.Select
            label="Department"
            name="departmentId"
            value={values.departmentId}
            onChange={handleInputChange}
            options={getDepartments()}
            errorText={errors.departmentId}
          />
          <MyControls.Checkbox label="Permanent Employee" name="isPermanent" value={values.isPermanent} onChange={handleInputChange} />
          <MyControls.DatePicker label="Hire Date" name="hireDate" value={values.hireDate} onChange={handleInputChange} />
          <div>
            <MyControls.Button color="primary" size="medium" text="Submit" type="submit" />
            <MyControls.Button color="secondary" size="medium" text="Reset" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </MyControls.Form>
  );
};

export default EmployeeForm;
