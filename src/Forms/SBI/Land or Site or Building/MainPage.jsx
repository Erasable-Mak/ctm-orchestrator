import React, { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

import jsPDF from "jspdf";

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
  Button,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

//input forms
import General from "../General";
import CharacteristicOfSite from "../CharacteristicOfSite";
import PartAB from "./PartAB";
import SpecificationOfConstruction1 from "./SpecificationOfConstruction1";
import SpecificationOfConstruction2 from "./SpecificationOfConstruction2";
import DetailsOfValuation from "./DetailsOfValuation";
import PartC from "./PartC";
import PartD from "./PartD";
import PartE from "./PartE";
import PartF from "./PartF";
import TotalAbstractOfProperty from "./TotalAbstractOfProperty";
import ImageSelector from "../../ImageSelector";

//preview forms
import GeneralPreview from "../GeneralPreview";
import CharacteristicOfSitePreview from "../CharacteristicOfSitePreview";
import PartABPreview from "./PartABPreview";
import SpecificationOfConstruction1Preview from "./SpecificationOfConstruction1Preview";
import SpecificationOfConstruction2Preview from "./SpecificationOfConstruction2Preview";
import DetailsOfValuationPreview from "./DetailsOfValuationPreview";
import PartCPreview from "./PartCPreview";
import PartDPreview from "./PartDPreview";
import PartEPreview from "./PartEPreview";
import PartFPreview from "./PartFPreview";
import TotalAbstractOfPropertyPreview from "./TotalAbstractOfPropertyPreview";
import Undertaking from "../Undertaking";
import ParticularValuerComment from "../ParticularValuerComment";
import CodeOfConduct from "../CodeOfConduct";

let initialValue = {
  purposeOfValuation: "Banking/Financial institute",
  classificationOfArea1: "High",
  classificationOfArea2: "Urban",
  comesUnder: "Corporation limit",
  documentsProducedForPerusal: [""],
  advantageOfSite: [""],
  specialRemarks: [""],
};

const MainPage = ({ SelectedCaseDetails, setVisitVariables }) => {
  console.log(SelectedCaseDetails);
  const [data, setData] = useState(initialValue);
  const [contentName, setcontentName] = useState("General");
  const [updateLoading, setUpdateLoading] = useState(false);

  const { DataByFVO, FVODetails, InitialCaseDetails } = SelectedCaseDetails;
  console.log(SelectedCaseDetails);

  let date = InitialCaseDetails.dateOfInspection;
  let doi =
    date &&
    new Date(date.seconds * 1000 + date.nanoseconds / 1000000)
      .toISOString()
      .slice(0, 10);
  date = InitialCaseDetails.dateOfOutward;
  let doo =
    date &&
    new Date(date.seconds * 1000 + date.nanoseconds / 1000000)
      .toISOString()
      .slice(0, 10);

  initialValue = {
    ...initialValue,
    purposeOfValuation: InitialCaseDetails.purposeOfValuation,
    dateOfInspection: doi,
    dateOfValuation: doo,
    completeAddress: InitialCaseDetails.address,
    locality: InitialCaseDetails.locality,
    district: InitialCaseDetails.district,
    city: InitialCaseDetails.district,
    latLang: InitialCaseDetails.latitude + "," + InitialCaseDetails.longitude,
    north: DataByFVO.N,
    south: DataByFVO.S,
    west: DataByFVO.W,
    east: DataByFVO.E,
  };

  const changeContent = (value) => {
    setcontentName(value);
  };

  //to store data in firebase database
  const updateData = async () => {
    setUpdateLoading(true);
    try {
      await setDoc(
        doc(
          db,
          "Cases",
          `${InitialCaseDetails.caseId}`,
          "Final Case Data",
          "Final_case_data"
        ),
        data
      );
    } catch (error) {
      console.log(error);
    }
    setUpdateLoading(false);
  };

  useEffect(() => {
    try {
      //getting previously saved data
      const getData = async () => {
        const docRef = doc(
          db,
          "Cases",
          `${InitialCaseDetails.caseId}`,
          "Final Case Data",
          "Final_case_data"
        );
        const docSnap = await getDoc(docRef);
        // console.log(docSnap.data());
        if (docSnap.exists()) {
          setData(docSnap.data());
          setData((prev) => ({ ...prev, ...docSnap.data() }));
        }
      };
      getData();
    } catch (error) {
      console.log({ error });
    }
  }, []);

  //sending case to cheker for checking
  const sendToChecker = async () => {
    try {
      await updateDoc(doc(db, "Cases", InitialCaseDetails.caseId), {
        caseStatus: "Checking remaining",
      });
      //now go to all cases page
      setVisitVariables({ tableOn: true });
    } catch (err) {
      console.log(err);
    }
  };

  // const getPDF = () => {
  //   const doc = new jsPDF();
  //   doc.autoTable({ html: "#General", theme: "grid" });
  //   doc.autoTable({ html: "#my-table2", theme: "grid" });
  //   doc.autoTable({ html: "#Part-A-B", theme: "grid" });
  //   doc.autoTable({ html: "classification-of-construction-1", theme: "grid" });
  //   doc.autoTable({ html: "classification-of-construction-2", theme: "grid" });
  //   doc.autoTable({ html: "#details-of-valuation", theme: "grid" });
  //   doc.autoTable({ html: "#total", theme: "grid" });
  //   doc.autoTable({ html: "#Part-C", theme: "grid" });
  //   doc.autoTable({ html: "#Part-D", theme: "grid" });
  //   doc.autoTable({ html: "#Part-E", theme: "grid" });
  //   doc.autoTable({ html: "#Part-F", theme: "grid" });
  //   doc.autoTable({ html: "#Total-abstract", theme: "grid" });

  //   // doc.autoTable({ html: "", theme: "grid" });
  //   doc.save("table.pdf");
  // };

  return (
    <div>
      {/* contains complete report of SBI - Land or Site or Building */}
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "100%",
              }}
            >
              <ListItem
                selected={contentName === "General"}
                button
                onClick={() => {
                  changeContent("General");
                }}
              >
                <ListItemText primary="General" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Characteristic Of Site"}
                button
                onClick={() => {
                  changeContent("Characteristic Of Site");
                }}
              >
                <ListItemText primary="Characteristic Of Site" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Part AB"}
                button
                onClick={() => {
                  changeContent("Part AB");
                }}
              >
                <ListItemText primary="Part AB" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Specification Of Construction 1"}
                button
                onClick={() => {
                  changeContent("Specification Of Construction 1");
                }}
              >
                <ListItemText primary="Specification Of Construction 1" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Specification Of Construction 2"}
                button
                onClick={() => {
                  changeContent("Specification Of Construction 2");
                }}
              >
                <ListItemText primary="Specification Of Construction 2" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Details Of Valuation"}
                button
                onClick={() => {
                  changeContent("Details Of Valuation");
                }}
              >
                <ListItemText primary="Details Of Valuation" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Part C"}
                button
                onClick={() => {
                  changeContent("Part C");
                }}
              >
                <ListItemText primary="Part C" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Part D"}
                button
                onClick={() => {
                  changeContent("Part D");
                }}
              >
                <ListItemText primary="Part D" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Part E"}
                button
                onClick={() => {
                  changeContent("Part E");
                }}
              >
                <ListItemText primary="Part E" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Part F"}
                button
                onClick={() => {
                  changeContent("Part F");
                }}
              >
                <ListItemText primary="Part F" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Total Abstract Of Property"}
                button
                onClick={() => {
                  changeContent("Total Abstract Of Property");
                }}
              >
                <ListItemText primary="Total Abstract Of Property" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Image Selector"}
                button
                onClick={() => {
                  changeContent("Image Selector");
                }}
              >
                <ListItemText primary="Image Selector" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
              <ListItem
                selected={contentName === "Preview"}
                button
                onClick={() => {
                  changeContent("Preview");
                }}
              >
                <ListItemText primary="Preview" />
              </ListItem>
              <Divider orientation="horizontal" flexItem />
            </List>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box display="flex" justifyContent="center" alignItems="center">
            {contentName === "General" && (
              <General data={data} setData={setData} />
            )}
            {contentName === "Characteristic Of Site" && (
              <CharacteristicOfSite data={data} setData={setData} />
            )}
            {contentName === "Part AB" && (
              <PartAB data={data} setData={setData} />
            )}
            {contentName === "Specification Of Construction 1" && (
              <SpecificationOfConstruction1 data={data} setData={setData} />
            )}
            {contentName === "Specification Of Construction 2" && (
              <SpecificationOfConstruction2 data={data} setData={setData} />
            )}
            {contentName === "Details Of Valuation" && (
              <DetailsOfValuation data={data} setData={setData} />
            )}
            {contentName === "Part C" && (
              <PartC data={data} setData={setData} />
            )}
            {contentName === "Part D" && (
              <PartD data={data} setData={setData} />
            )}
            {contentName === "Part E" && (
              <PartE data={data} setData={setData} />
            )}
            {contentName === "Part F" && (
              <PartF data={data} setData={setData} />
            )}
            {contentName === "Total Abstract Of Property" && (
              <TotalAbstractOfProperty data={data} setData={setData} />
            )}
            {contentName === "Image Selector" && (
              <ImageSelector data={data} setData={setData} />
            )}
            {contentName === "Preview" && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  padding={5}
                >
                  <h3>
                    Once you click button below, this case will be send to
                    Checker and you will not be able to make any modifications
                    to it, unless checker sends it back.
                  </h3>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={sendToChecker}
                  >
                    Finish
                  </Button>
                </Box>
                <GeneralPreview data={data} />
                <br />
                <CharacteristicOfSitePreview data={data} />
                <br />
                <PartABPreview data={data} />
                <br />
                <SpecificationOfConstruction1Preview data={data} />
                <br />
                <SpecificationOfConstruction2Preview data={data} />
                <br />
                <DetailsOfValuationPreview data={data} />
                <br />
                <PartCPreview data={data} />
                <br />
                <PartDPreview data={data} />
                <br />
                <PartEPreview data={data} />
                <br />
                <PartFPreview data={data} />
                <br />
                <TotalAbstractOfPropertyPreview data={data} />
                <br />
                <Undertaking data={data} />
                <br />
                <ParticularValuerComment data={data} />
                <br />
                <CodeOfConduct data={data} />
                <br />
                <Undertaking data={data} />
                <br />
                <ParticularValuerComment data={data} />
                <br />
                <CodeOfConduct data={data} />
                <br />
              </Box>
            )}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={2}
          >
            <LoadingButton
              onClick={updateData}
              loading={updateLoading}
              loadingIndicator="Saving..."
              variant="contained"
              color="success"
            >
              Save changes
            </LoadingButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default MainPage;
