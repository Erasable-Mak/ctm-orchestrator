import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, query, getDocs } from "firebase/firestore";

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
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function SingleUserInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const getdata = async () => {
        const q = query(collection(db, "Users"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

          setData((prev) => [...prev, doc.data()]);
        });
      };

      getdata();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone no</TableCell>
            <TableCell align="left">Type Of user</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phoneNo}</TableCell>
              <TableCell align="left">{row.typeOfUser}</TableCell>
              <TableCell align="left">
                <Button variant="contained">Update</Button>
              </TableCell>
              <TableCell align="left">
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
