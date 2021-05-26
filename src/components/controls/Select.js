import { FormControl, FormHelperText, FormLabel, InputLabel, MenuItem, Select as MuiSelect } from "@material-ui/core";
import React from "react";

const Select = (props) => {
  const { name, value, label, errorText = null, onChange, options } = props;
  return (
    <FormControl variant="outlined" {...(errorText && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map((option) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.title}
            </MenuItem>
          );
        })}
      </MuiSelect>
      {errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
