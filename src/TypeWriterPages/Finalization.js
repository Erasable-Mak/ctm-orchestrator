/* eslint-disable react/jsx-no-duplicate-props */
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Stack, TextField } from "@mui/material";
import Divider from '@mui/material/Divider'
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ClickableTextFieldComp from "../components/ClickableTextFieldComp";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";
import { db } from "../firebase-config";
import DatePicker from "../components/DatePicker";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
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

function Finalization() {
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
    <><> 
      {/*First box*/}
      <Box noValidate sx={{ mt: 1 }}>
        <div>
          <Divider textAlign="left">Details of  Property</Divider><br/>
          <DropDown
            id=""
            width={50}
            items={bankEmployeeNames}
            value={formData.bankEmployeeName}
            name="Calculation Type"
            setValue={(value) => setFormData({ ...formData, bankEmployeeName: value })} />
            <TextFieldComp
            id=""
            width={50}
            name="Net Mortgage Value (Rs)"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
        <TextFieldComp
            id=""
            width={50}
            name="Net Mortgage Value (In Words)"
            value={formData.nmv}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, nmv: value })} />
        <TextFieldComp
            id=""
            width={50}
            name="Realisable Value (Rs)"
            value={formData.rv}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, rv: value })} />
         <TextFieldComp
            id=""
            width={50}
            name="Realisable Value (In Words)"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
        <TextFieldComp
            id=""
            width={50}
            name="Rental Per Month"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
            <TextFieldComp
            id=""
            width={50}
            name="Govt. Ready Reckoner Rate"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
            <TextFieldComp
            id=""
            width={50}
            name="Insurable Value"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
            <TextFieldComp
            id=""
            width={50}
            name="Distress Value"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
        </div>
      </Box><br />
     

      {/*Second box*/}
      <Box noValidate sx={{ mt: 1 }}>
        <div>
          <Divider textAlign="left">Recommendations</Divider><br/>
          <TextFieldComp
            id=""
            width={50}
            name="% Stage of Construction"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
            <TextFieldComp
            id=""
            width={50}
            name="Recommendation Stage"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
        </div>
      </Box><br/></><Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          style={{ margin: "20px" }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Stack></>
  );
}

export default Finalization;
