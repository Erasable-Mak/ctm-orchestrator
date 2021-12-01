/* eslint-disable react/jsx-no-duplicate-props */
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Stack, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ClickableTextFieldComp from "../components/ClickableTextFieldComp";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";
import { db } from "../firebase-config";
import DatePicker from "../components/DatePicker";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const typeOfAsset = [...bankEmployeeNames];
const purposeOfValuation = [...bankEmployeeNames];
const jobBranch = [...bankEmployeeNames];

const initialState = {
  physicalStatus: "",
};

function PhysicalInspectionII() {
  const [formData, setFormData] = useState(initialState);
  const [reload, setReload] = useState(false);

  const handleSubmit = async () => {};

  const clearForm = () => {
    setFormData(initialState);
    setReload(true);
  };

  return (
    <>
      <>
        {/*First box*/}
        <Box noValidate sx={{ mt: 1 }}>
          <div>
            <Divider textAlign="left">Details of Property</Divider>
            <br />
            <DropDown
              id=""
              width={50}
              items={bankNames}
              value={formData.physicalStatus}
              name="Physical Status of Project"
              setValue={(value) =>
                setFormData({ ...formData, bankName: value })
              }
            />
            <TextFieldComp
              id=""
              width={50}
              name="% Stage of Construction"
              value={formData.address}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
            <DropDown
              id=""
              width={50}
              items={bankEmployeeNames}
              value={formData.bankEmployeeName}
              name="Type property As Per Approvals"
              setValue={(value) =>
                setFormData({ ...formData, bankEmployeeName: value })
              }
            />
            <DropDown
              id=""
              width={50}
              items={bankEmployeeNames}
              value={formData.bankEmployeeName}
              name="Property Usage as per site obervation"
              setValue={(value) =>
                setFormData({ ...formData, bankEmployeeName: value })
              }
            />
            <DropDown
              id=""
              width={50}
              items={bankEmployeeNames}
              value={formData.bankEmployeeName}
              name="Select Construction as Per Plan"
              setValue={(value) =>
                setFormData({ ...formData, bankEmployeeName: value })
              }
            />
            <TextFieldComp
              id=""
              width={50}
              name="Violation Observed"
              value={formData.address}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
            <DropDown
              id=""
              width={50}
              items={bankBranchNames}
              value={formData.bankBranchName}
              name="Details of Commercial Usage"
              setValue={(value) =>
                setFormData({ ...formData, bankBranchName: value })
              }
            />
            <TextFieldComp
              id=""
              width={50}
              name="Floor No in case of independent Unit"
              value={formData.address}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
            <TextFieldComp
              id=""
              width={50}
              name="No of units per Floor & position of Units"
              value={formData.address}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
            <DropDown
              id=""
              width={50}
              items={bankEmployeeNames}
              value={formData.bankEmployeeName}
              name="Remarks on view from property"
              setValue={(value) =>
                setFormData({ ...formData, bankEmployeeName: value })
              }
            />
            <TextFieldComp
              id=""
              width={50}
              name="Accommodation of Unit"
              value={formData.address}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
            <TextFieldComp
              id=""
              width={50}
              name="Amenities Available in Society"
              value={formData.address}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
            <TextFieldComp
              id=""
              width={50}
              name="Construction Type"
              value={formData.address}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
            <TextFieldComp
              id=""
              width={50}
              name="No of Storeys"
              value={formData.address}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
            <DropDown
              id=""
              width={50}
              items={bankEmployeeNames}
              value={formData.bankEmployeeName}
              name="No of Lifts"
              setValue={(value) =>
                setFormData({ ...formData, bankEmployeeName: value })
              }
            />
            <DropDown
              id="s"
              width={50}
              items={bankEmployeeNames}
              value={formData.bankEmployeeName}
              name="Exterior"
              setValue={(value) =>
                setFormData({ ...formData, bankEmployeeName: value })
              }
            />
            <DropDown
              id=""
              width={50}
              items={bankEmployeeNames}
              value={formData.bankEmployeeName}
              name="Interior"
              setValue={(value) =>
                setFormData({ ...formData, bankEmployeeName: value })
              }
            />
            <TextFieldComp
              id=""
              width={50}
              name="Flooring"
              value={formData.address}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
            <DropDown
              id=""
              width={50}
              items={bankEmployeeNames}
              value={formData.bankEmployeeName}
              name="Fittings"
              setValue={(value) =>
                setFormData({ ...formData, bankEmployeeName: value })
              }
            />
            <DropDown
              id=""
              width={50}
              items={bankEmployeeNames}
              value={formData.bankEmployeeName}
              name="Door"
              setValue={(value) =>
                setFormData({ ...formData, bankEmployeeName: value })
              }
            />
            <DropDown
              id=""
              width={50}
              items={bankEmployeeNames}
              value={formData.bankEmployeeName}
              name="Window"
              setValue={(value) =>
                setFormData({ ...formData, bankEmployeeName: value })
              }
            />
            <DropDown
              id=""
              width={50}
              items={bankEmployeeNames}
              value={formData.bankEmployeeName}
              name="Maintenance Level of Society Project"
              setValue={(value) =>
                setFormData({ ...formData, bankEmployeeName: value })
              }
            />
            <TextFieldComp
              id=""
              width={50}
              name="Property Age"
              value={formData.address}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
            <TextFieldComp
              id=""
              width={50}
              name="Residual Age"
              value={formData.address}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
          </div>
        </Box>
        <br />

        {/*Second box*/}
        <Box noValidate sx={{ mt: 1 }}>
          <div>
            <Divider textAlign="left">Validation Observations</Divider>
            <br />
            <TextField
              id=""
              width={50}
              label="Engineer's Remark"
              multiline
              value={formData.example}
              rows={4}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
          </div>
        </Box>
        <br />
      </>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        style={{ margin: "20px" }}
      >
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update
        </Button>
      </Stack>
    </>
  );
}

export default PhysicalInspectionII;
