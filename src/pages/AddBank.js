import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Divider, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";
import EmployeeInfoForm from "../components/EmployeeInfoForm";
import { db } from "../firebase-config";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";

const instituteType = [
  {
    id: "NBNR",
    value: "NBNR",
  },
  {
    id: "CF",
    value: "CF",
  },
  {
    id: "APF",
    value: "APF",
  },
];

const initialState = {
  instituteType: "",
  bankName: "",
  bankBranchName: "",
  branchType: "",
  bankaddress: "",

  bankemail: "",

  employeeInfo: [],
};

function AddBank() {
  const [formData, setFormData] = useState(initialState);
  const [reload, setReload] = useState(false);

  const handleSubmit = async () => {
    try {
      if (formData.instituteType === "") {
        throw new Error("Please select institute type");
      }
      if (formData.bankName === "") {
        throw new Error("Please select bank name");
      }
      if (formData.bankBranchName === "") {
        throw new Error("Please select bank branch name");
      }
      if (formData.branchType === "") {
        throw new Error("Please select branch type");
      }
      if (formData.bankaddress === "") {
        throw new Error("Please select bank address");
      }

      if (!formData.bankemail) {
        throw new Error("Please select bank email");
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.bankemail)
      ) {
        throw new Error("Invalid email address");
      }

      await addDoc(collection(db, "Banks"), formData);
      toast.success("New Bank Data added successfully", { autoClose: 5000 });
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
          id="institute-typr"
          items={instituteType}
          value={formData.instituteType}
          name="Institute Type"
          setValue={(value) =>
            setFormData({ ...formData, instituteType: value })
          }
        />
        <TextFieldComp
          id="bank-name"
          name="Bank Name"
          value={formData.bankName}
          isMultilined={false}
          setValue={(value) => setFormData({ ...formData, bankName: value })}
        />
        <TextFieldComp
          id="bank-branch-name"
          name="Branch Name"
          value={formData.bankBranchName}
          isMultilined={false}
          setValue={(value) =>
            setFormData({ ...formData, bankBranchName: value })
          }
        />
        <TextFieldComp
          id="branch-type"
          name="Branch Type"
          value={formData.branchType}
          isMultilined={false}
          setValue={(value) => setFormData({ ...formData, branchType: value })}
        />
        <TextFieldComp
          id="bank-address"
          name="Bank Address"
          value={formData.bankaddress}
          isMultilined={false}
          setValue={(value) => setFormData({ ...formData, bankaddress: value })}
        />
        <TextFieldComp
          id="bank-email"
          name="Bank Email"
          value={formData.bankemail}
          isMultilined={false}
          setValue={(value) => setFormData({ ...formData, bankemail: value })}
        />
        <Divider textAlign="left">Employee Information</Divider>
        <EmployeeInfoForm
          fields={formData.employeeInfo}
          setFields={(value) =>
            setFormData({ ...formData, employeeInfo: value })
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

export default AddBank;
