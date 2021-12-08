import { Box, Button, Stack, TextField } from "@mui/material";
import Divider from '@mui/material/Divider'
import React, { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";

const PhysicalStatusOfProject = [
  {
    id: "Complited and Occupied",
    value: "Complited and Occupied",
  },
];
const TypePropertyAsPerApprovals = [
  {
    id: "Bungalow",
    value: "Bungalow",
  },
];
const PropertyUsageAsPerSiteObervation = [
  {
    id: "Clinic",
    value: "Clinic",
  },
];
const SelectConstructionAsPerPlan = [
  {
    id: "Yes",
    value: "Yes",
  },
  {
    id: "No",
    value: "No",
  },
];
const DetailsOfCommercialUsage = [
  {
    id: "Yes",
    value: "Yes",
  },
  {
    id: "No",
    value: "No",
  },
];
const RemarksOnviewFromProperty = [
  {
    id: "Garden View",
    value: "Garden View",
  },
];
const NoOfLifts = [
  {
    id: "3",
    value: "3",
  },
];
const Exterior = [
  {
    id: "Good",
    value: "Good",
  },
  {
    id: "Average",
    value: "Average",
  },
];
const Interior = [
  {
    id: "Good",
    value: "Good",
  },
  {
    id: "Average",
    value: "Average",
  },
];
const Fittings = [
  {
    id: "Concealed Plumbing and Concealed Elect.",
    value: "Concealed Plumbing and Concealed Elect.",
  },
];
const Door = [
  {
    id: "Wooden Door",
    value: "Wooden Door",
  },
  {
    id: "Iron Door",
    value: "Iron Door",
  },
];
const Window = [
  {
    id: "Aluminium Sliding",
    value: "Aluminium Sliding",
  },
];
const MaintenanceLevelOfSocietyProject = [
  {
    id: "Good",
    value: "Good",
  },
  {
    id: "Average",
    value: "Average",
  },
];

const initialState = {
  physicalStatus:"",
};

function PhysicalInspectionII() {
  const [formData, setFormData] = useState(initialState);
  const [reload, setReload] = useState(false);

  const handleSubmit = async () => {
  };

  useEffect(() => {}, [reload]);

  return (
    <><> 
      {/*First box*/}
      <Box noValidate sx={{ mt: 1 }}>
        <div>
          <Divider textAlign="left">Details of  Property</Divider><br/>
            <DropDown
            id="physical-status-of-project"
            width={50}
            items={PhysicalStatusOfProject}
            value={formData.PhysicalStatusOfProject}
            name="Physical Status of Project"
            setValue={(value) => setFormData({ ...formData, PhysicalStatusOfProject: value })} />
            <TextFieldComp
            id="stage-of-construction"
            width={50}
            name="% Stage of Construction"
            value={formData.StageOfConstruction}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, StageOfConstruction: value })} />
            <DropDown
            id="type-property-as-per-approvals"
            width={50}
            items={TypePropertyAsPerApprovals}
            value={formData.TypePropertyAsPerApprovals}
            name="Type property As Per Approvals"
            setValue={(value) => setFormData({ ...formData, TypePropertyAsPerApprovals: value })} />
            <DropDown
            id="property-usage-as-per-site-obervation"
            width={50}
            items={PropertyUsageAsPerSiteObervation}
            value={formData.PropertyUsageAsPerSiteObervation}
            name="Property Usage as per site obervation"
            setValue={(value) => setFormData({ ...formData, PropertyUsageAsPerSiteObervation: value })} />
            <DropDown
            id="select-construction-as-per-plan"
            width={50}
            items={SelectConstructionAsPerPlan}
            value={formData.SelectConstructionAsPerPlan}
            name="Select Construction as Per Plan"
            setValue={(value) => setFormData({ ...formData, bankEmployeeName: value })} />
             <TextFieldComp
            id="violation-observed"
            width={50}
            name="Violation Observed"
            value={formData.ViolationObserved}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, ViolationObserved: value })} />
            <DropDown
            id="details-of-commercial-usage"
            width={50}
            items={DetailsOfCommercialUsage}
            value={formData.DetailsOfCommercialUsage}
            name="Details of Commercial Usage"
            setValue={(value) => setFormData({ ...formData, DetailsOfCommercialUsage: value })} />
            <TextFieldComp
            id="floor-no-in-case-of-independent-unit"
            width={50}
            name="Floor No in case of independent Unit"
            value={formData.FloorNoInCaseOfIndependentUnit}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, FloorNoInCaseOfIndependentUnit: value })} />
            <TextFieldComp
            id="no-of-units-per-floor-position-of-units"
            width={50}
            name="No of units per Floor & position of Units"
            value={formData.NoOfUnitsPerFloorPositionOfUnits}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, NoOfunitsPerFloorPositionOfUnits: value })} />
            <DropDown
            id="remarks-on-view-from-property"
            width={50}
            items={RemarksOnviewFromProperty}
            value={formData.RemarksOnviewFromProperty}
            name="Remarks on view from property"
            setValue={(value) => setFormData({ ...formData, RemarksOnviewFromProperty: value })} />
           <TextFieldComp
            id="accommodation-of-unit"
            width={50}
            name="Accommodation of Unit"
            value={formData.AccommodationOfUnit}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, AccommodationOfUnit: value })} />
             <TextFieldComp
            id="amenities-available-in-society"
            width={50}
            name="Amenities Available in Society"
            value={formData.AmenitiesAvailableInSociety}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, AmenitiesAvailableInSociety: value })} />
             <TextFieldComp
            id="construction-type"
            width={50}
            name="Construction Type"
            value={formData.ConstructionType}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, ConstructionType: value })} />
             <TextFieldComp
            id="no-of-storeys"
            width={50}
            name="No of Storeys"
            value={formData.NoOfStoreys}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, NoOfStoreys: value })} />
            <DropDown
            id="no-of-lifts"
            width={50}
            items={NoOfLifts}
            value={formData.NoOfLifts}
            name="No of Lifts"
            setValue={(value) => setFormData({ ...formData, NoOfLifts: value })} />
            <DropDown
            id="exterior"
            width={50}
            items={Exterior}
            value={formData.Exterior}
            name="Exterior"
            setValue={(value) => setFormData({ ...formData, Exterior: value })} />
            <DropDown
            id="interior"
            width={50}
            items={Interior}
            value={formData.Interior}
            name="Interior"
            setValue={(value) => setFormData({ ...formData, Interior: value })} />
            <TextFieldComp
            id="flooring"
            width={50}
            name="Flooring"
            value={formData.Flooring}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, Flooring: value })} />
            <DropDown
            id="fittings"
            width={50}
            items={Fittings}
            value={formData.Fittings}
            name="Fittings"
            setValue={(value) => setFormData({ ...formData, Fittings: value })} />
            <DropDown
            id="door"
            width={50}
            items={Door}
            value={formData.Door}
            name="Door"
            setValue={(value) => setFormData({ ...formData, Door: value })} />
            <DropDown
            id="window"
            width={50}
            items={Window}
            value={formData.Window}
            name="Window"
            setValue={(value) => setFormData({ ...formData, Window: value })} />
            <DropDown
            id="maintenance-level-of-society-project"
            width={50}
            items={MaintenanceLevelOfSocietyProject}
            value={formData.MaintenanceLevelOfSocietyProject}
            name="Maintenance Level of Society Project"
            setValue={(value) => setFormData({ ...formData, MaintenanceLevelOfSocietyProject: value })} />
            <TextFieldComp
            id="property-age"
            width={50}
            name="Property Age"
            value={formData.PropertyAge}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, PropertyAge: value })} />
            <TextFieldComp
            id="residual-age"
            width={50}
            name="Residual Age"
            value={formData.ResidualAge}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, ResidualAge: value })} />
        </div>
      </Box><br />
     

      {/*Second box*/}
      <Box noValidate sx={{ mt: 1 }}>
        <div>
          <Divider textAlign="left">Validation Observations</Divider><br/>
           <TextField
          id="engineers-remark"
          width={50}
          label="Engineer's Remark"
          multiline
          value={formData.EngineersRemark}
          rows={4}
          setValue={(value) => setFormData({ ...formData, EngineersRemark: value })} 
        />  
        </div>
      </Box><br/></><Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          style={{ margin: "20px" }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Stack></>
  );
}

export default PhysicalInspectionII;
