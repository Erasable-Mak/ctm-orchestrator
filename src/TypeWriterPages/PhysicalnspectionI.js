/* eslint-disable no-unused-vars */
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
    createData('East', 159, 6.0, 24, 4.0),
    createData('West', 237, 9.0, 37, 4.3),
    createData('North', 262, 16.0, 24, 6.0),
    createData('South', 305, 3.7, 67, 4.3),
    createData('NorthEast', 452, 25.0, 51, 4.9),
    createData('NorthWest', 356, 16.0, 49, 3.9),
    createData('SouthEast', 356, 16.0, 49, 3.9),
    createData('SouthEast', 356, 16.0, 49, 3.9),
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

function PhysicalInspectionI() {
  const [formData, setFormData] = useState(initialState);
  const [reload, setReload] = useState(false);

  const handleSubmit = async () => {

  };



  const clearForm = () => {
    setFormData(initialState);
    setReload(true);
  };

  useEffect(() => {}, [reload]);

  return (
    <><><> 
      {/*First box*/}
      <Box noValidate sx={{ mt: 1 }}>
          <Divider textAlign="left">Legal Documents Details</Divider><br/>
          <DropDown
            id=""
            width={50}
            items={bankNames}
            value={formData.bankName}
            name="Zone as per City Master Plan (DP)"
            setValue={(value) => setFormData({ ...formData, bankName: value })} />
          <DropDown
            id=""
            width={50}
            items={bankBranchNames}
            value={formData.bankBranchName}
            name="Infrastructure of the surrounding area"
            setValue={(value) => setFormData({ ...formData, bankBranchName: value })} />
          <DropDown
            id=""
            width={50}
            items={bankEmployeeNames}
            value={formData.bankEmployeeName}
            name="Neighbourhood Type"
            setValue={(value) => setFormData({ ...formData, bankEmployeeName: value })} />
          <DropDown
            id=""
            width={50}
            items={bankEmployeeNames}
            value={formData.bankEmployeeName}
            name="Locally Connective from BBD"
            setValue={(value) => setFormData({ ...formData, bankEmployeeName: value })} /><br />
          <DropDown
            id=""
            width={50}
            items={bankEmployeeNames}
            value={formData.bankEmployeeName}
            name="Proximity to Amenities e.g. School, Mail, etc."
            setValue={(value) => setFormData({ ...formData, bankEmployeeName: value })} />
          <DropDown
            id=""
            width={50}
            items={bankEmployeeNames}
            value={formData.bankEmployeeName}
            name="Marketability / Ease of Saleability"
            setValue={(value) => setFormData({ ...formData, bankEmployeeName: value })} />
          <TextFieldComp
            id=""
            width={50}
            name="Name of Newest Hospital"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
          <TextFieldComp
            id=""
            width={50}
            name="Condition and width of approach road"
            value={formData.latitude}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, latitude: value })} />
          <TextFieldComp
            id=""
            width={50}
            name="Name of Nearest Bus Stop"
            value={formData.longitude}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, longitude: value })} />
          <TextFieldComp
            id=""
            width={50}
            name="Distance from Bank/FI Branch"
            value={formData.loanAcNo}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, loanAcNo: value })} />
          <TextFieldComp
            id=""
            width={50}
            width={50}
            name="Distance from Landmark/Railway Station"
            value={formData.loanAcNo}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, loanAcNo: value })} />
        {/*Seacond box Table*/}
      </Box><br />
      <Box noValidate sx={{ mt: 1 }}>
        <div>
          <Divider textAlign="left">Building /Piot Boundaries & Dimension</Divider><br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
              <TableRow>
                  <TableCell rowSpan={2}>Direction</TableCell>
                  <TableCell colSpan={2} align="center">
                  Boundaries
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                  Dimension
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                  MOS
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">As per site</TableCell>
                  <TableCell align="center">As per deed</TableCell>
                  <TableCell align="center">As per site</TableCell>
                  <TableCell align="center" >As per deed</TableCell>
                  <TableCell align="center">As per site</TableCell>
                  <TableCell align="center" >As per deed</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">
                    <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                    <TableCell align="right">
                      <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                    <TableCell align="right">
                      <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                    <TableCell align="right">
                      <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                    <TableCell align="right">
                      <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                    <TableCell align="right">
                      <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer></div><br />
        <DropDown
          id="bank-names"
          items={bankNames}
          value={formData.bankName}
          name="Boundaries Matching"
          setValue={(value) => setFormData({ ...formData, bankName: value })} />
      </Box><br /></>

      {/*Thirn box*/}
      <Box noValidate sx={{ mt: 1 }}>
           
          <Divider textAlign="left">Legal Documents Details</Divider><br/>
          <TextFieldComp
            id=""
            width={50}
            name="Name of Newest Hospital"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
          <TextFieldComp
            id=""
            width={50}
            name="Name of Newest Hospital"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
          <DropDown
            id=""
            width={50}
            items={bankNames}
            value={formData.bankName}
            name="Property Occupied or Vacant"
            setValue={(value) => setFormData({ ...formData, bankName: value })} />
          <DropDown
            id=""
            width={50}
            items={bankBranchNames}
            value={formData.bankBranchName}
            name="Relationship of Occupant with Customer"
            setValue={(value) => setFormData({ ...formData, bankBranchName: value })} />
          <TextFieldComp
            id=""
            width={50}
            name="Name of Occupant"
            value={formData.address}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, address: value })} />
          <TextFieldComp
            id=""
            width={50}
            name="Occupied Since"
            value={formData.latitude}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, latitude: value })} />
          <TextFieldComp
            id=""
            width={50}
            name="Name of Reported Owner as per Site Info"
            value={formData.longitude}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, longitude: value })} />  
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

export default PhysicalInspectionI;
