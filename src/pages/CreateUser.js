import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Divider, Input, Button } from "@mui/material";

export default function CreateUser() {
  const [image, setImage] = useState(null);

  // const handleSubmit = () => {
  //   const fileRef = storageRef.child(image.name);
  //   fileRef.put(image).then(() => {
  //     console.log("uploaded");
  //   });
  // };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Divider textAlign="left">General information</Divider>
        <TextField id="Name" label="Name" />
        <TextField id="Email" label="Email" />
        <TextField id="Aadhar number" label="Aadhar number" />
        <TextField id="Age" label="Age" />
        <TextField id="Religion" label="religion" />
        <TextField id="Matrimonial status" label="Matrimonial status" />
        <Divider textAlign="left">Address</Divider>
        <TextField id="Address" label="Address" />
        <TextField id="Latitude" label="Latitude" />
        <TextField id="Longitude" label="Longitude" />
        <Divider textAlign="left">Upload documents</Divider>

        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </div>
    </Box>
  );
}
