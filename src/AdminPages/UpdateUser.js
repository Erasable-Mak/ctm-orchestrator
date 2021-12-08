import React, { useEffect, useState } from "react";
import { db, functions } from "../firebase-config";
import { collection, query, getDocs } from "firebase/firestore";
import { httpsCallable } from "@firebase/functions";
import CircularStatic  from "../components/Loader";

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

import DeleteIcon from "@mui/icons-material/Delete";
import GetUserAndUpdate from "./GetUserAndUpdate";

export default function SingleUserInfo() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  //when flag is true it will render list of users and on false it will render selected user's data
  const [flag, setFlag] = useState(true);

  const gotoGetDataAndUpdataPage = (uid) => {
    console.log("gotoGetDataAndUpdataPage called" + uid);
    setSelectedUser(uid);
    setFlag(false);
  };

  const deleteFunction = (uid) => {
    const userDeleteFunction = httpsCallable(functions, "userDeleteFunction");
    userDeleteFunction({ uid: uid })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("hi" + error);
      });
  };

  useEffect(() => {
    setData([]);
    try {
      const getdata = async () => {
        const q = query(collection(db, "Users"));

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
    <>
    < CircularStatic ></CircularStatic>
    <div>
      {flag && (
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
                  <TableCell align="left">
                    <List>
                      {row.contactNo.map((phoneno, index) => {
                        return (
                          <ListItem style={{ padding: "0px" }} key={index}>
                            <ListItemText primary={phoneno} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </TableCell>

                  <TableCell align="left">{row.typeOfUser}</TableCell>
                  <TableCell align="left" style={{ padding: "0px" }}>
                    <Button
                      variant="contained"
                      onClick={() => gotoGetDataAndUpdataPage(row.uid)}
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell align="left" style={{ padding: "0px" }}>
                    <IconButton
                      aria-label="delete"
                      size="large"
                      onClick={() => {
                        deleteFunction(row.uid);
                      }}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {!flag && <GetUserAndUpdate uid={selectedUser} setFlag={setFlag} />}
    </div>
    </>
  );
}
