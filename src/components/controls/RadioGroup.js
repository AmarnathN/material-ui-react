import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from "@material-ui/core";
import React from "react";

const RadioGroup = (props) => {
  const { name, value, label, onChange, items } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row={true} name={name} value={value} onChange={onChange}>
        {items.length > 0 &&
          items.map((item, index) => {
            return <FormControlLabel key={index} value={item.id} control={<Radio />} label={item.label} />;
          })}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
