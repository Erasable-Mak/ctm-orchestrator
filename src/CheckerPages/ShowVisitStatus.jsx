import React, { useEffect, useState } from "react";
import {
  doc,
  collection,
  getDocs,
  query,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { useAuth } from "../contexts/AuthContext";

import { db } from "../firebase-config";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

const ShowVisitStatus = ({ setVisitVariables, setSelectedCaseDetails }) => {
  //data state stores all rows in table
  const [data, setData] = useState([]);
  const { currentUser, logout } = useAuth();

  //just to display names in array properly on table
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
        //getting all assigned cases
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

  //assigning the case to the current user
  const AssignCaseToSelf = async (row) => {
    await updateDoc(doc(db, "Cases", row.caseId), {
      caseStatus: "Assigned to Checker",
      checkerId: currentUser.uid,
    });
  };

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
            <TableCell align="left">Assign to self</TableCell>
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
              <TableCell align="left">
                {/* if checking remaining, show button to go to report */}
                {row.caseStatus === "Checking remaining" ? (
                  <Button
                    variant="contained"
                    onClick={() => {
                      setSelectedCaseDetails(row);
                      //first assign case to self
                      AssignCaseToSelf(row);
                      setVisitVariables((VisitVariables) => ({
                        ...VisitVariables,
                        tableOn: false,
                      }));
                    }}
                  >
                    Check Report
                  </Button>
                ) : (
                  ""
                )}
                {/* user can see button for his/her assigned cases */}
                {row.checkerId === currentUser.uid &&
                row.caseStatus === "Assigned to TypeWriter" ? (
                  <Button
                    variant="contained"
                    onClick={() => {
                      setSelectedCaseDetails(row);
                      setVisitVariables((VisitVariables) => ({
                        ...VisitVariables,
                        tableOn: false,
                      }));
                    }}
                  >
                    Fill Report
                  </Button>
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShowVisitStatus;
