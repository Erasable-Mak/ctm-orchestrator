import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const DropDown = ({ id, items, name, setValue }) => {
  const [data, setData] = useState(items[0].value || "");
  const handleChange = (e) => {
    setData(e.target.value);
    setValue(data);
  };
  //   useEffect(() => {

  //   }, [data, setValue]);
  return (
    <FormControl style={{ width: "200px" }}>
      <InputLabel id={`${id}-label`}>{name}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={data}
        label={name}
        onChange={handleChange}
      >
        {/* <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
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
