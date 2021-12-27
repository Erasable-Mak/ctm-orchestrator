import React, { useEffect, useState } from "react";
import {
  doc,
  collection,
  getDocs,
  query,
  addDoc,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
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
} from "@mui/material";
import DatePicker from "../components/DatePicker";
import DropDown from "../components/DropDown";
import { toast } from "react-toastify";

export default function AssignTask() {
  const [caseData, setCaseData] = useState([]);
  const [valuers, setValuers] = useState([]);
  const [valuerOptions, setValuerOptions] = useState([]);

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
    setCaseData([]);
    setValuers([]);
    setValuerOptions([]);
    try {
      const getdata = async () => {
        //getting data of all cases on page load
        const q = query(
          collection(db, "Cases"),
          where("caseStatus", "==", "Not Assigned")
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setCaseData((prev) => [
            ...prev,
            {
              ...doc.data(),
              caseId: doc.id,
              valuer: "",
              dateOfOutward: new Date(),
            },
          ]);
        });

        //getting data of all valuers/field visit officers only, on page load
        // *** here we will have to fetch address data seperately to get the address of the valuer
        const q2 = query(
          collection(db, "Users"),
          where("typeOfUser", "==", "Field Visit Officer")
        );
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
          setValuers((prev) => [...prev, { ...doc.data(), userId: doc.id }]);
          setValuerOptions((prev) => [
            ...prev,
            { id: doc.id, value: doc.data().name },
          ]);
        });
      };

      getdata();
      console.log({ valuerOptions });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = async (idx) => {
    try {
      const finalData = {
        caseId: doc(db, "Cases", caseData[idx].caseId),
        valuer: doc(db, "Users", caseData[idx].valuer),
        dateOfOutward: caseData[idx].dateOfOutward,
      };
      await addDoc(collection(db, "assigned_cases"), finalData);
      await updateDoc(doc(db, "Cases", caseData[idx].caseId), {
        caseStatus: "Assigned to Valuer",
      });

      const values = [...caseData];
      values.splice(idx, 1);
      setCaseData(values);

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
            <TableCell align="left" style={{ minWidth: "200px" }}>
              Address
            </TableCell>
            <TableCell align="left">Date of Inspection</TableCell>
            <TableCell>Date of Outward</TableCell>
            <TableCell align="left">Valuer</TableCell>
            <TableCell align="left">Instruction</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {caseData.map((row, idx) => (
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
                <DatePicker
                  id={`${idx}-date-of-outward`}
                  name="Date of Outward"
                  value={row.dateOfOutward}
                  setValue={(value, i = idx) => {
                    const values = [...caseData];
                    values[i].dateOfOutward = value;
                    setCaseData(values);
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <DropDown
                  id={`${idx}-valuer-options`}
                  items={valuerOptions}
                  value={row.valuerName}
                  name="Valuer Options"
                  setValue={(value, i = idx) => {
                    const values = [...caseData];
                    values[i].valuerName = value;
                    valuerOptions.map((option) => {
                      if (option.value === value) {
                        values[i].valuer = option.id;
                      }
                    });
                    setCaseData(values);
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
