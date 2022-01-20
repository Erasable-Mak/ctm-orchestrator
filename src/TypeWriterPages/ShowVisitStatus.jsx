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
          //structure of newItem  is
          //  {
          //     InitialCaseDetails: {here comes the data filled by admin while initializing the case},
          //     FVODetails:{here comes the data of the FVOs},
          //     DataByFVO:{here comes the data by Field Visit Officer}},
          //  }
          let newItem = {
            InitialCaseDetails: {
              caseId: qDoc.data().caseId.id,
              dateOfOutward: null,
            },
            FVODetails: { FVOId: qDoc.data().valuer.id },
            DataByFVO: {},
          };

          newItem.InitialCaseDetails.dateOfOutward = qDoc.data().dateOfOutward;

          //getting field visit officer related to the case and adding it to the object
          let valuerSnap = await getDoc(
            doc(db, "Users", qDoc.data().valuer.id)
          );

          let temp2 = { ...newItem.FVODetails, ...valuerSnap.data() };

          newItem = { ...newItem, FVODetails: temp2 };

          //getting initial data of case filled by admin and adding it to the object
          let caseSnap = await getDoc(doc(db, "Cases", qDoc.data().caseId.id));
          let temp = { ...newItem.InitialCaseDetails, ...caseSnap.data() };
          newItem = {
            ...newItem,
            InitialCaseDetails: temp,
          };

          //adding modified object in table array
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
    await updateDoc(doc(db, "Cases", row.InitialCaseDetails.caseId), {
      caseStatus: "Assigned to TypeWriter",
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
              <TableCell align="left">
                {row.InitialCaseDetails.bankName}
              </TableCell>
              <TableCell align="left">
                {displayValue(
                  "Borrower Names",
                  row.InitialCaseDetails.borrowerNames
                )}
                <br />
                {displayValue("Contact No", row.InitialCaseDetails.contactNo)}
              </TableCell>
              <TableCell align="left">
                {row.InitialCaseDetails.bankBranchName}
              </TableCell>
              <TableCell align="left" style={{ minWidth: "200px" }}>
                {row.InitialCaseDetails.address}
              </TableCell>
              <TableCell align="left">
                {row.InitialCaseDetails.dateOfInspection &&
                  new Date(
                    row.InitialCaseDetails.dateOfInspection.seconds * 1000 +
                      row.InitialCaseDetails.dateOfInspection.nanoseconds /
                        1000000
                  )
                    .toISOString()
                    .slice(0, 10)}
              </TableCell>
              <TableCell align="left">
                {row.InitialCaseDetails.dateOfOutward &&
                  new Date(
                    row.InitialCaseDetails.dateOfOutward.seconds * 1000 +
                      row.InitialCaseDetails.dateOfOutward.nanoseconds / 1000000
                  )
                    .toISOString()
                    .slice(0, 10)}
              </TableCell>
              <TableCell align="left">{row.FVODetails.name}</TableCell>
              <TableCell align="left">
                {row.InitialCaseDetails.instructions}
              </TableCell>
              <TableCell align="left">
                {row.InitialCaseDetails.caseStatus}
              </TableCell>
              <TableCell align="left">
                {/* if visit is complete, typewriter can assign the case to himself and fill form */}
                {row.InitialCaseDetails.caseStatus === "Visit Complete" ? (
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
                    Fill Report
                  </Button>
                ) : (
                  ""
                )}
                {/* user can see button for his/her assigned cases */}
                {row.InitialCaseDetails.checkerId === currentUser.uid &&
                row.InitialCaseDetails.caseStatus ===
                  "Assigned to TypeWriter" ? (
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
