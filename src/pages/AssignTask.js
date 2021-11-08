import React, { useEffect } from "react";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";
import { valuerOptions } from "../DropDownOptions/options";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function AssignTask({
  formData,
  setFormData,
  handleSubmit,
  clearForm,
  submitLoading,
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client details</TableCell>
            <TableCell>Borrow details</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Initial date</TableCell>
            <TableCell>Appointment date</TableCell>
            <TableCell align="left">Valuer</TableCell>
            <TableCell align="left">Instruction</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Client{" "}
              </TableCell>
              <TableCell align="left">borrow</TableCell>
              <TableCell align="left">branch</TableCell>
              <TableCell align="left">address</TableCell>
              <TableCell align="left">idate</TableCell>
              <TableCell align="left">adate</TableCell>
              <TableCell align="left">
                <DropDown
                  id="valuer-Options"
                  items={valuerOptions}
                  name="Valuer-Options"
                  setValue={(value) =>
                    setFormData({ ...formData, ValuerOptions: value })
                  }
                />
              </TableCell>
              <TableCell align="left">
                <TextFieldComp id="instruction" name="instruction" />
              </TableCell>

              <TableCell align="left">
                <IconButton aria-label="edit" size="large">
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
