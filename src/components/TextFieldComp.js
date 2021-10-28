import { TextField } from "@mui/material";
import React, { useState } from "react";

const TextFieldComp = ({ id, name, defaultValue, setValue }) => {
  const [data, setData] = useState(defaultValue);
  const handleChange = (e) => {
    setData(e.target.value);
    setValue(e.target.value); //changes
  };
  //   useEffect(() => {

  //   }, [data, setValue]);

  return (
    <TextField
      sx={{
        m: 1,
        width: "30ch",
      }}
      id={id}
      label={name}
      value={data}
      variant="outlined"
      onChange={handleChange}
    ></TextField>
  );
};

export default TextFieldComp;
