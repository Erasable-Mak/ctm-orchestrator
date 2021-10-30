import React, { useState, useEffect } from "react";

import { storage, db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Box from "@mui/material/Box";
import { Divider, Input, Button, Stack } from "@mui/material";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const uploadDoc = async (typeOfDoc) => {
    const storageRef = ref(storage, `userDocuments/${uid}/${typeOfDoc}`);

    const uploadTask = uploadBytesResumable(storageRef, docs[typeOfDoc]);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
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
          const documentRef = doc(db, "Users", uid);
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
        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setDocs({ ...docs, aadhar: e.target.files[0] })}
        />
        <Button
          style={{ marginLeft: "20px" }}
          variant="contained"
          component="span"
          onClick={() => {
            uploadDoc("aadhar");
          }}
        >
          Aadhar card
        </Button>
      </Box>
      <Box style={{ marginBottom: "10px" }}>
        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setDocs({ ...docs, panCard: e.target.files[0] })}
        />
        <Button
          style={{ marginLeft: "20px" }}
          variant="contained"
          component="span"
          onClick={() => {
            uploadDoc("panCard");
          }}
        >
          Pan card
        </Button>
      </Box>
      <Box style={{ marginBottom: "10px" }}>
        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setDocs({ ...docs, nationality: e.target.files[0] })}
        />
        <Button
          style={{ marginLeft: "20px" }}
          variant="contained"
          component="span"
          onClick={() => {
            uploadDoc("nationality");
          }}
        >
          Nationality/Domicile
        </Button>
      </Box>
      <Box style={{ marginBottom: "10px" }}>
        <Input
          accept="image/*"
          type="file"
          onChange={(e) =>
            setDocs({ ...docs, addressProof: e.target.files[0] })
          }
        />
        <Button
          style={{ marginLeft: "20px" }}
          variant="contained"
          component="span"
          onClick={() => {
            uploadDoc("addressProof");
          }}
        >
          Address proof
        </Button>
      </Box>
      <Box style={{ marginBottom: "10px" }}>
        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setDocs({ ...docs, resume: e.target.files[0] })}
        />
        <Button
          style={{ marginLeft: "20px" }}
          variant="contained"
          component="span"
          onClick={() => {
            uploadDoc("resume");
          }}
        >
          Resume or bio-data
        </Button>
      </Box>

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
