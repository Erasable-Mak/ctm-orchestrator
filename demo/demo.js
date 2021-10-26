import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField required id="outlined-required" label="Name" />
        <TextField id="outlined-required" label="Username" />
      </div>
      <div>
        <TextField id="outlined-required" label="Email" />
        <TextField id="outlined-required" label="Phone" />
      </div>
      <div>
        <TextField id="outlined-required" label="Address" />

        <TextField id="outlined-required" label="Matrimonal status" />
      </div>
      <div>
        <TextField id="outlined-required" label="Type of employee" />

        <TextField id="outlined-required" label="Coordinate of address" />
      </div>
      <div>
        <TextField id="outlined-required" label="Age" />
        <TextField id="outlined-required" label="Religion" />
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
    </Box>
  );
}
