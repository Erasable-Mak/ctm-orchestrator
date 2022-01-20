import React from "react";

import TextField from "@mui/material/TextField";

function SpecificationOfConstruction1({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <th>Sr. No</th>
            <th className="que" colSpan="2">
              DESCRIPTION
            </th>
            <th className="ans" colSpan="10">
              Ground Floor
            </th>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">Foundation</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="foundation"
                size="small"
                value={data.foundation}
                onChange={(newValue) => {
                  setData({ ...data, foundation: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Basement</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="basement"
                size="small"
                value={data.basement}
                onChange={(newValue) => {
                  setData({ ...data, basement: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Superstructure</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="superstructure"
                size="small"
                value={data.superstructure}
                onChange={(newValue) => {
                  setData({ ...data, superstructure: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">
              Joinery / Doors & Windows (please furnish details about size of
              frames, shutters, glazing, fitting etc. and specify the species of
              timber)
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="joineryDoorsWindows"
                multiline
                minRows={4}
                size="small"
                value={data.joineryDoorsWindows}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    joineryDoorsWindows: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">RCC works</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="rccworks"
                size="small"
                value={data.rccworks}
                onChange={(newValue) => {
                  setData({ ...data, rccworks: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Plastering</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="plastering"
                size="small"
                value={data.plastering}
                onChange={(newValue) => {
                  setData({ ...data, plastering: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Flooring, Skirting, dadoing</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="flooring"
                size="small"
                value={data.flooring}
                onChange={(newValue) => {
                  setData({ ...data, flooring: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>8.</td>
            <td colSpan="2">
              Special finish as marble, granite, wooden paneling, grills, etc
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="marbleGraniteWoodenGrills"
                size="small"
                value={data.marbleGraniteWoodenGrills}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    marbleGraniteWoodenGrills: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">Roofing including weather proof course</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="roofing"
                size="small"
                value={data.roofing}
                onChange={(newValue) => {
                  setData({ ...data, roofing: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">Drainage</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="drainage"
                size="small"
                value={data.drainage}
                onChange={(newValue) => {
                  setData({ ...data, drainage: newValue.target.value });
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
}

export default SpecificationOfConstruction1;
