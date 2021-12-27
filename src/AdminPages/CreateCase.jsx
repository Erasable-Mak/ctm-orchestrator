import React, { useEffect, useState } from "react";

import { db } from "../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Divider, Stack } from "@mui/material";

import { toast } from "react-toastify";

import ClickableTextFieldComp from "../components/ClickableTextFieldComp";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";
import DatePicker from "../components/DatePicker";
import MapForAddress from "../components/MapForAddress";

import {
  purposeOfValuationOptions,
  typeOfAssetOptions,
} from "../DropDownOptions/options";

//don't know what this is for --@Ayush look into this
const jobBranch = [
  {
    id: "ABC",
    value: "ABC",
  },
  {
    id: "DEF",
    value: "DEF",
  },
];

const initialState = {
  bankName: "",
  bankBranchName: "",
  bankEmployeeName: "",
  loanAcNo: "",
  borrowerNames: [],
  typeOfAsset: "",
  purposeOfValuation: "",
  contactNo: [],
  address: "",
  state: "",
  district: "",
  locality: "",
  pincode: "",
  latitude: "",
  longitude: "",
  jobBranch: "",
  instructions: "",
  dateOfInspection: null,
  caseStatus: "Not Assigned",
};

const CreateCase = () => {
  const [formData, setFormData] = useState(initialState);
  const [reload, setReload] = useState(false);
  const [bankData, setBankData] = useState([]);
  const [bankNames, setBankNames] = useState([]);
  const [bankBranchNames, setBankBranchNames] = useState([]);
  const [bankEmployeeNames, setBankEmployeeNames] = useState([]);

  const handleSubmit = async () => {
    try {
      if (formData.bankName === "") {
        throw new Error("Please Select bank name");
      }
      if (formData.bankBranchName === "") {
        throw new Error("Please select bank branch name");
      }
      if (formData.borrowerNames === "") {
        throw new Error("Please enter  borrower name");
      }
      if (formData.typeOfAsset === "") {
        throw new Error("Please enter type of asset");
      }
      if (formData.purposeOfValuation === "") {
        throw new Error("Please enter purpose of valuation");
      }
      if (formData.contactNo === "") {
        throw new Error("Please enter phone number");
      }
      if (formData.address === "") {
        throw new Error("Please enter address");
      }
      if (formData.latitude === "") {
        throw new Error("Please enter latitude");
      }
      if (formData.longitude === "") {
        throw new Error("Please enter longitude");
      }

      await addDoc(collection(db, "Cases"), formData);
      toast.success("New Case added successfully", { autoClose: 5000 });
      clearForm();
    } catch (error) {
      toast.error(`${error}`, {
        autoClose: 5000,
      });
    }
  };

  const clearForm = () => {
    setFormData(initialState);
    setReload(true);
  };

  //here we are fetcing data of all banks from database
  const getBankData = async () => {
    let temp = [];
    const q = await collection(db, "Banks");
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    setBankData(temp);
  };

  //this useEffect is for fetching data of banks from firestore when page refreshes
  useEffect(() => {
    setBankData([]);
    try {
      getBankData();
    } catch (error) {
      console.log(error);
      toast.error("Can not connect to database due to internet issues!", {
        autoClose: 5000,
      });
    }
  }, []);

  //this useEffect query for name of banks from fetched documents
  useEffect(() => {
    setBankNames([]);
    setBankBranchNames([]);
    setBankEmployeeNames([]);
    try {
      //from data of banks we are getting only names of banks
      const temp = [];
      bankData.forEach((bank) => {
        if (!temp.includes(bank.bankName)) {
          temp.push(bank.bankName);
        }
      });
      let temp2 = [];
      temp.forEach((bankName) => {
        temp2.push({ id: bankName, value: bankName });
      });
      setBankNames(temp2);
    } catch (error) {
      console.log(error);
      toast.error("Can not connect to database due to internet issues!", {
        autoClose: 5000,
      });
    }
  }, [bankData]);

  // this effect runs when banks name is selected
  useEffect(() => {
    setBankBranchNames([]);
    setBankEmployeeNames([]);
    try {
      var temp = [];
      bankData.forEach((bank) => {
        if (
          bank.bankName === formData.bankName &&
          !bankBranchNames.includes(bank.bankBranchName)
        ) {
          temp.push({ id: bank.bankBranchName, value: bank.bankBranchName });
        }
      });
      setBankBranchNames(temp);
    } catch (error) {
      console.log(error);
      toast.error("Can not connect to database due to internet issues!", {
        autoClose: 5000,
      });
    }
  }, [formData.bankName]);

  // this effect runs when bank branch name is selected
  useEffect(() => {
    setBankEmployeeNames([]);
    try {
      const getEmployeeNames = async () => {
        bankData.forEach((bank) => {
          if (
            bank.bankName === formData.bankName &&
            bank.bankBranchName === formData.bankBranchName
          ) {
            bank.employeeInfo.forEach((employee, index) => {
              setBankEmployeeNames((prev) => [
                ...prev,
                { id: index, value: employee.empName },
              ]);
            });
          }
        });
      };
      getEmployeeNames();
    } catch (error) {
      console.log(error);
      toast.error("Can not connect to database due to internet issues!", {
        autoClose: 5000,
      });
    }
  }, [formData.bankBranchName]);

  //this relaod is to clear the form
  useEffect(() => {}, [reload]);

  return (
    <Box noValidate sx={{ mt: 1 }}>
      <Box>
        {/* for bank information */}
        <Divider textAlign="left">Bank Information</Divider>
        <DropDown
          id="bank-names"
          items={bankNames}
          value={formData.bankName}
          name="Bank Name"
          setValue={(value) => setFormData({ ...formData, bankName: value })}
        />
        <DropDown
          id="bank-branch-names"
          items={bankBranchNames}
          value={formData.bankBranchName}
          name="Bank Branch Name"
          setValue={(value) =>
            setFormData({ ...formData, bankBranchName: value })
          }
        />
        <DropDown
          id="bank-emp-names"
          items={bankEmployeeNames}
          value={formData.bankEmployeeName}
          name="Bank Employee Name"
          setValue={(value) =>
            setFormData({ ...formData, bankEmployeeName: value })
          }
        />
        <TextFieldComp
          id="loan-ac-no"
          name="Loan A/c No"
          value={formData.loanAcNo}
          isMultilined={false}
          setValue={(value) => setFormData({ ...formData, loanAcNo: value })}
        />
        <ClickableTextFieldComp
          id="borrower-name"
          name="Borrower Names"
          value={formData.borrowerNames}
          setValue={(value) =>
            setFormData({ ...formData, borrowerNames: value })
          }
        />
        <DropDown
          id="type-of-asset"
          items={typeOfAssetOptions}
          name="Type Of Asset"
          value={formData.typeOfAsset}
          setValue={(value) => setFormData({ ...formData, typeOfAsset: value })}
        />
        <DropDown
          id="purpose-of-valuation"
          items={purposeOfValuationOptions}
          name="Purpose Of Valuation"
          value={formData.purposeOfValuation}
          setValue={(value) =>
            setFormData({ ...formData, purposeOfValuation: value })
          }
        />
        <ClickableTextFieldComp
          id="contact-no"
          name="Contact No"
          value={formData.contactNo}
          setValue={(value) => setFormData({ ...formData, contactNo: value })}
        />
        {/* // Date of Inspection */}
        <DatePicker
          id="date-of-inspection"
          name="Date of Inspection"
          value={formData.dateOfInspection}
          setValue={(value) =>
            setFormData({ ...formData, dateOfInspection: value })
          }
        />
      </Box>
      <Box>
        <Divider textAlign="left">Address</Divider>

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
      <Box>
        <Divider textAlign="left">Additional Information</Divider>
        <DropDown
          id="job-branch"
          items={jobBranch}
          value={formData.jobBranch}
          name="Job Branch"
          setValue={(value) => setFormData({ ...formData, jobBranch: value })}
        />
        <TextFieldComp
          id="instructions"
          name="Additional Information For Valuers"
          value={formData.instructions}
          isMultilined={true}
          setValue={(value) =>
            setFormData({ ...formData, instructions: value })
          }
        />
      </Box>
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
          Clear Form
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateCase;
