import React, { useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import jsPDF from "jspdf";

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
    doc.autoTable({ html: "#my-table2", theme: "grid" });
    doc.autoTable({ html: "#Part-A-B", theme: "grid" });
    doc.autoTable({ html: "classification-of-construction-1", theme: "grid" });
    doc.autoTable({ html: "classification-of-construction-2", theme: "grid" });
    doc.autoTable({ html: "#details-of-valuation", theme: "grid" });
    doc.autoTable({ html: "#total", theme: "grid" });
    doc.autoTable({ html: "#Part-C", theme: "grid" });
    doc.autoTable({ html: "#Part-D", theme: "grid" });
    doc.autoTable({ html: "#Part-E", theme: "grid" });
    doc.autoTable({ html: "#Part-F", theme: "grid" });
    doc.autoTable({ html: "#Total-abstract", theme: "grid" });

    // doc.autoTable({ html: "", theme: "grid" });
    doc.save("table.pdf");
  };

  return (
    <div>
      {/* contains complete report of SBI - Land or Site or Building */}
      <Box>
        <General data={data} setData={setData} /> <br />
        <CharacteristicOfSite data={data} setData={setData} />
        <br />
        <PartAB data={data} setData={setData} />
        <br />
        <SpecificationOfConstruction1 data={data} setData={setData} />
        <br />
        <SpecificationOfConstruction2 data={data} setData={setData} />
        <br />
        <DetailsOfValuation data={data} setData={setData} />
        <br />
        <PartC data={data} setData={setData} />
        <br />
        <PartD data={data} setData={setData} />
        <br />
        <PartE data={data} setData={setData} />
        <br />
        <PartF data={data} setData={setData} />
        <br />
        <TotalAbstractOfProperty data={data} setData={setData} />
        <br />
        <ImageSelector
          data={data}
          setData={setData}
          SelectedCaseDetails={SelectedCaseDetails}
        />
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
    </div>
  );
};
export default MainPage;
