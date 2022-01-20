import React, { useEffect, useState } from "react";
import { doc, collection, getDocs, query, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const CaseStatus = () => {
  const [data, setData] = useState([]);

  const displayValue = (name, value) => {
    const values = [];

    if (name === "Borrower Names") {
      value.map((ele) => values.push(`${ele.title} ${ele.fullName}`));
    } else if (name === "Contact No") {
      value.map((ele) => values.push(ele));
    }

    return values.join("\n");
  };

  useEffect(() => {
    setData([]);
    try {
      const getdata = async () => {
        const q = query(collection(db, "assigned_cases"));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(async (qDoc) => {
          //   let newItem = doc.data();
          let newItem = {
            dateOfOutward: null,
          };

          newItem.dateOfOutward = qDoc.data().dateOfOutward;

          const valuerSnap = await getDoc(
            doc(db, "Users", qDoc.data().valuer.id)
          );
          newItem = { ...newItem, ...valuerSnap.data() };

          const caseSnap = await getDoc(
            doc(db, "Cases", qDoc.data().caseId.id)
          );
          newItem = { ...newItem, ...caseSnap.data() };

          setData((prev) => [...prev, { ...newItem }]);
        });
      };
      getdata();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client details</TableCell>
            <TableCell>Borrow details</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell align="left" style={{ minWidth: "200px" }}>
              Address
            </TableCell>
            <TableCell align="left">Date of Inspection</TableCell>
            <TableCell>Date of Outward</TableCell>
            <TableCell align="left">Field Visit Officer</TableCell>
            <TableCell align="left">Instruction</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              key={`row-${idx}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.bankName}</TableCell>
              <TableCell align="left">
                {displayValue("Borrower Names", row.borrowerNames)}
                <br />
                {displayValue("Contact No", row.contactNo)}
              </TableCell>
              <TableCell align="left">{row.bankBranchName}</TableCell>
              <TableCell align="left" style={{ minWidth: "200px" }}>
                {row.address}
              </TableCell>
              <TableCell align="left">
                {row.dateOfInspection &&
                  new Date(
                    row.dateOfInspection.seconds * 1000 +
                      row.dateOfInspection.nanoseconds / 1000000
                  )
                    .toISOString()
                    .slice(0, 10)}
              </TableCell>
              <TableCell align="left">
                {row.dateOfOutward &&
                  new Date(
                    row.dateOfOutward.seconds * 1000 +
                      row.dateOfOutward.nanoseconds / 1000000
                  )
                    .toISOString()
                    .slice(0, 10)}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>

              <TableCell align="left">{row.instructions}</TableCell>

              <TableCell align="left">{row.caseStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CaseStatus;
