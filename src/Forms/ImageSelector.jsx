import React, { useState, useEffect } from "react";

import { storage } from "../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";

import {
  Divider,
  Input,
  Button,
  Stack,
  Grid,
  Typography,
  Box,
} from "@mui/material";

import LinearProgressWithLabel from "../components/LinearProgressWithLabel";

const ImageSelector = ({ data, setData, SelectedCaseDetails }) => {
  //for satellite image 1,2 and screenshot of website
  const [selectedImages, setSelectedImages] = useState({
    satImg1: {
      imgSrc: "",
      title: "",
    },
    satImg2: {
      imgSrc: "",
      title: "",
    },
    webSiteSS: {
      imgSrc: "",
      title: "",
    },
  });

  const [PropertyImages, setPropertyImages] = useState([]);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setPropertyImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    const promise = [];
    PropertyImages.map((image) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      promise.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          // setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((urls) => {
              // setUrls((prevState) => [...prevState, urls]);
            });
        }
      );
    });
    Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Box style={{ marginBottom: "10px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={4}>
            <Typography marginLeft="20px">Property Images</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <input
              type="file"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              component="span"
              // disabled={
              //   uploadPercent.aadhar === 0 || uploadPercent.aadhar === 100
              //     ? false
              //     : true
              // }
              onClick={handleUpload}
            >
              Upload
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            {/* {uploadPercent.aadhar !== 0 && (
              <LinearProgressWithLabel value={uploadPercent.aadhar} />
            )} */}
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};

export default ImageSelector;
