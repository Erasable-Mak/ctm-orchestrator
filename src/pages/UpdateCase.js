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
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import GetCaseAndUpdate from "./GetCaseAndUpdate";

export default function SingleUserInfo() {
  const [data, setData] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);

  //when flag is true it will render list of users and on false it will render selected user's data
  const [flag, setFlag] = useState(true);

  const gotoGetDataAndUpdataPage = (uid) => {
    console.log("gotoGetDataAndUpdataPage called" + uid);
    setSelectedCase(uid);
    setFlag(false);
  };
  
  const displayValue = (name, value) => {
    const values = [];

    if (name === "Borrower Names") {
      value.map((ele) => values.push(`${ele.title} ${ele.fullName}`));
    } else if (name === "Contact No") {
      value.map((ele) => values.push(ele));
    }

    return values.join("/");
  };
  useEffect(() => {
    setData([]);
    try {
      const getdata = async () => {
        const q = query(collection(db, "Cases"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setData((prev) => [...prev, { ...doc.data(), uid: doc.id }]);
        });
      };

      getdata();
    } catch (err) {
      console.log(err);
    }
  }, []);

    return (
    
    <div>
    {/* {console.log(data)} */}
      {flag && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Bank Name</TableCell>
                <TableCell align="left">Borrow Details</TableCell>
                <TableCell align="left">Contact</TableCell>
                <TableCell align="left">Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.bankName}
                  </TableCell>
                  <TableCell align="left">
                  {displayValue("Borrower Names", row.borrowerNames)}
                    <br />
                    {console.log(row)}
                    {displayValue("Contact No", row.contactNo)}
                  </TableCell>
                  <TableCell align="left">{row.phoneNo}</TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      onClick={() => gotoGetDataAndUpdataPage(row.uid)}
                    >
                      Update
                    </Button>
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
      )}
      {!flag && <GetCaseAndUpdate uid={selectedCase} setFlag={setFlag} />}
    </div>
  );
}
