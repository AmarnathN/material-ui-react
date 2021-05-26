import { TextField } from "@material-ui/core";
import React from "react";

const Input = (props) => {
  const { name, value, label, errorText = null, onChange } = props;
  return (
    <TextField
      variant={"outlined"}
      label={label}
      value={value}
      onChange={onChange}
      name={name}
      {...(errorText && { error: true, helperText: errorText })}
    />
  );
};

export default Input;
