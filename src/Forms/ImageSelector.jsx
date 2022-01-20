import React, { useState, useEffect } from "react";

import { storage } from "../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
];

const ImageSelector = ({ data, setData, SelectedCaseDetails }) => {
  //for opening and closing the dialog
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
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

  //finish this thing when images are there in firebase storage
  // useEffect(() => {
  //   try {
  //     console.log(SelectedCaseDetails.InitialCaseDetails.caseId);

  //     getDownloadURL(
  //       ref(
  //         storage,
  //         `${SelectedCaseDetails.InitialCaseDetails.caseId}/nandi.jpg`
  //       )
  //     )
  //       .then((url) => {
  //         console.log(url);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <div>
      {/* for satellite image 1 */}
      <div>
        <Button variant="contained" onClick={() => setOpen1(true)}>
          Select satellite image 1
        </Button>
        <Dialog open={open1} onClose={() => setOpen1(true)} width={500}>
          <DialogTitle>Select Satellite image 1</DialogTitle>
          <DialogContent>
            <Box maxWidth={700}>
              <ImageList cols={3} rowHeight={200}>
                {itemData.map((item, index) => (
                  <ImageListItem
                    key={item.img}
                    onClick={() => {
                      setSelectedImages({
                        ...selectedImages,
                        satImg1: { imgSrc: item.img, title: item.title },
                      });
                    }}
                  >
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setOpen1(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <br></br>
        <br></br>
        <img
          key="satImg1"
          height={400}
          widht="auto"
          src={selectedImages.satImg1.imgSrc}
          alt={selectedImages.satImg1.title}
        />
        <br></br>
        <br></br>
      </div>
      {/* for satellite image 2 */}
      <div>
        <Button variant="contained" onClick={() => setOpen2(true)}>
          Select satellite image 2
        </Button>
        <Dialog open={open2} onClose={() => setOpen2(true)} width={500}>
          <DialogTitle>Select Satellite image 2</DialogTitle>
          <DialogContent>
            <Box maxWidth={700}>
              <ImageList cols={3} rowHeight={200}>
                {itemData.map((item, index) => (
                  <ImageListItem
                    key={item.img}
                    onClick={() => {
                      setSelectedImages({
                        ...selectedImages,
                        satImg2: { imgSrc: item.img, title: item.title },
                      });
                    }}
                  >
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setOpen2(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <br></br>
        <br></br>
        <img
          key="satImg1"
          height={400}
          widht="auto"
          src={selectedImages.satImg2.imgSrc}
          alt={selectedImages.satImg2.title}
        />
        <br></br>
        <br></br>
      </div>
      {/* for image from Rating website */}
      <div>
        <Button variant="contained" onClick={() => setOpen3(true)}>
          Screen shot from website
        </Button>
        <Dialog open={open3} onClose={() => setOpen3(true)} width={500}>
          <DialogTitle>Screen shot from website</DialogTitle>
          <DialogContent>
            <Box maxWidth={700}>
              <ImageList cols={3} rowHeight={200}>
                {itemData.map((item, index) => (
                  <ImageListItem
                    key={item.img}
                    onClick={() => {
                      setSelectedImages({
                        ...selectedImages,
                        webSiteSS: { imgSrc: item.img, title: item.title },
                      });
                    }}
                  >
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setOpen3(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <br></br>
        <br></br>
        <img
          key="satImg1"
          height={400}
          widht="auto"
          src={selectedImages.webSiteSS.imgSrc}
          alt={selectedImages.webSiteSS.title}
        />
        <br></br>
        <br></br>
      </div>
      {/* for images of property */}
      <div>
        <Button variant="contained" onClick={() => setOpen4(true)}>
          Select property images
        </Button>
        <Dialog open={open4} onClose={() => setOpen4(true)} width={500}>
          <DialogTitle>Select property images</DialogTitle>
          <DialogContent>
            <Box maxWidth={700}>
              <ImageList cols={3} rowHeight={200}>
                {itemData.map((item, index) => (
                  <ImageListItem
                    key={item.img}
                    onClick={() => {
                      let newImages = [...PropertyImages];
                      let flag = false;

                      for (let i = 0; i < newImages.length; i++) {
                        //if image already present, set flag
                        if (
                          newImages[i].imgSrc === item.img &&
                          newImages[i].title === item.title
                        ) {
                          flag = true;
                          return;
                        }
                      }

                      if (!flag) {
                        newImages.push({ imgSrc: item.img, title: item.title });
                      }
                      setPropertyImages(newImages);
                      console.log(PropertyImages);
                    }}
                  >
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setOpen4(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <br></br>
        <br></br>
        {PropertyImages.map((item, index) => (
          <img
            key={item.index}
            height={400}
            src={`${item.imgSrc}`}
            srcSet={`${item.imgSrc}`}
            alt={item.title}
            loading="lazy"
          />
        ))}
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default ImageSelector;
