import { TextField } from "@mui/material";
import React, { useState } from "react";

const TextFieldComp = ({ id, name, setValue }) => {
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
    setValue(data);
  };
  //   useEffect(() => {

  //   }, [data, setValue]);

  return (
    <TextField
      id={id}
      label={name}
      variant="outlined"
      onChange={handleChange}
    ></TextField>
  );
};

export default TextFieldComp;
