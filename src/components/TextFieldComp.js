import { TextField } from "@mui/material";
import React, { useState } from "react";

const TextFieldComp = ({ id, name, value, isMultilined, setValue }) => {
  // const [data, setData] = useState(defaultValue);
  const handleChange = (e) => {
    // setData(e.target.value);
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
      value={data}
      variant="outlined"
      onChange={handleChange}
      multiline={isMultilined}
    ></TextField>
  );
};

export default TextFieldComp;
