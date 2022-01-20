import React from "react";
import TextField from "@mui/material/TextField";

function ValuationOfAgriculturalLand({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
        <tr>
            <th>III.</th>
            <th className="que" colSpan="2">
              Valuation of Agricultural Land
            </th>
            <th className="ans" colSpan="10"></th>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">Size of Land</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="SizeofLand"
                minRows={1}
                size="small"
                value={data.SizeofLand}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    SizeofLand: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">North & South</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="NorthSouth"
                minRows={1}
                size="small"
                value={data.NorthSouth}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    NorthSouth: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">East & West</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="EastWest"
                minRows={1}
                size="small"
                value={data.EastWest}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    EastWest: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Total extent of the land</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="TotalExtentLand"
                minRows={1}
                size="small"
                value={data.TotalExtentLand}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TotalExtentLand: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Prevailing market rate (per acre) (Along with details/reference of at-least two latest deals/transactions with respect to adjacent properties in the areas)</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="PrevailingMarketRate"
                multiline
                minRows={3}
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
            <td colSpan="2">Guideline rate obtained from the Registar's Office/Mandal Revenue office (an evidence there of to be enclosed)</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="GuidelineRate"
                multiline
                minRows={2}
                size="small"
                value={data.GuidelineRate}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    GuidelineRate: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Assessed / adopted rate of valuation</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="AssessedAdoptedRatevaluation"
                minRows={1}
                size="small"
                value={data.AssessedAdoptedRatevaluation}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    AssessedAdoptedRatevaluation: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Estimated value of land</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="EstimatedValueLand"
                minRows={1}
                size="small"
                value={data.EstimatedValueLand}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    EstimatedValueLand: newValue.target.value,
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

export default ValuationOfAgriculturalLand;
