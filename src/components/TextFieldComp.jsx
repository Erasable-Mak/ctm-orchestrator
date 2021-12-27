import { TextField } from "@mui/material";
import React from "react";

const TextFieldComp = ({
  id,
  name,
  value,
  isMultilined,
  width,
  helperText,
  setValue,
}) => {
  const handleChange = (e) => {
    setValue(e.target.value); //changes
  };

  return (
    <TextField
      sx={{
        m: 1,
        width: `${width ? width : 30}ch`,
      }}
      id={id}
      value={value}
      label={name}
      variant="outlined"
      onChange={handleChange}
      multiline={isMultilined}
      helperText={helperText}
    ></TextField>
  );
};

export default TextFieldComp;
