import React from "react";

import TextField from "@mui/material/TextField";

function PartAB({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <td colSpan="4" className="que">
              Part – A (Valuation of land)
            </td>
            <td></td>
            <td colSpan="35" className="ans"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="3">Size of plot</td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="SizeOfPlot"
                minRows={1}
                size="small"
                value={data.SizeOfPlot}
                onChange={(newValue) => {
                  setData({ ...data, SizeOfPlot: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="3">North &amp; South</td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="NorthSouth"
                minRows={1}
                size="small"
                value={data.NorthSouth}
                onChange={(newValue) => {
                  setData({ ...data, NorthSouth: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="3">East &amp; West</td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="EastWest"
                minRows={1}
                size="small"
                value={data.EastWest}
                onChange={(newValue) => {
                  setData({ ...data, EastWest: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="3">Total extent of the plot</td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="TotalExtentOfPlot"
                minRows={1}
                size="small"
                value={data.TotalExtentOfPlot}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TotalExtentOfPlot: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="3">
              Prevailing market rate (Along with details /reference of at least
              two latest deals/transactions with respect to adjacent properties
              in the areas)
            </td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="PrevailingMarketRate"
                multiline
                minRows={4}
                size="small"
                value={data.PrevailingMarketRate}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    PrevailingMarketRate: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="3">
              Guideline rate obtained from the Registrar’s Office (an evidence
              thereof to be enclosed)
            </td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="GuidelineRateObtained"
                multiline
                minRows={2}
                size="small"
                value={data.GuidelineRateObtained}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    GuidelineRateObtained: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="3">Assessed / adopted rate of valuation</td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="AssessedAdoptedRate"
                minRows={1}
                size="small"
                value={data.AssessedAdoptedRate}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    AssessedAdoptedRate: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="3">Estimated value of land</td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="EstimatedLandValue"
                minRows={1}
                size="small"
                value={data.EstimatedLandValue}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    EstimatedLandValue: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="4">Part – B (Valuation of Building)</td>
            <td></td>
            <td colSpan="35"></td>
          </tr>
          <tr>
            <td rowSpan="12">1.</td>
            <td>a)</td>
            <td colSpan="2">
              Type of Building (Residential / Commercial / Industrial)
            </td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                multiline
                id="TypeOfBuilding"
                minRows={2}
                size="small"
                value={data.TypeOfBuilding}
                onChange={(newValue) => {
                  setData({ ...data, TypeOfBuilding: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>b)</td>
            <td colSpan="2">
              Type of construction (Load bearing / RCC / Steel Framed)
            </td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                multiline
                id="TypeOfConstruction"
                minRows={2}
                size="small"
                value={data.TypeOfConstruction}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TypeOfConstruction: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>c)</td>
            <td colSpan="2">Year of construction</td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="YearOfConstruction"
                minRows={1}
                size="small"
                value={data.YearOfConstruction}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    YearOfConstruction: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>d)</td>
            <td colSpan="2">
              Number of floors and height of each floor including basement, if
              any
            </td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="NumberOfFloorsAndHeight"
                multiline
                minRows={3}
                size="small"
                value={data.NumberOfFloorsAndHeight}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    NumberOfFloorsAndHeight: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>e)</td>
            <td colSpan="2">Plinth area floor-wise</td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="PlinthAreaFloorWise"
                minRows={1}
                size="small"
                value={data.PlinthAreaFloorWise}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    PlinthAreaFloorWise: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="3">f)</td>
            <td colSpan="2">Condition of the building</td>
            <td></td>
            <td colSpan="35"></td>
          </tr>
          <tr>
            <td>i)</td>
            <td>Exterior – Excellent, Good, Normal, Poor</td>
            <td></td>
            <td colSpan="35">
              <TextField
                multiline
                fullWidth
                id="Exterior"
                minRows={2}
                size="small"
                value={data.Exterior}
                onChange={(newValue) => {
                  setData({ ...data, Exterior: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>ii)</td>
            <td>Inferior - Excellent, Good, Normal, Poor</td>
            <td></td>
            <td colSpan="35">
              <TextField
                multiline
                fullWidth
                id="Inferior"
                minRows={2}
                size="small"
                value={data.Inferior}
                onChange={(newValue) => {
                  setData({ ...data, Inferior: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>g)</td>
            <td colSpan="2">
              Date of issue and validity of layout of approved map / plan
            </td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="DateOfIssueValidity"
                multiline
                minRows={2}
                size="small"
                value={data.DateOfIssueValidity}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    DateOfIssueValidity: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>h)</td>
            <td colSpan="2">Approved map / plan issuing authority</td>
            <td></td>
            <td colSpan="35">
              <TextField
                fullWidth
                id="ApprovedMapPlan"
                minRows={1}
                size="small"
                value={data.ApprovedMapPlan}
                onChange={(newValue) => {
                  setData({ ...data, ApprovedMapPlan: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>i)</td>
            <td colSpan="2">
              Whether genuineness or authenticity of approved map / plan is
              verified
            </td>
            <td></td>
            <td colSpan="35">
              <TextField
                multiline
                fullWidth
                id="GenuinenessOrAuthenticity"
                minRows={2}
                size="small"
                value={data.GenuinenessOrAuthenticity}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    GenuinenessOrAuthenticity: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>j)</td>
            <td colSpan="2">
              Any other comments by our empanelled valuers on authentic of
              approved plan
            </td>
            <td></td>
            <td colSpan="35">
              <TextField
                multiline
                fullWidth
                id="commentByEmpanelledValuers"
                minRows={3}
                size="small"
                value={data.commentByEmpanelledValuers}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    commentByEmpanelledValuers: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PartAB;
