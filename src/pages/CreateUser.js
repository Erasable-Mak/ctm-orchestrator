import React, { useState } from "react";

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
  state: "",
  district: "",
  locality: "",
  pincode: "",
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
    try {
      if (!formData.loginEmail) {
        throw new Error("Please enter email");
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.loginEmail)
      ) {
        throw new Error("Please enter loginEmail");
      }
      if (formData.loginPassword === "") {
        throw new Error("Please enter password");
      }
    } catch (error) {}
    // creating new user in auth table
    createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        try {
          if (formData.name === "") {
            throw new Error("Please enter name");
          }
          if (!formData.email) {
            throw new Error("Please enter email");
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
              formData.loginEmail
            )
          ) {
            throw new Error("Please enter email");
          }
          if (formData.aadharNo === "") {
            throw new Error("Please enter aadhar number");
          }
          if (formData.age === "") {
            throw new Error("Please enter age");
          }
          if (formData.religion === "") {
            throw new Error("Please enter religion");
          }
          if (formData.maritalStatus === "") {
            throw new Error("Please enter marital status");
          }
          if (formData.address === "") {
            throw new Error("Please enter address");
          }
          if (formData.state === "") {
            throw new Error("Please enter state");
          }
          if (formData.district === "") {
            throw new Error("Please enter district");
          }
          if (formData.locality === "") {
            throw new Error("Please enter localityt");
          }
          if (formData.district === "") {
            throw new Error("Please enter district");
          }
          if (formData.pincode === "") {
            throw new Error("Please enter pincode");
          }
          if (formData.latitude === "") {
            throw new Error("Please enter latitude");
          }
          if (formData.longitude === "") {
            throw new Error("Please enter longitude");
          }
          if (formData.type === "") {
            throw new Error("Please enter type");
          }

          //adding this user with obtained id and filled data to Users table
          await setDoc(doc(db, "Users", user.uid), {
            name: formData.name,
            email: formData.email,
            phoneNo: formData.phoneNo,
            phoneNo2: formData.phoneNo2,
            typeOfUser: formData.type,
          });

          await setDoc(doc(db, "UserData", user.uid), {});
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

  // const handleSubmit = async () => {
  //   setSubmitLoading(true);
  //   const { loginEmail, loginPassword } = formData;
  //   // console.log(loginEmail + loginPassword);
  //   try {
  //     if (!formData.loginEmail) {
  //       throw new Error("Please enter email");
  //     } else if (
  //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.loginEmail)
  //     ) {
  //       throw new Error("Please enter loginEmail");
  //     }

  //     if (!formData.loginPassword) {
  //       throw new Error("Please enter loginPassword");
  //     } else if (
  //       "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$".test(
  //         formData.loginPassword
  //       )
  //     ) {
  //       throw new Error("Please enter loginPassword");
  //     }

  //     await setDoc(doc(db, "UserData", user.uid), {});
  //     toast.success("New User added successfully", { autoClose: 5000 });
  //     //after adding user clear form and go to file upload step
  //     clearForm();
  //     setNewUserId(user.uid);
  //     handleNext();
  //     setSubmitLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setSubmitLoading(false);
  //     toast.error(`${error}`, {
  //       autoClose: 5000,
  //     });
  //   }
  // };

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
