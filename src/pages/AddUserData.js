import React, { useState, useEffect } from "react";

import {
  maritalStatusOptions,
  typeofUserOptions,
} from "../DropDownOptions/options";

import { Box, Divider, Stack, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";

import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";

export default function AddUserData({
  formData,
  setFormData,
  handleSubmit,
  clearForm,
  submitLoading,
  setSubmitLoading,
}) {
  return (
    <Box>
      {/* general information */}
      <Box>
        <Divider style={{ margin: "5px" }} textAlign="left">
          General information
        </Divider>
        <TextFieldComp
          id="name"
          name="Name"
          value={formData.name}
          setValue={(value) => setFormData({ ...formData, name: value })}
        />
        <TextFieldComp
          id="email"
          name="Email"
          value={formData.email}
          setValue={(value) => setFormData({ ...formData, email: value })}
        />
        <TextFieldComp
          id="aadhar-no"
          name="Aadhar number"
          value={formData.aadharNo}
          setValue={(value) => setFormData({ ...formData, aadharNo: value })}
        />
        <TextFieldComp
          id="age"
          name="Age"
          value={formData.age}
          setValue={(value) => setFormData({ ...formData, age: value })}
        />
        <TextFieldComp
          id="phone-no"
          name="Phone number"
          value={formData.phoneNo}
          setValue={(value) => setFormData({ ...formData, phoneNo: value })}
        />
        <TextFieldComp
          id="phone-no-2"
          name="Another phone number"
          value={formData.phoneNo2}
          setValue={(value) => setFormData({ ...formData, phoneNo2: value })}
        />

        <DropDown
          id="Marital-status"
          items={maritalStatusOptions}
          name="Marital status"
          setValue={(value) =>
            setFormData({ ...formData, maritalStatus: value })
          }
        />
      </Box>
      {/* Address box */}
      <Box>
        <Divider style={{ margin: "5px" }} textAlign="left">
          Address
        </Divider>
        <TextFieldComp
          id="address"
          name="Address"
          value={formData.address}
          setValue={(value) => setFormData({ ...formData, address: value })}
        />
        <TextFieldComp
          id="latitude"
          name="Latitude"
          value={formData.latitude}
          setValue={(value) => setFormData({ ...formData, latitude: value })}
        />
        <TextFieldComp
          id="longitude"
          name="Longitude"
          value={formData.longitude}
          setValue={(value) => setFormData({ ...formData, longitude: value })}
        />
      </Box>
      {/* Login credentials */}
      <Box>
        <Divider style={{ margin: "5px" }} textAlign="left">
          Login Credentials
        </Divider>
        <TextFieldComp
          id="login-email"
          name="Login Email"
          value={formData.loginEmail}
          setValue={(value) => setFormData({ ...formData, loginEmail: value })}
        />
        <TextFieldComp
          id="login-password"
          name="Login password"
          value={formData.loginPassword}
          setValue={(value) =>
            setFormData({ ...formData, loginPassword: value })
          }
        />
        <DropDown
          id="type-of-user"
          items={typeofUserOptions}
          name="Type of user"
          setValue={(value) => setFormData({ ...formData, type: value })}
        />
      </Box>
      <Divider style={{ margin: "5px" }}></Divider>
      {/* upload and clear buttons */}
      <Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          style={{ margin: "20px" }}
        >
          <LoadingButton
            onClick={handleSubmit}
            loading={submitLoading}
            loadingIndicator="wait..."
            variant="contained"
            color="success"
          >
            Submit
          </LoadingButton>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={clearForm}
          >
            Clear All
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
