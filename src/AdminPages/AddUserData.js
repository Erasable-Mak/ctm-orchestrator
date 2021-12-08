import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";

import {
  maritalStatusOptions,
  religionOptions,
  typeofUserOptions,
} from "../DropDownOptions/options";
import DatePicker from "../components/DatePicker";
import ClickableTextFieldComp from "../components/ClickableTextFieldComp";
import AddressAutocomplete from "../components/AddressAutocomplete";
import GoogleMapReact from "google-map-react";
import Marker from "../components/Marker";
import MapForAddress from "../components/MapForAddress";

export default function AddUserData({
  formData,
  setFormData,
  handleSubmit,
  clearForm,
  submitLoading,
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
        <ClickableTextFieldComp
          id="contact-no"
          name="Contact No"
          value={formData.contactNo}
          setValue={(value) => setFormData({ ...formData, contactNo: value })}
        />
        <DropDown
          id="Marital-status"
          items={maritalStatusOptions}
          value={formData.maritalStatus}
          name="Marital status"
          setValue={(value) =>
            setFormData({ ...formData, maritalStatus: value })
          }
        />
        <DropDown
          id="Religion"
          items={religionOptions}
          value={formData.religion}
          name="Religion"
          setValue={(value) => setFormData({ ...formData, religion: value })}
        />
        <DatePicker
          id="dob"
          name="Date of Birth"
          value={formData.dateOfBirth}
          setValue={(value) => setFormData({ ...formData, dateOfBirth: value })}
        />
      </Box>
      {/* Address box */}
      <Box>
        <Divider style={{ margin: "5px" }} textAlign="left">
          Address
        </Divider>

        {/* adding button that gives dialog box to locate address on map */}
        <MapForAddress setFormData={setFormData} />

        <TextFieldComp
          id="address"
          name="Address"
          value={formData.address}
          setValue={(value) => setFormData({ ...formData, address: value })}
        />
        <TextFieldComp
          id="locality"
          name="Locality"
          value={formData.locality}
          setValue={(value) => setFormData({ ...formData, locality: value })}
        />
        <TextFieldComp
          id="district"
          name="District"
          value={formData.district}
          setValue={(value) => setFormData({ ...formData, district: value })}
        />
        <TextFieldComp
          id="state"
          name="State"
          value={formData.state}
          setValue={(value) => setFormData({ ...formData, state: value })}
        />

        <TextFieldComp
          id="pincode"
          name="Pincode"
          value={formData.pincode}
          setValue={(value) => setFormData({ ...formData, pincode: value })}
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
          value={formData.typeOfUser}
          name="Type of user"
          setValue={(value) => setFormData({ ...formData, typeOfUser: value })}
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
