import React, { useState } from "react";

import { storage, db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Box from "@mui/material/Box";
import { Divider, Input, Button, Stack, Grid, Typography } from "@mui/material";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinearProgressWithLabel from "../components/LinearProgressWithLabel";

const initialState = {
  aadhar: "",
  panCard: "",
  nationality: "",
  addressProof: "",
  resume: "",
};

export default function UploadDocuments({
  formData,
  setFormData,
  handleReset,
  uid,
}) {
  const [docs, setDocs] = useState(initialState);

  const [uploadPercent, setUploadPercent] = useState({
    aadhar: 0,
    panCard: 0,
    nationality: 0,
    addressProof: 0,
    resume: 0,
  });

  const uploadDoc = async (typeOfDoc) => {
    const storageRef = ref(storage, `userDocuments/${uid}/${typeOfDoc}`);

    // if file is not choosen return
    if (docs[typeOfDoc] === "") {
      toast.error("You have not choosen file!", {
        autoClose: 5000,
      });
      return;
    }

    const uploadTask = uploadBytesResumable(storageRef, docs[typeOfDoc]);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        switch (typeOfDoc) {
          case "aadhar": {
            setUploadPercent((prev) => ({ ...prev, aadhar: progress }));
            break;
          }
          case "panCard": {
            setUploadPercent((prev) => ({
              ...prev,
              panCard: progress,
            }));
            break;
          }
          case "nationality": {
            setUploadPercent((prev) => ({
              ...prev,
              nationality: progress,
            }));
            break;
          }
          case "addressProof": {
            setUploadPercent((prev) => ({
              ...prev,
              addressProof: progress,
            }));
            break;
          }
          case "resume": {
            setUploadPercent((prev) => ({
              ...prev,
              resume: progress,
            }));
            break;
          }
          default: {
            break;
          }
        }
        // switch (snapshot.state) {
        //   case "paused":
        //     console.log("Upload is paused");
        //     break;
        //   case "running":
        //     console.log("Upload is running");
        //     break;
        // }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          const documentRef = doc(
            db,
            "Users",
            uid,
            "Documents Links",
            "doc_links"
          );
          switch (typeOfDoc) {
            case "aadhar": {
              await updateDoc(documentRef, {
                aadhar: downloadURL,
              });
              break;
            }
            case "panCard": {
              await updateDoc(documentRef, {
                panCard: downloadURL,
              });
              break;
            }
            case "nationality": {
              await updateDoc(documentRef, {
                nationality: downloadURL,
              });
              break;
            }
            case "addressProof": {
              await updateDoc(documentRef, {
                addressProof: downloadURL,
              });
              break;
            }
            case "resume": {
              await updateDoc(documentRef, {
                resume: downloadURL,
              });
              break;
            }
            default: {
              break;
            }
          }
        });
      }
    );
  };

  return (
    <Box>
      {/* upload documents */}
      <Divider style={{ margin: "5px" }} textAlign="left">
        Upload documents
      </Divider>

      <Box style={{ marginBottom: "10px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={4}>
            <Typography marginLeft="20px">Aadhar Card</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Input
              accept="image/*"
              type="file"
              onChange={(e) => setDocs({ ...docs, aadhar: e.target.files[0] })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              component="span"
              disabled={
                uploadPercent.aadhar === 0 || uploadPercent.aadhar === 100
                  ? false
                  : true
              }
              onClick={() => {
                uploadDoc("aadhar");
              }}
            >
              Upload
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            {uploadPercent.aadhar !== 0 && (
              <LinearProgressWithLabel value={uploadPercent.aadhar} />
            )}
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Box style={{ marginBottom: "10px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={4}>
            <Typography marginLeft="20px">Pan Card</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Input
              accept="image/*"
              type="file"
              onChange={(e) => setDocs({ ...docs, panCard: e.target.files[0] })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              component="span"
              disabled={
                uploadPercent.panCard === 0 || uploadPercent.panCard === 100
                  ? false
                  : true
              }
              onClick={() => {
                uploadDoc("panCard");
              }}
            >
              Upload
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            {uploadPercent.panCard !== 0 && (
              <LinearProgressWithLabel value={uploadPercent.panCard} />
            )}
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Box style={{ marginBottom: "10px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={4}>
            <Typography marginLeft="20px">Nationality/Domicile</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Input
              accept="image/*"
              type="file"
              onChange={(e) =>
                setDocs({ ...docs, nationality: e.target.files[0] })
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              component="span"
              disabled={
                uploadPercent.nationality === 0 ||
                uploadPercent.nationality === 100
                  ? false
                  : true
              }
              onClick={() => {
                uploadDoc("nationality");
              }}
            >
              Upload
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            {uploadPercent.nationality !== 0 && (
              <LinearProgressWithLabel value={uploadPercent.nationality} />
            )}
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Box style={{ marginBottom: "10px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={4}>
            <Typography marginLeft="20px">Address proof</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Input
              accept="image/*"
              type="file"
              onChange={(e) =>
                setDocs({ ...docs, addressProof: e.target.files[0] })
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              component="span"
              disabled={
                uploadPercent.addressProof === 0 ||
                uploadPercent.addressProof === 100
                  ? false
                  : true
              }
              onClick={() => {
                uploadDoc("addressProof");
              }}
            >
              Upload
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            {uploadPercent.addressProof !== 0 && (
              <LinearProgressWithLabel value={uploadPercent.addressProof} />
            )}
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Box style={{ marginBottom: "10px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={4}>
            <Typography marginLeft="20px">Resume or bio-data</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Input
              accept="image/*"
              type="file"
              onChange={(e) => setDocs({ ...docs, resume: e.target.files[0] })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              component="span"
              disabled={
                uploadPercent.resume === 0 || uploadPercent.resume === 100
                  ? false
                  : true
              }
              onClick={() => {
                uploadDoc("resume");
              }}
            >
              Upload
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            {uploadPercent.resume !== 0 && (
              <LinearProgressWithLabel value={uploadPercent.resume} />
            )}
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          style={{ margin: "20px" }}
        >
          <Button variant="contained" color="success" onClick={handleReset}>
            Finish
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
