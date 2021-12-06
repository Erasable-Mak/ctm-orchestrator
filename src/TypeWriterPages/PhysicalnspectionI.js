import { Box, Button, Stack, TextField } from "@mui/material";
import Divider from '@mui/material/Divider'
import React, { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const zoneAsPerCityMasterPlan = [
  {
    id: "Agriculture Zone",
    value: "Agriculture Zone",
  },
];

const InfrastructureoOfTheSurroundingArea = [
  {
    id: "Average",
    value: "Average",
  },
];

const NeighbourhoodType = [
  {
    id: "Prime Industrial",
    value: "Prime Industrial",
  },
];
const LocallyConnectiveFromBBD = [
  {
    id: "Below Average",
    value: "Below Average",
  },
];
const ProximityToAmenities = [
  {
    id: "Average",
    value: "Average",
  },
];
const MarketabilityEaseOfSaleability = [
  {
    id: "Average",
    value: "Average",
  },
];
const BoundariesMatching = [
  {
    id: "Yes",
    value: "yes",
  },
  {
    id: "No",
    value: "No",
  },
];
const PropertyOccupiedOrVacant = [
  {
    id: "Occupied",
    value: "Occupied",
  },
];
const RelationshipOfOccupantWithCustomer = [
  {
    id: "Self",
    value: "Self",
  },
];

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

  const rows = [
    createData('East', 159, 6.0, 24, 4.0),
    createData('West', 237, 9.0, 37, 4.3),
    createData('North', 262, 16.0, 24, 6.0),
    createData('South', 305, 3.7, 67, 4.3),
    createData('NorthEast', 452, 25.0, 51, 4.9),
    createData('NorthWest', 356, 16.0, 49, 3.9),
    createData('SouthEast', 356, 16.0, 49, 3.9),
    createData('SouthEast', 356, 16.0, 49, 3.9),
  ];

const initialState = {
  bankName: "",
  bankBranchName: "",
  bankEmployeeName: "",
  loanAcNo: "",
  borrowerNames: [],
  typeOfAsset: "",
  purposeOfValuation: "",
  contactNo: [],
  address: "",
  latitude: "",
  longitude: "",
  jobBranch: "",
  instructions: "",
  InfrastructureoOfTheSurroundingArea:"",
  dateOfInspection: null,
};

function PhysicalInspectionI() {
  const [formData, setFormData] = useState(initialState);
  const [reload, setReload] = useState(false);

  const handleSubmit = async () => {

  };



  const clearForm = () => {
    setFormData(initialState);
    setReload(true);
  };

  useEffect(() => {}, [reload]);

  return (
    <><><> 
      {/*First box*/}
      <Box noValidate sx={{ mt: 1 }}>
          <Divider textAlign="left">Legal Documents Details</Divider><br/>
          <DropDown
            id="zone-as-per-city-master-plan"
            width={50}
            items={zoneAsPerCityMasterPlan}
            value={formData.zoneAsPerCityMasterPlan}
            name="Zone as per City Master Plan (DP)"
            setValue={(value) => setFormData({ ...formData, zoneAsPerCityMasterPlan: value })} />
          <DropDown
            id="infrastructure-of-the-surrounding-area"
            width={50}
            items={InfrastructureoOfTheSurroundingArea}
            value={formData.InfrastructureOfTheSurroundingArea}
            name="Infrastructure of the surrounding area"
            setValue={(value) => setFormData({ ...formData, InfrastructureOfTheSurroundingArea: value })} />
          <DropDown
            id="neighbourhood-type"
            width={50}
            items={NeighbourhoodType}
            value={formData.NeighbourhoodType}
            name="Neighbourhood Type"
            setValue={(value) => setFormData({ ...formData, NeighbourhoodType: value })} />
          <DropDown
            id="locally-connective-from-bbd"
            width={50}
            items={LocallyConnectiveFromBBD}
            value={formData.LocallyConnectiveFromBBD}
            name="Locally Connective from BBD"
            setValue={(value) => setFormData({ ...formData, LocallyConnectiveFromBBD: value })} /><br />
          <DropDown
            id="proximity-to-amenities"
            width={50}
            items={ProximityToAmenities}
            value={formData.ProximityToAmenities}
            name="Proximity to Amenities e.g. School, Mail, etc."
            setValue={(value) => setFormData({ ...formData, ProximityToAmenities: value })} />
          <DropDown
            id="marketability-ease-of-saleability"
            width={50}
            items={MarketabilityEaseOfSaleability}
            value={formData.MarketabilityEaseOfSaleability}
            name="Marketability / Ease of Saleability"
            setValue={(value) => setFormData({ ...formData, MarketabilityEaseOfSaleability: value })} />
          <TextFieldComp
            id="name-of-newest-hospital"
            width={50}
            name="Name of Newest Hospital"
            value={formData.NameOfNewestHospital}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, NameOfNewestHospital: value })} />
          <TextFieldComp
            id="condition-and-width-of-approach-road"
            width={50}
            name="Condition and width of approach road"
            value={formData.ConditionAndWidthOfApproachRoad}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, ConditionAndWidthOfApproachRoad: value })} />
          <TextFieldComp
            id="name-of-nearest-bus-stop"
            width={50}
            name="Name of Nearest Bus Stop"
            value={formData.NameOfNearestBusStop}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, NameOfNearestBusStop: value })} />
          <TextFieldComp
            id="distance-from-bank-fi-branch"
            width={50}
            name="Distance from Bank/FI Branch"
            value={formData.DistanceFromBankFIBranch}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, DistanceFromBankFIBranch: value })} />
          <TextFieldComp
            id="distance-from-landmark-railway-station"
            width={50}
            name="Distance from Landmark/Railway Station"
            value={formData.DistanceFromLandmarkRailwayStation}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, DistanceFromLandmarkRailwayStation: value })} />
      {/*Seacond box Table*/}
      </Box><br />
      <Box noValidate sx={{ mt: 1 }}>
        <div>
          <Divider textAlign="left">Building /Piot Boundaries & Dimension</Divider><br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
              <TableRow>
                  <TableCell rowSpan={2}>Direction</TableCell>
                  <TableCell colSpan={2} align="center">
                  Boundaries
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                  Dimension
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                  MOS
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">As per site</TableCell>
                  <TableCell align="center">As per deed</TableCell>
                  <TableCell align="center">As per site</TableCell>
                  <TableCell align="center" >As per deed</TableCell>
                  <TableCell align="center">As per site</TableCell>
                  <TableCell align="center" >As per deed</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">
                    <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                    <TableCell align="right">
                      <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                    <TableCell align="right">
                      <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                    <TableCell align="right">
                      <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                    <TableCell align="right">
                      <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                    <TableCell align="right">
                      <TextField id="standard-basic" variant="standard" id=""
                     value={formData.example}
                     setValue={(value) => setFormData({ ...formData, example: value })} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer></div><br />
        <DropDown
          id="boundaries-matching"
          items={BoundariesMatching}
          value={formData.BoundariesMatching}
          name="Boundaries Matching"
          setValue={(value) => setFormData({ ...formData, BoundariesMatching: value })} />
      </Box><br /></>

      {/*Thirn box*/}
      <Box noValidate sx={{ mt: 1 }}>
           
          <Divider textAlign="left">Legal Documents Details</Divider><br/>
          <TextFieldComp
            id="name-of-person-met-at-site"
            width={50}
            name="Name of Person Met At Site"
            value={formData.NameOfPersonMetAtSite}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, NameOfPersonMetAtSite: value })} />
          <TextFieldComp
            id="name-of-society-board"
            width={50}
            name="Name of Society Board"
            value={formData.NameOfSocietyBoard}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, NameOfSocietyBoard: value })} />
          <DropDown
            id="property-occupied-or-vacant"
            width={50}
            items={PropertyOccupiedOrVacant}
            value={formData.PropertyOccupiedOrVacant}
            name="Property Occupied or Vacant"
            setValue={(value) => setFormData({ ...formData, PropertyOccupiedOrVacant: value })} />
          <DropDown
            id="relationship-of-occupant-with-customer"
            width={50}
            items={RelationshipOfOccupantWithCustomer}
            value={formData.RelationshipOfOccupantWithCustomer}
            name="Relationship of Occupant with Customer"
            setValue={(value) => setFormData({ ...formData, RelationshipOfOccupantWithCustomer: value })} />
          <TextFieldComp
            id="name-of-occupant"
            width={50}
            name="Name of Occupant"
            value={formData.NameOfOccupant}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, NameOfOccupant: value })} />
          <TextFieldComp
            id="occupied-since"
            width={50}
            name="Occupied Since"
            value={formData.OccupiedSince}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, OccupiedSince: value })} />
          <TextFieldComp
            id="name-of-reported-owner-as-per-ste-info"
            width={50}
            name="Name of Reported Owner as per Site Info"
            value={formData.NameOfReportedOwnerAsPerSiteInfo}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, NameOfReportedOwnerAsPerSiteInfo: value })} />  
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

export default PhysicalInspectionI;
