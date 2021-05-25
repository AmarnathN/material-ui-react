import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";

const MyRadioGroup = (props) => {
  const { name, value, label, onChange, items } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row={true} name={name} values={value} onChange={onChange}>
        {items.length > 0 &&
          items.map((item) => {
            return <FormControlLabel value={item.id} control={<Radio />} label={item.label} />;
          })}
      </RadioGroup>
    </FormControl>
  );
};

export default MyRadioGroup;
