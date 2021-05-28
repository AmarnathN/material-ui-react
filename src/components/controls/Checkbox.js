import { Checkbox as MuiCheckbox, FormControl, FormControlLabel } from "@material-ui/core";
import React from "react";

const Checkbox = (props) => {
  const { name, value, label, onChange, color } = props;
  const convertToDefaultEventParam = (name, value) => {
    return {
      target: { name, value },
    };
  };

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color={color || "primary"}
            checked={value}
            onChange={(e) => onChange(convertToDefaultEventParam(name, e.target.checked))}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox;
