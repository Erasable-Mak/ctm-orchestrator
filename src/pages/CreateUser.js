import React, { useState, useEffect } from "react";

import { auth, db } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import Box from "@mui/material/Box";
import { Divider, Input, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  name: "",
  email: "",
  aadharNo: "",
  age: "",
  phoneNo: "",
  phoneNo2: "",
  religion: "",
  maritalStatus: "",
  address: "",
  latitude: "",
  longitude: "",
  loginEmail: "",
  loginPassword: "",
  type: "",
  setImage: "",
};

const maritalStatusOptions = [
  {
    id: "single (never married)",
    value: "single (never married)",
  },
  {
    id: "married",
    value: "married",
  },
  {
    id: "widowed and not remarried",
    value: "widowed and not remarried",
  },
  {
    id: "divorced and not remarried",
    value: "divorced and not remarried",
  },
  {
    id: "married but separated",
    value: "married but separated",
  },
];

const typeofUserOptions = [
  { id: "Admin", value: "Admin" },
  { id: "TypeWrite", value: "TypeWrite" },
  { id: "Checker", value: "Checker" },
  { id: "Field Visit Officer", value: "Field Visit Officer" },
];

export default function CreateUser() {
  const [formData, setFormData] = useState(initialState);
  const [reload, setReload] = useState(false);

  // useEffect(() => {}, [formData]);

  const handleSubmit = async () => {
    const { loginEmail, loginPassword } = formData;
    console.log(loginEmail + loginPassword);
    createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        try {
          await setDoc(doc(db, "Users", user.uid), formData);
          toast.success("New User added successfully", { autoClose: 5000 });
        } catch (error) {
          toast.error(`${error}`, {
            autoClose: 5000,
          });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        toast.error(`${errorCode}`, {
          autoClose: 5000,
        });
      });
  };

  const clearForm = () => {
    setFormData(initialState);
    setReload(true);
  };

  useEffect(() => {}, [reload]);

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
        <Divider style={{ margin: "5px" }} textAlign="left">
          Upload documents
        </Divider>

        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
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

        <Divider style={{ margin: "5px" }}></Divider>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          style={{ margin: "20px" }}
        >
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={clearForm}
          >
            Delete
          </Button>
        </Stack>
      </div>
    </Box>
  );
}
