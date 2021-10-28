import { TextField } from "@mui/material";
import React, { useState } from "react";

const TextFieldComp = ({ id, name, isMultilined, setValue }) => {
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
    setValue(data);
  };

  return (
    <TextField
      sx={{
        m: 1,
        width: "30ch",
      }}
      id={id}
      label={name}
      variant="outlined"
      onChange={handleChange}
      multiline={isMultilined}
    ></TextField>
  );
};

export default TextFieldComp;
