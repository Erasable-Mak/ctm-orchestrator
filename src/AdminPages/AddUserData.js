import react, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";

import {
  maritalStatusOptions,
  religionOptions,
  stateOptions,
  typeofUserOptions,
} from "../DropDownOptions/options";
import DatePicker from "../components/DatePicker";
import ClickableTextFieldComp from "../components/ClickableTextFieldComp";
import AddressAutocomplete from "../components/AddressAutocomplete";
import GoogleMapReact from "google-map-react";
import Marker from "../components/Marker";

export default function AddUserData({
  formData,
  setFormData,
  handleSubmit,
  clearForm,
  submitLoading,
}) {
  const [open, setOpen] = useState(false);
  const [initialLocation, setInitialLocation] = useState({ lat: 0, lng: 0 });
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          var accuracy = position.coords.accuracy;
          setInitialLocation({ lat: latitude, lng: longitude });
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        function error(msg) {
          alert("Please enable your GPS position feature.");
        },
        { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation API is not supported in your browser.");
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {/* on button click, dialog box opens */}
          <Button variant="contained" onClick={handleClickOpen}>
            Open map
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Search closest landmark on map to your address.Then select the
                exact loction with help of marker
              </DialogContentText>
              {/* AddressAutocomplete is a react component that autofills address as */}
              <AddressAutocomplete
                setCurrentLocation={setCurrentLocation}
                setFormData={setFormData}
              />
            </DialogContent>
            <div style={{ height: "50vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
                }}
                defaultCenter={initialLocation}
                center={currentLocation}
                defaultZoom={11}
                margin={[50, 50, 50, 50]}
                // options={""}
                // onChange={() => {}}
                // onChildClick={() => {}}
                onClick={(e) => {
                  console.log({ e });
                  setCurrentLocation({ lat: e.lat, lng: e.lng });
                  setFormData((prev) => ({
                    ...prev,
                    latitude: e.lat,
                    longitude: e.lng,
                  }));
                }}
              >
                <Marker lat={currentLocation.lat} lng={currentLocation.lng} />
              </GoogleMapReact>
            </div>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button onClick={handleClose}>Done</Button>
            </DialogActions>
          </Dialog>
        </Stack>

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
