import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
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

function CreateCase() {
  const [formData, setFormData] = useState({
    bankName: "",
    bankBranchName: "",
    bankEmployeeName: "",
    loanAcNo: "",
    borrowerName: "",
    typeOfAsset: "",
    purposeOfValuation: "",
    contactNo: "",
    address: "",
    latitude: "",
    longitude: "",
    jobBranch: "",
    instructions: "",
  });
  return (
    <Box noValidate sx={{ mt: 1 }}>
      <div>
        <Divider textAlign="left">Bank Information</Divider>
        <DropDown
          id="bank-names"
          items={bankNames}
          name="Bank Name"
          setValue={(value) => setFormData({ ...formData, bankName: value })}
        />
        <DropDown
          id="bank-branch-names"
          items={bankBranchNames}
          name="Bank Branch Name"
          setValue={(value) =>
            setFormData({ ...formData, bankBranchName: value })
          }
        />
        <DropDown
          id="bank-emp-names"
          items={bankEmployeeNames}
          name="Bank Employee Name"
          setValue={(value) =>
            setFormData({ ...formData, bankEmployeeName: value })
          }
        />
        <TextFieldComp
          id="loan-ac-no"
          name="Loan A/c No"
          isMultilined={false}
          setValue={(value) =>
            setFormData({ ...formData, bankEmployeeName: value })
          }
        />
        <TextFieldComp
          id="borrower-name"
          name="Borrower Name"
          isMultilined={false}
          setValue={(value) =>
            setFormData({ ...formData, borrowerName: value })
          }
        />
        <DropDown
          id="type-of-asset"
          items={typeOfAsset}
          name="Type Of Asset"
          setValue={(value) => setFormData({ ...formData, typeOfAsset: value })}
        />
        <DropDown
          id="purpose-of-valuation"
          items={purposeOfValuation}
          name="Purpose Of Valuation"
          setValue={(value) =>
            setFormData({ ...formData, purposeOfValuation: value })
          }
        />
        <TextFieldComp
          id="contact-no"
          name="Contact No"
          isMultilined={false}
          setValue={(value) => setFormData({ ...formData, contactNo: value })}
        />
        <Divider textAlign="left">Address</Divider>
        <TextFieldComp
          id="address"
          name="Address"
          isMultilined={false}
          setValue={(value) => setFormData({ ...formData, address: value })}
        />
        <TextFieldComp
          id="latitude"
          name="Latitude"
          isMultilined={false}
          setValue={(value) => setFormData({ ...formData, latitude: value })}
        />
        <TextFieldComp
          id="longitude"
          name="Longitude"
          isMultilined={false}
          setValue={(value) => setFormData({ ...formData, longitude: value })}
        />
        <Divider textAlign="left">Additional Information</Divider>
        <DropDown
          id="job-branch"
          items={jobBranch}
          name="Job Branch"
          setValue={(value) => setFormData({ ...formData, jobBranch: value })}
        />
        <TextFieldComp
          id="instructions"
          name="Additional Information For Valuers"
          isMultilined={true}
          setValue={(value) =>
            setFormData({ ...formData, instructions: value })
          }
        />
      </div>
    </Box>
  );
}

export default CreateCase;
