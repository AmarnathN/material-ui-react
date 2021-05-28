import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import React from "react";

const DatePicker = (props) => {
  const { name, label, value, onChange } = props;
  const convertToDefaultEventParam = (name, value) => {
    return {
      target: { name, value },
    };
  };
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MMM/DD/yyyy"
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefaultEventParam(name, date))}
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
