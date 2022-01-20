import React, { useState } from "react";

import { secondaryAuth, db } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { Box, Stepper, Step, StepLabel } from "@mui/material";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddUserData from "./AddUserData";
import UploadDocuments from "./UploadDocuments";

const initialState = {
  name: "",
  email: "",
  aadharNo: "",
  dateOfBirth: null,
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
  loginEmail: "",
  loginPassword: "",
  typeOfUser: "",
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

  const clearForm = () => {
    setFormData(initialState);
  };

  const handleReset = () => {
    setActiveStep(0);
    clearForm();
  };

  const handleSubmit = async () => {
    setSubmitLoading(true);
    const { loginEmail, loginPassword } = formData;
    // console.log(loginEmail + loginPassword);
    // creating new user in auth table
    createUserWithEmailAndPassword(secondaryAuth, loginEmail, loginPassword)
      .then(async (userCredential) => {
        const user = userCredential.user;
        try {
          //adding this user with obtained id and filled data to Users table
          await setDoc(doc(db, "Users", user.uid), {
            name: formData.name,
            email: formData.email,
            contactNo: formData.contactNo,
            typeOfUser: formData.typeOfUser,
          });

          //adding address info to Address information collection
          await setDoc(
            doc(db, "Users", user.uid, "Address information", "address_info"),
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

          //adding personal info to Personal information collection
          await setDoc(
            doc(db, "Users", user.uid, "Personal information", "personal_info"),
            {
              dateOfBirth: formData.dateOfBirth,
              aadharNo: formData.aadharNo,
              maritalStatus: formData.maritalStatus,
              religion: formData.religion,
            }
          );

          toast.success("New User added successfully", { autoClose: 5000 });
          //after adding user clear form and go to file upload step
          clearForm();
          setNewUserId(user.uid);
          handleNext();
          setSubmitLoading(false);
        } catch (error) {
          console.log(error);
          setSubmitLoading(false);
          toast.error(`${error}`, {
            autoClose: 5000,
          });
        }
      })
      .catch((error) => {
        setSubmitLoading(false);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        toast.error(`${error}`, {
          autoClose: 5000,
        });
      });
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* stepper comp. adds stepper at top of page */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {
        <Box noValidate sx={{ mt: 1 }}>
          {/* content comes here */}
          {/* if activeStep === 0, addUserData comp. is rendered
                if activeStep === 1, uploadDocuments comp. is rendered  */}
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
              uid={newUserId}
              handleReset={handleReset}
            />
          )}
        </Box>
      }
    </Box>
  );
}
