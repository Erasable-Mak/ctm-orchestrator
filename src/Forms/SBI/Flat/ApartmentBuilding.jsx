import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "../../SBI/SBI.css";

function ApartmentBuilding({ data, setData }) {
  return (
    <div>
      <table id="my-table" className="myTable">
        <tbody>
          <tr>
            <th>II.</th>
            <th className="que" colSpan="2">
              APARTMENT BUILDING
            </th>
            <td className="ans" colSpan="10"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">Nature of the Apartment</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="natureOfApartment"
                size="small"
                value={data.natureOfApartment}
                onChange={(newValue) => {
                  setData({ ...data, natureOfApartment: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Location</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="location"
                size="small"
                value={data.location}
                onChange={(newValue) => {
                  setData({ ...data, location: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Block No.</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="blockNo"
                size="small"
                value={data.blockNo}
                onChange={(newValue) => {
                  setData({ ...data, blockNo: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Ward No.</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="wardNo"
                size="small"
                value={data.wardNo}
                onChange={(newValue) => {
                  setData({ ...data, wardNo: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Village/ Municipality / Corporation</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="villageMunicipalityCorporation"
                size="small"
                value={data.villageMunicipalityCorporation}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    villageMunicipalityCorporation: newValue,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Door No., Street or Road (Pin Code)</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="pinCode"
                size="small"
                value={data.pinCode}
                onChange={(newValue) => {
                  setData({ ...data, pinCode: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">
              Description of the locality Residential / Commercial / Mixed
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="descriptionOfTheLocality"
                size="small"
                value={data.descriptionOfTheLocality}
                onChange={(newValue) => {
                  setData({ ...data, descriptionOfTheLocality: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">Year of Construction</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="yearOfConstruction"
                size="small"
                value={data.yearOfConstruction}
                onChange={(newValue) => {
                  setData({ ...data, yearOfConstruction: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Number of Floors</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="numberOfFloors"
                size="small"
                value={data.numberOfFloors}
                onChange={(newValue) => {
                  setData({ ...data, numberOfFloors: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Type of Structure</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="typeOfStructure"
                size="small"
                value={data.typeOfStructure}
                onChange={(newValue) => {
                  setData({ ...data, typeOfStructure: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Number of Dwelling units in the building</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="numberOfDwelling"
                size="small"
                value={data.numberOfDwelling}
                onChange={(newValue) => {
                  setData({ ...data, numberOfDwelling: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>8.</td>
            <td colSpan="2">Quality of Construction</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="qualityOfConstruction"
                size="small"
                value={data.qualityOfConstruction}
                onChange={(newValue) => {
                  setData({ ...data, qualityOfConstruction: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">Appearance of the Building</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="appearanceOfTheBuilding"
                size="small"
                value={data.appearanceOfTheBuilding}
                onChange={(newValue) => {
                  setData({ ...data, appearanceOfTheBuilding: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">Maintenance of the Building</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="maintenanceOfTheBuilding"
                size="small"
                value={data.maintenanceOfTheBuilding}
                onChange={(newValue) => {
                  setData({ ...data, maintenanceOfTheBuilding: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>11.</td>
            <td colSpan="2">Facilities Available</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="facilitiesAvailable"
                size="small"
                value={data.facilitiesAvailable}
                onChange={(newValue) => {
                  setData({ ...data, facilitiesAvailable: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Lift</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="lift"
                size="small"
                value={data.lift}
                onChange={(newValue) => {
                  setData({ ...data, lift: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Protected Water Supply</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="protectedWaterSupply"
                size="small"
                value={data.protectedWaterSupply}
                onChange={(newValue) => {
                  setData({ ...data, protectedWaterSupply: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Underground Sewerage</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="undergroundSewerage"
                size="small"
                value={data.undergroundSewerage}
                onChange={(newValue) => {
                  setData({ ...data, undergroundSewerage: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Car Parking - Open/ Covered</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="carParkingOpenCovered"
                size="small"
                value={data.carParkingOpenCovered}
                onChange={(newValue) => {
                  setData({ ...data, carParkingOpenCovered: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Is Compound wall existing?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="isCompoundWallExisting"
                size="small"
                value={data.isCompoundWallExisting}
                onChange={(newValue) => {
                  setData({ ...data, isCompoundWallExisting: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Is pavement laid around the Building</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="isPavementLaidAroundTheBuilding"
                size="small"
                value={data.isPavementLaidAroundTheBuilding}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    isPavementLaidAroundTheBuilding: newValue,
                  });
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      {/*Page 97 2nd table*/}
      <table id="my-table" className="myTable">
        <tbody>
          <tr>
            <th>II.</th>
            <th className="que" colSpan="2">
              Flat
            </th>
            <td className="ans" colSpan="10"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">The floor on which the flat is situated</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="theFloorOnWhichTheFlatIsSituated"
                size="small"
                value={data.theFloorOnWhichTheFlatIsSituated}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    theFloorOnWhichTheFlatIsSituated: newValue,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Door No. of the flat</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="doorNoOfTheFlat"
                size="small"
                value={data.doorNoOfTheFlat}
                onChange={(newValue) => {
                  setData({ ...data, doorNoOfTheFlat: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Specifications of the flat</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="specificationsOfTheFlat"
                size="small"
                value={data.specificationsOfTheFlat}
                onChange={(newValue) => {
                  setData({ ...data, specificationsOfTheFlat: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Roof</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="roof"
                size="small"
                value={data.roof}
                onChange={(newValue) => {
                  setData({ ...data, roof: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Flooring</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="flooring"
                size="small"
                value={data.flooring}
                onChange={(newValue) => {
                  setData({ ...data, flooring: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Doors</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="doors"
                size="small"
                value={data.doors}
                onChange={(newValue) => {
                  setData({ ...data, doors: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Windows</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="windows"
                size="small"
                value={data.windows}
                onChange={(newValue) => {
                  setData({ ...data, windows: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Fittings</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="fittings"
                size="small"
                value={data.fittings}
                onChange={(newValue) => {
                  setData({ ...data, fittings: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Finishing</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="finishing"
                size="small"
                value={data.finishing}
                onChange={(newValue) => {
                  setData({ ...data, finishing: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td rowspan="5">4.</td>
          </tr>
          <tr>
            <td colSpan="2">House Tax</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="houseTax"
                size="small"
                value={data.houseTax}
                onChange={(newValue) => {
                  setData({ ...data, houseTax: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Assessment No.</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="assessmentNo"
                size="small"
                value={data.assessmentNo}
                onChange={(newValue) => {
                  setData({ ...data, assessmentNo: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Tax paid in the name of</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="taxPaidInTheNameOf"
                size="small"
                value={data.taxPaidInTheNameOf}
                onChange={(newValue) => {
                  setData({ ...data, taxPaidInTheNameOf: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Tax amount</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="taxAmount"
                size="small"
                value={data.taxAmount}
                onChange={(newValue) => {
                  setData({ ...data, taxAmount: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td rowspan="3">5.</td>
          </tr>
          <tr>
            <td colSpan="2">Electricity Service Connection no.</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="electricityServiceConnectionNo"
                size="small"
                value={data.electricityServiceConnectionNo}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    locatelectricityServiceConnectionNoion: newValue,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Meter Card is in the name of</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="meterCardIsInTheName"
                size="small"
                value={data.meterCardIsInTheName}
                onChange={(newValue) => {
                  setData({ ...data, meterCardIsInTheName: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">How is the maintenance of the flat?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="howIsTheMaintenanceOfTheFlat"
                size="small"
                value={data.howIsTheMaintenanceOfTheFlat}
                onChange={(newValue) => {
                  setData({ ...data, howIsTheMaintenanceOfTheFlat: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Sale Deed executed in the name of</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="saleDeedExecutedInTheName"
                size="small"
                value={data.saleDeedExecutedInTheName}
                onChange={(newValue) => {
                  setData({ ...data, saleDeedExecutedInTheName: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>8.</td>
            <td colSpan="2">
              What is the undivided area of land as per Sale Deed?
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="undividedAreaOfLand"
                size="small"
                value={data.undividedAreaOfLand}
                onChange={(newValue) => {
                  setData({ ...data, undividedAreaOfLand: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">What is the plinth area of the flat?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="plinthArea"
                size="small"
                value={data.plinthArea}
                onChange={(newValue) => {
                  setData({ ...data, plinthArea: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">What is the floor space index (app.)</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="floorSpaceIndex"
                size="small"
                value={data.floorSpaceIndex}
                onChange={(newValue) => {
                  setData({ ...data, floorSpaceIndex: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>11.</td>
            <td colSpan="2">What is the Carpet Area of the flat?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="carpetArea"
                size="small"
                value={data.carpetArea}
                onChange={(newValue) => {
                  setData({ ...data, carpetArea: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>12.</td>
            <td colSpan="2">Is it Posh/ I class / Medium / Ordinary?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="posh"
                size="small"
                value={data.posh}
                onChange={(newValue) => {
                  setData({ ...data, posh: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>13.</td>
            <td colSpan="2">
              Is it being used for Residential or Commercial purpose?
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="residentialOrCommercialPurpose"
                size="small"
                value={data.residentialOrCommercialPurpose}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    residentialOrCommercialPurpose: newValue,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>14.</td>
            <td colSpan="2">Is it Owner-occupied or let out?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="ownerOccupied"
                size="small"
                value={data.ownerOccupied}
                onChange={(newValue) => {
                  setData({ ...data, ownerOccupied: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>15.</td>
            <td colSpan="2">If rented, what is the monthly rent?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="rented"
                size="small"
                value={data.rented}
                onChange={(newValue) => {
                  setData({ ...data, rented: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <th>IV</th>
            <th colSpan="2">MARKETABILITY</th>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">How is the marketability?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="marketability"
                size="small"
                value={data.marketability}
                onChange={(newValue) => {
                  setData({ ...data, marketability: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">
              What are the factors favouring for an extra Potential Value?
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="factorsFavouring"
                size="small"
                value={data.factorsFavouring}
                onChange={(newValue) => {
                  setData({ ...data, factorsFavouring: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">
              Any negative factors are observed which affect the market value in
              general?
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="negativeFactors"
                size="small"
                value={data.negativeFactors}
                onChange={(newValue) => {
                  setData({ ...data, negativeFactors: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <th>V</th>
            <th colSpan="2">Rate</th>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">
              After analyzing the comparable sale instances, what is the
              composite rate for a similar flat with same specifications in the
              adjoining locality? - (Along with details /reference of at-least
              two latest deals/transactions with respect to adjacent properties
              in the areas)
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="saleInstances"
                size="small"
                value={data.saleInstances}
                onChange={(newValue) => {
                  setData({ ...data, saleInstances: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">
              Assuming it is a new construction, what is the adopted basic
              composite rate of the flat under valuation after comparing with
              the specifications and other factors with the flat under
              comparison (give details).
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="newConstruction"
                size="small"
                value={data.newConstruction}
                onChange={(newValue) => {
                  setData({ ...data, newConstruction: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td rowspan="3">3</td>
            <td colSpan="2">Break - up for the rate</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="breakUpForTheRate"
                size="small"
                value={data.breakUpForTheRate}
                onChange={(newValue) => {
                  setData({ ...data, breakUpForTheRate: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>i)</td>
            <td>Building + Services</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="buildingServices"
                size="small"
                value={data.buildingServices}
                onChange={(newValue) => {
                  setData({ ...data, buildingServices: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>ii)</td>
            <td>Land + Others</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="landOthers"
                size="small"
                value={data.landOthers}
                onChange={(newValue) => {
                  setData({ ...data, landOthers: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">
              Guideline rate obtained from the Registrar's office (an evidence
              thereof to be enclosed)
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="guideline"
                size="small"
                value={data.guideline}
                onChange={(newValue) => {
                  setData({ ...data, guideline: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <th>VI</th>
            <th colSpan="2">COMPOSITE RATE ADOPTED AFTER DEPRECIATION</th>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td>a.</td>
            <td colSpan="2">Depreciated building rate</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="buildingRate"
                size="small"
                value={data.buildingRate}
                onChange={(newValue) => {
                  setData({ ...data, buildingRate: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Replacement cost of flat with Services (V (3)i)</td>
            <td colSpan="10">
              Rs.
              <TextField
                fullWidth
                id="replacementCostOfFlat"
                size="small"
                value={data.replacementCostOfFlat}
                onChange={(newValue) => {
                  setData({ ...data, replacementCostOfFlat: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Age of the building</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="ageOfTheBuilding"
                size="small"
                value={data.ageOfTheBuilding}
                onChange={(newValue) => {
                  setData({ ...data, ageOfTheBuilding: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Life of the building estimated</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="lifeOfTheBuildingEstimated"
                size="small"
                value={data.lifeOfTheBuildingEstimated}
                onChange={(newValue) => {
                  setData({ ...data, lifeOfTheBuildingEstimated: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">
              Depreciation percentage assuming the salvage value as 10%
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="depreciationPercentage"
                size="small"
                value={data.depreciationPercentage}
                onChange={(newValue) => {
                  setData({ ...data, depreciationPercentage: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Depreciated Ratio of the building</td>
            <td colSpan="10">
              Rs.
              <TextField
                fullWidth
                id="depreciatedRatioOfTheBuilding"
                size="small"
                value={data.depreciatedRatioOfTheBuilding}
                onChange={(newValue) => {
                  setData({ ...data, depreciatedRatioOfTheBuilding: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>b.</td>
            <td colSpan="2">Total composite rate arrived for valuation</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="totalCompositeRate"
                size="small"
                value={data.totalCompositeRate}
                onChange={(newValue) => {
                  setData({ ...data, totalCompositeRate: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Depreciated building rate VI (a)</td>
            <td colSpan="10">
              Rs.
              <TextField
                fullWidth
                id="depreciatedBuildingRate"
                size="small"
                value={data.depreciatedBuildingRate}
                onChange={(newValue) => {
                  setData({ ...data, depreciatedBuildingRate: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Rate for Land & other V (3)ii</td>
            <td colSpan="10">
              Rs.
              <TextField
                fullWidth
                id="rateForLand"
                size="small"
                value={data.rateForLand}
                onChange={(newValue) => {
                  setData({ ...data, rateForLand: newValue });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total Composite Rate</td>
            <td colSpan="10">
              Rs.
              <TextField
                fullWidth
                id="totalCompositeRate"
                size="small"
                value={data.totalCompositeRate}
                onChange={(newValue) => {
                  setData({ ...data, totalCompositeRate: newValue });
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h1>Preview</h1>
      <table id="my-table" className="myTable">
        <tbody>
          <tr>
            <th>II.</th>
            <th className="que" colSpan="2">
              APARTMENT BUILDING
            </th>
            <td className="ans" colSpan="10"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">Nature of the Apartment</td>
            <td colSpan="10">{data.natureOfApartment}</td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Location</td>
            <td colSpan="10">{data.location}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Block No.</td>
            <td colSpan="10">{data.blockNo}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Ward No.</td>
            <td colSpan="10">{data.wardNo}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Village/ Municipality / Corporation</td>
            <td colSpan="10">{data.villageMunicipalityCorporation}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Door No., Street or Road (Pin Code)</td>
            <td colSpan="10">{data.pinCode}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">
              Description of the locality Residential / Commercial / Mixed
            </td>
            <td colSpan="10">{data.descriptionOfTheLocality}</td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">Year of Construction</td>
            <td colSpan="10">{data.yearOfConstruction}</td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Number of Floors</td>
            <td colSpan="10">{data.numberOfFloors}</td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Type of Structure</td>
            <td colSpan="10">{data.typeOfStructure}</td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Number of Dwelling units in the building</td>
            <td colSpan="10">{data.numberOfDwelling}</td>
          </tr>
          <tr>
            <td>8.</td>
            <td colSpan="2">Quality of Construction</td>
            <td colSpan="10">{data.qualityOfConstruction}</td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">Appearance of the Building</td>
            <td colSpan="10">{data.appearanceOfTheBuilding}</td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">Maintenance of the Building</td>
            <td colSpan="10">{data.maintenanceOfTheBuilding}</td>
          </tr>
          <tr>
            <td>11.</td>
            <td colSpan="2">Facilities Available</td>
            <td colSpan="10">{data.facilitiesAvailable}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Lift</td>
            <td colSpan="10">{data.lift}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Protected Water Supply</td>
            <td colSpan="10">{data.protectedWaterSupply}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Underground Sewerage</td>
            <td colSpan="10">{data.undergroundSewerage}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Car Parking - Open/ Covered</td>
            <td colSpan="10">{data.carParkingOpenCovered}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Is Compound wall existing?</td>
            <td colSpan="10">{data.isCompoundWallExisting}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Is pavement laid around the Building</td>
            <td colSpan="10">{data.isPavementLaidAroundTheBuilding}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      {/*Page 97 2nd table*/}
      <table id="my-table" className="myTable">
        <tbody>
          <tr>
            <th>II.</th>
            <th className="que" colSpan="2">
              Flat
            </th>
            <td className="ans" colSpan="10"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">The floor on which the flat is situated</td>
            <td colSpan="10">{data.theFloorOnWhichTheFlatIsSituated}</td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Door No. of the flat</td>
            <td colSpan="10">{data.doorNoOfTheFlat}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Specifications of the flat</td>
            <td colSpan="10">{data.specificationsOfTheFlat}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Roof</td>
            <td colSpan="10">{data.roof}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Flooring</td>
            <td colSpan="10">{data.flooring}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Doors</td>
            <td colSpan="10">{data.doors}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Windows</td>
            <td colSpan="10">{data.windows}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Fittings</td>
            <td colSpan="10">{data.fittings}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Finishing</td>
            <td colSpan="10">{data.finishing}</td>
          </tr>
          <tr>
            <td rowspan="5">4.</td>
          </tr>
          <tr>
            <td colSpan="2">House Tax</td>
            <td colSpan="10">{data.houseTax}</td>
          </tr>
          <tr>
            <td colSpan="2">Assessment No.</td>
            <td colSpan="10">{data.assessmentNo}</td>
          </tr>
          <tr>
            <td colSpan="2">Tax paid in the name of</td>
            <td colSpan="10">{data.taxPaidInTheNameOf}</td>
          </tr>
          <tr>
            <td colSpan="2">Tax amount</td>
            <td colSpan="10">Rs. {data.taxAmount}</td>
          </tr>
          <tr>
            <td rowspan="3">5.</td>
          </tr>
          <tr>
            <td colSpan="2">Electricity Service Connection no.</td>
            <td colSpan="10">{data.electricityServiceConnectionNo}</td>
          </tr>
          <tr>
            <td colSpan="2">Meter Card is in the name of</td>
            <td colSpan="10">{data.meterCardIsInTheName}</td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">How is the maintenance of the flat?</td>
            <td colSpan="10">{data.howIsTheMaintenanceOfTheFlat}</td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Sale Deed executed in the name of</td>
            <td colSpan="10">{data.saleDeedExecutedInTheName}</td>
          </tr>
          <tr>
            <td>8.</td>
            <td colSpan="2">
              What is the undivided area of land as per Sale Deed?
            </td>
            <td colSpan="10">{data.undividedAreaOfLand}</td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">What is the plinth area of the flat?</td>
            <td colSpan="10">{data.plinthArea}</td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">What is the floor space index (app.)</td>
            <td colSpan="10">{data.floorSpaceIndex}</td>
          </tr>
          <tr>
            <td>11.</td>
            <td colSpan="2">What is the Carpet Area of the flat?</td>
            <td colSpan="10">{data.carpetArea}</td>
          </tr>
          <tr>
            <td>12.</td>
            <td colSpan="2">Is it Posh/ I class / Medium / Ordinary?</td>
            <td colSpan="10">{data.posh}</td>
          </tr>
          <tr>
            <td>13.</td>
            <td colSpan="2">
              Is it being used for Residential or Commercial purpose?
            </td>
            <td colSpan="10">{data.residentialOrCommercialPurpose}</td>
          </tr>
          <tr>
            <td>14.</td>
            <td colSpan="2">Is it Owner-occupied or let out?</td>
            <td colSpan="10">{data.ownerOccupied}</td>
          </tr>
          <tr>
            <td>15.</td>
            <td colSpan="2">If rented, what is the monthly rent?</td>
            <td colSpan="10">{data.rented}</td>
          </tr>
          <tr>
            <th>IV</th>
            <th colSpan="2">MARKETABILITY</th>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">How is the marketability?</td>
            <td colSpan="10">{data.marketability}</td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">
              What are the factors favouring for an extra Potential Value?
            </td>
            <td colSpan="10">{data.factorsFavouring}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">
              Any negative factors are observed which affect the market value in
              general?
            </td>
            <td colSpan="10">{data.negativeFactors}</td>
          </tr>
          <tr>
            <th>V</th>
            <th colSpan="2">Rate</th>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">
              After analyzing the comparable sale instances, what is the
              composite rate for a similar flat with same specifications in the
              adjoining locality? - (Along with details /reference of at-least
              two latest deals/transactions with respect to adjacent properties
              in the areas)
            </td>
            <td colSpan="10">{data.saleInstances}</td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">
              Assuming it is a new construction, what is the adopted basic
              composite rate of the flat under valuation after comparing with
              the specifications and other factors with the flat under
              comparison (give details).
            </td>
            <td colSpan="10">{data.newConstruction}</td>
          </tr>
          <tr>
            <td rowspan="3">3</td>
            <td colSpan="2">Break - up for the rate</td>
            <td colSpan="10">{data.breakUpForTheRate}</td>
          </tr>
          <tr>
            <td>i)</td>
            <td>Building + Services</td>
            <td colSpan="10">{data.buildingServices}</td>
          </tr>
          <tr>
            <td>ii)</td>
            <td>Land + Others</td>
            <td colSpan="10">{data.landOthers}</td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">
              Guideline rate obtained from the Registrar's office (an evidence
              thereof to be enclosed)
            </td>
            <td colSpan="10">{data.guideline}</td>
          </tr>
          <tr>
            <th>VI</th>
            <th colSpan="2">COMPOSITE RATE ADOPTED AFTER DEPRECIATION</th>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td>a.</td>
            <td colSpan="2">Depreciated building rate</td>
            <td colSpan="10">{data.depreciatedBuildingRate}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Replacement cost of flat with Services (V (3)i)</td>
            <td colSpan="10">Rs. {data.replacementCostOfFlat}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Age of the building</td>
            <td colSpan="10">{data.ageOfTheBuilding}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Life of the building estimated</td>
            <td colSpan="10">{data.lifeOfTheBuildingEstimated}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">
              Depreciation percentage assuming the salvage value as 10%
            </td>
            <td colSpan="10">{data.depreciationPercentage}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Depreciated Ratio of the building</td>
            <td colSpan="10">Rs. {data.depreciatedRatioOfTheBuilding}</td>
          </tr>
          <tr>
            <td>b.</td>
            <td colSpan="2">Total composite rate arrived for valuation</td>
            <td colSpan="10">{data.totalCompositeRate}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Depreciated building rate VI (a)</td>
            <td colSpan="10">Rs. {data.depreciatedBuildingRate}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Rate for Land & other V (3)ii</td>
            <td colSpan="10">Rs. {data.rateForLand}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total Composite Rate</td>
            <td colSpan="10">Rs. {data.totalCompositeRate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ApartmentBuilding;
