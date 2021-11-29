import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, query, getDocs } from "firebase/firestore";
// import 'app.css'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function TechInitiation() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Institution Name</TableCell>
            <TableCell align="left">Borrower Name</TableCell>
            <TableCell align="left">Prop. Location</TableCell>
            <TableCell align="left">Engineer Name</TableCell>
            <TableCell align="left">Date of Visit</TableCell>
            <TableCell align="left">Case Remarks</TableCell>
            <TableCell align="left">Case Status</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
          <TableBody></TableBody>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default TechInitiation;
