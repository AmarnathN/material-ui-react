import { TextField } from "@material-ui/core";
import React from "react";

const Input = (props) => {
  const { name, value, label, onChange } = props;
  return <TextField variant={"outlined"} label={label} value={value} onChange={onChange} name={name} />;
};

export default Input;
