import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { Box } from "@mui/system";

const DatePicker = ({ id, name, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e); //changes
  };

  return (
    <Box
      sx={{
        m: 1,
        width: "30ch",
        display: "inline-block",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          id={id}
          label={name}
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePicker;
