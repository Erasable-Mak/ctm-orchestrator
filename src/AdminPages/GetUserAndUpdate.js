import React, { useEffect, useState } from "react";

import { db } from "../firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";

import {
  maritalStatusOptions,
  typeofUserOptions,
  religionOptions,
} from "../DropDownOptions/options";

import { Box, Divider, Stack, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";
import ClickableTextFieldComp from "../components/ClickableTextFieldComp";
import DatePicker from "../components/DatePicker";
import MapForAddress from "../components/MapForAddress";

const initialState = {
  name: "",
  email: "",
  aadharNo: "",
  dateOfBirth: "",
  contactNo: [],
  religion: "",
  maritalStatus: "",
  address: "",
  state: "",
  district: "",
  locality: "",
  pincode: "",
  latitude: "",
  longitude: "",
  typeOfUser: "",
  aadhar: "",
  panCard: "",
  nationality: "",
  addressProof: "",
  resume: "",
};

function GetUserAndUpdate({ uid, setFlag }) {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const [updateLoading, setUpdateLoading] = useState(false);

  const handleUpdate = async () => {
    setUpdateLoading(true);

    try {
      //updating general details of user
      await setDoc(doc(db, "Users", uid), {
        name: formData.name,
        email: formData.email,
        contactNo: formData.contactNo,
        typeOfUser: formData.typeOfUser,
      });

      //updating address info to Address information collection
      await setDoc(
        doc(db, "Users", uid, "Address information", "address_info"),
        {
          address: formData.address,
          district: formData.district,
          latitude: formData.latitude,
          longitude: formData.longitude,
          locality: formData.locality,
          pincode: formData.pincode,
          state: formData.state,
        }
      );

      //updating personal info to Personal information collection
      await setDoc(
        doc(db, "Users", uid, "Personal information", "personal_info"),
        {
          age: formData.age,
          aadharNo: formData.aadharNo,
          maritalStatus: formData.maritalStatus,
          religion: formData.religion,
        }
      );
    } catch (err) {
      //do error handling
    }
    setUpdateLoading(false);
  };

  useEffect(() => {
    setData([]);
    try {
      const getdata = async () => {
        //here we get the data from actual document
        console.log("get data called");
        const docRef = doc(db, "Users", uid);
        const docSnap = await getDoc(docRef);
        setFormData((prev) => ({ ...prev, ...docSnap.data() }));

        //here we get the data from subcollection named Address information that contain document with id address_info
        const addressRef = doc(
          db,
          "Users",
          uid,
          "Address information",
          "address_info"
        );
        const addressSnap = await getDoc(addressRef);
        setFormData((prev) => ({ ...prev, ...addressSnap.data() }));

        //here we get the data from subcollection named Personal information that contain document with id personal_info
        const personalRef = doc(
          db,
          "Users",
          uid,
          "Personal information",
          "personal_info"
        );
        const personalSnap = await getDoc(personalRef);
        setFormData((prev) => ({ ...prev, ...personalSnap.data() }));
      };

      getdata();
    } catch (err) {
      console.log(err);
    }
    return () => {
      setData(null);
    };
  }, []);

  return (
    <div>
      <Button variant="contained" onClick={() => setFlag(true)}>
        Go back
      </Button>
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
            setValue={(value) =>
              setFormData({ ...formData, dateOfBirth: value })
            }
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
            setValue={(value) =>
              setFormData({ ...formData, loginEmail: value })
            }
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
            setValue={(value) =>
              setFormData({ ...formData, typeOfUser: value })
            }
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
              onClick={handleUpdate}
              loading={updateLoading}
              loadingIndicator="wait..."
              variant="contained"
              color="success"
            >
              Update
            </LoadingButton>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default GetUserAndUpdate;
