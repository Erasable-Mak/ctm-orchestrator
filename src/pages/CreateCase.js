import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Divider, Stack } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ClickableTextFieldComp from "../components/ClickableTextFieldComp";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";
import { db } from "../firebase-config";
import DatePicker from "../components/DatePicker";

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
  dateOfInspection: null,
};

function CreateCase() {
  const [formData, setFormData] = useState(initialState);
  const [reload, setReload] = useState(false);

  const handleSubmit = async () => {
    try {
      if (formData.bankName === "") {
        throw new Error("Please enter bank name");
      }
      if (formData.bankBranchName === "") {
        throw new Error("Please enter bank branch name");
      }

      if (formData.loanAcNo === "") {
        throw new Error("Please enter  loan account mumber");
      }

      if (formData.borrowerNames === "") {
        throw new Error("Please enter  borrower name");
      }
      if (formData.typeOfAsset === "") {
        throw new Error("Please enter type of asset");
      }
      if (formData.purposeOfValuation === "") {
        throw new Error("Please enter  purpose of valuation");
      }
      if (formData.contactNo === "") {
        throw new Error("Please enter phone mumber");
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
      if (formData.jobBranch === "") {
        throw new Error("Please enter   job branch");
      }
      if (formData.instructions === "") {
        throw new Error("Please enter  instruction");
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

  useEffect(() => {}, [reload]);

  return (
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
          setValue={(value) => setFormData({ ...formData, typeOfAsset: value })}
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
      </div>
    </Box>
  );
}

export default CreateCase;
