import EditIcon from "@mui/icons-material/Edit";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  doc,
  collection,
  getDocs,
  query,
  addDoc,
  DocumentReference,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import DatePicker from "../components/DatePicker";
import DropDown from "../components/DropDown";
import { valuerOptions } from "../DropDownOptions/options";
import { db } from "../firebase-config";
import { toast } from "react-toastify";

export default function AssignTask() {
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
        const q = query(collection(db, "Cases"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id);
          setData((prev) => [
            ...prev,
            {
              ...doc.data(),
              caseId: doc.id,
              valuer: "",
              dateOfOutward: new Date(),
            },
          ]);
        });
      };

      getdata();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = async (idx) => {
    try {
      // setData({ ...data, valuer: "YuwMRMFVinSaRsonWJmOwcDV89q2" });
      const finalData = {
        caseId: doc(db, "Cases", data[idx].caseId),
        valuer: doc(db, "Users", "YuwMRMFVinSaRsonWJmOwcDV89q2"),
        dateOfOutward: data[idx].dateOfOutward,
      };
      await addDoc(collection(db, "assigned_cases"), finalData);
      toast.success("New Case assigned successfully", { autoClose: 5000 });
      // clearForm();
    } catch (error) {
      toast.error(`${error}`, {
        autoClose: 5000,
      });
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client details</TableCell>
            <TableCell>Borrow details</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Date of Inspection</TableCell>
            <TableCell>Date of Outward</TableCell>
            <TableCell align="left">Valuer</TableCell>
            <TableCell align="left">Instruction</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              key={`row-${idx}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row"></TableCell> */}
              <TableCell align="left">{row.bankName}</TableCell>
              <TableCell align="left">
                {/* <Typography variant="bold">Names</Typography> */}
                {displayValue("Borrower Names", row.borrowerNames)}
                <br />
                {/* <Typography variant="bold">Contact No.</Typography> */}
                {displayValue("Contact No", row.contactNo)}
              </TableCell>
              <TableCell align="left">{row.bankBranchName}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">
                {new Date(
                  row.dateOfInspection.seconds * 1000 +
                    row.dateOfInspection.nanoseconds / 1000000
                )
                  .toISOString()
                  .slice(0, 10)}
              </TableCell>
              <TableCell align="left">
                <DatePicker
                  id={`${idx}-date-of-outward`}
                  name="Date of Outward"
                  value={row.dateOfOutward}
                  setValue={(value, i = idx) => {
                    const values = [...data];
                    values[i].dateOfOutward = value;
                    setData(values);
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <DropDown
                  id={`${idx}-valuer-options`}
                  items={valuerOptions}
                  value={row.valuer}
                  name="Valuer Options"
                  setValue={(value, i = idx) => {
                    const values = [...data];
                    values[i].valuer = value;
                    setData(values);
                  }}
                />
              </TableCell>

              <TableCell align="left">{row.instructions}</TableCell>

              <TableCell align="left">
                <IconButton
                  aria-label="edit"
                  size="large"
                  onClick={() => {
                    handleSubmit(idx);
                  }}
                >
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
