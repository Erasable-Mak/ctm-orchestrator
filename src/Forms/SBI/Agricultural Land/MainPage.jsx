import React, { useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import jsPDF from "jspdf";

//input forms
import General from "../General";
import CharacteristicOfSite from "../CharacteristicOfSite";
import ValuationOfAgriculturalLand from "./ValuationOfAgriculturalLand";
import ValuationOfAgriculturalLandPreview from "./ValuationOfAgriculturalLandPreview";

//preview forms
import GeneralPreview from "../GeneralPreview";
import CharacteristicOfSitePreview from "../CharacteristicOfSitePreview";
import Undertaking from "../Undertaking";
import ParticularValuerComment from "../ParticularValuerComment";
import CodeOfConduct from "../CodeOfConduct";

const initialValue = {
  purposeOfValuation: "Banking/Financial institute",
  classificationOfArea1: "High",
  classificationOfArea2: "Urban",
  comesUnder: "Corporation limit",
  documentsProducedForPerusal: [""],
  advantageOfSite: [""],
  specialRemarks: [""],
};

const MainPage = ({ SelectedCaseDetails }) => {
  const [data, setData] = useState(initialValue);
  const [PreviewOn, setPreviewOn] = useState(false);

  const getPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#General", theme: "grid" });
    doc.autoTable({ html: "#details-of-valuation", theme: "grid" });

    // doc.autoTable({ html: "", theme: "grid" });
    doc.save("table.pdf");
  };

  return (
    <div>
      {/* contains complete report of SBI - Land or Site or Building */}
      <Box>
        {console.log(SelectedCaseDetails)}
        <General data={data} setData={setData} /> <br />
        <CharacteristicOfSite data={data} setData={setData} />
        <br />
        <ValuationOfAgriculturalLand data={data} setData={setData} />
        <br />
        <Undertaking data={data} setData={setData} />
        <br />
        <ParticularValuerComment data={data} setData={setData} />
        <br />
        <CodeOfConduct data={data} setData={setData} />
        <br />
      </Box>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => {}}>
          Save
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setPreviewOn(!PreviewOn);
          }}
        >
          Preview
        </Button>
        {/* <Button variant="contained" onClick={getPDF}>
          Get PDF
        </Button> */}
      </Stack>
      {/* shows preview of SBI - Land or Site or Building */}
      {PreviewOn && (
        <Box>
          <GeneralPreview data={data} />
          <br />
          <CharacteristicOfSitePreview data={data} />
          <br />
          <ValuationOfAgriculturalLandPreview data={data} />
          <br />
          <Undertaking data={data} />
          <br />
          <ParticularValuerComment data={data} />
          <br />
          <CodeOfConduct data={data} />
          <br />
        </Box>
      )}
    </div>
  );
};

export default MainPage;