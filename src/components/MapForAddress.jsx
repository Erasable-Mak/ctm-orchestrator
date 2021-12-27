import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import GoogleMapReact from "google-map-react";

import AddressAutocomplete from "../components/AddressAutocomplete";
import Marker from "../components/Marker";

function MapForAddress({ setFormData }) {
  const [open, setOpen] = useState(false);
  const [initialLocation, setInitialLocation] = useState({ lat: 0, lng: 0 });
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
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

  return (
    <Box>
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
                key: "AIzaSyDlBDZSwz8-pN4CLJKxYomYs-k7-wtPZUU",
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
    </Box>
  );
}

export default MapForAddress;
