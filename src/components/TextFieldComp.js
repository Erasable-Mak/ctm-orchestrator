import { TextField } from "@mui/material";
import React from "react";

const TextFieldComp = ({ id, name, value, isMultilined, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value); //changes
  };

  return (
    <TextField
      sx={{
        m: 1,
        width: "30ch",
      }}
      id={id}
      value={value}
      label={name}
      variant="outlined"
      onChange={handleChange}
      multiline={isMultilined}
    ></TextField>
  );
};

export default TextFieldComp;
