import React, { useEffect, useState } from "react";

import { db } from "../firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { Box, Divider, Stack, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ClickableTextFieldComp from "../components/ClickableTextFieldComp";
import DatePicker from "../components/DatePicker";

import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";

const bankNames = [
  {
    id: "HDFC",
    value: "HDFC",
  },
  {
    id: "SBI",
    value: "SBI",
  },
  {
    id: "ICICI",
    value: "ICICI",
  },
];

const bankBranchNames = [
  {
    id: "Pune",
    value: "Pune",
  },
  {
    id: "Mumbai",
    value: "Mumbai",
  },
  {
    id: "Nashik",
    value: "Nashik",
  },
];

const bankEmployeeNames = [
  {
    id: "ABC",
    value: "ABC",
  },
  {
    id: "DEF",
    value: "DEF",
  },
];

const typeOfAsset = [...bankEmployeeNames];
const purposeOfValuation = [...bankEmployeeNames];
const jobBranch = [...bankEmployeeNames];

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
  latitude: "",
  longitude: "",
  jobBranch: "",
  instructions: "",
  dateOfInspection: new Date(),
};

function GetCaseAndUpdate({ uid, setFlag }) {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const [updateLoading, setUpdateLoading] = useState(false);

  const handleUpdate = async () => {
    setUpdateLoading(true);
    //updating case
    await setDoc(doc(db, "Cases", uid), {
      bankName: formData.bankName,
      bankBranchName: formData.bankBranchName,
      bankEmployeeName: formData.bankEmployeeName,
      loanAcNo: formData.loanAcNo,
      borrowerNames: formData.borrowerNames,
      typeOfAsset: formData.typeOfAsset,
      purposeOfValuation: formData.purposeOfValuation,
      contactNo: formData.contactNo,
      address: formData.address,
      latitude: formData.latitude,
      longitude: formData.longitude,
      jobBranch: formData.jobBranch,
      instructions: formData.instructions,
      dateofInspection: formData.dateOfInspection,
    });
    setUpdateLoading(false);
    // ----IMPORTANT------------------------------------------
    // after data is actually updated user should get some visual sign of success, and page should be redirected to original page
    // also there si some problem with date
    // -----------------------------------------------------
  };

  useEffect(() => {
    setData([]);
    try {
      const getdata = async () => {
        //here we get the data from actual document
        const docRef = doc(db, "Cases", uid);
        const docSnap = await getDoc(docRef);
        setFormData((prev) => ({ ...prev, ...docSnap.data() }));
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
      <Box noValidate sx={{ mt: 1 }}>
        <div>
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
            items={typeOfAsset}
            name="Type Of Asset"
            value={formData.typeOfAsset}
            setValue={(value) =>
              setFormData({ ...formData, typeOfAsset: value })
            }
          />
          <DropDown
            id="purpose-of-valuation"
            items={purposeOfValuation}
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
          <Divider textAlign="left">Address</Divider>
          <TextFieldComp
            id="address"
            name="Address"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })}
          />
          <TextFieldComp
            id="latitude"
            name="Latitude"
            value={formData.latitude}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, latitude: value })}
          />
          <TextFieldComp
            id="longitude"
            name="Longitude"
            value={formData.longitude}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, longitude: value })}
          />
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
          <Divider style={{ margin: "5px" }}></Divider>
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
        </div>
      </Box>
    </div>
  );
}

export default GetCaseAndUpdate;
