import React, { useState, useEffect } from "react";

import { auth, db } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddUserData from "./AddUserData";
import UploadDocuments from "./UploadDocuments";

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
  aadhar: "",
  panCard: "",
  nationality: "",
  addressProof: "",
  resume: "",
};

const steps = ["Add data", "upload documents"];

export default function CreateUser() {
  const [activeStep, setActiveStep] = useState(0);
  const [newUserId, setNewUserId] = useState(null);

  const [formData, setFormData] = useState(initialState);

  const [submitLoading, setSubmitLoading] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const clearForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = async () => {
    setSubmitLoading(true);
    const { loginEmail, loginPassword } = formData;
    console.log(loginEmail + loginPassword);
    // creating new user in auth table
    createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        try {
          //adding this user with obtained id and filled data to Users table
          await setDoc(doc(db, "Users", user.uid), formData);
          toast.success("New User added successfully", { autoClose: 5000 });
          //after adding user clear form and go to file upload step
          clearForm();
          setNewUserId(user.uid);
          handleNext();
          setSubmitLoading(false);
        } catch (error) {
          setSubmitLoading(false);
          toast.error(`${error}`, {
            autoClose: 5000,
          });
        }
      })
      .catch((error) => {
        setSubmitLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        toast.error(`${errorCode}`, {
          autoClose: 5000,
        });
      });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "30ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                {/* content comes here */}
                {activeStep + 1 === 1 && (
                  <AddUserData
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={handleSubmit}
                    clearForm={clearForm}
                    submitLoading={submitLoading}
                    setSubmitLoading={setSubmitLoading}
                  />
                )}
                {activeStep + 1 === 2 && (
                  <UploadDocuments
                    formData={formData}
                    setFormData={setFormData}
                    handleReset={handleReset}
                    uid={newUserId}
                  />
                )}
              </div>
            </Box>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
