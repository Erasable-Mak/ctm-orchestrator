import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const DropDown = ({ id, items, value, name, setValue, width }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <FormControl
      sx={{
        m: 1,
        width: `${width ? width : 30}ch`,
      }}
    >
      <InputLabel id={`${id}-label`}>{name}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={name}
        onChange={handleChange}
      >
        {items.map((ele) => {
          return (
            <MenuItem key={ele.id} value={ele.value}>
              {ele.value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropDown;
