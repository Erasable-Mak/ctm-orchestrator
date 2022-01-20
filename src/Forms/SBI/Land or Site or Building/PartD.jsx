import React from "react";

import TextField from "@mui/material/TextField";

function PartD({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <td>1.</td>
            <td className="que" colSpan="2">
              Wardrobes
            </td>
            <td className="ans" colSpan="10">
              <TextField
                fullWidth
                id="Wardrobes"
                size="small"
                type="number"
                value={data.Wardrobes}
                onChange={(newValue) => {
                  setData({ ...data, Wardrobes: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Glazed tiles</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="GlazedTiles"
                size="small"
                type="number"
                value={data.GlazedTiles}
                onChange={(newValue) => {
                  setData({ ...data, GlazedTiles: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Extra sinks and bath tub</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="ExtraSinks"
                size="small"
                type="number"
                value={data.ExtraSinks}
                onChange={(newValue) => {
                  setData({ ...data, ExtraSinks: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">Marble / Ceramic tiles flooring</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="MarbleCeramic"
                size="small"
                type="number"
                value={data.MarbleCeramic}
                onChange={(newValue) => {
                  setData({ ...data, MarbleCeramic: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Interior decorations</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="InteriorDecorations"
                size="small"
                type="number"
                value={data.InteriorDecorations}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    InteriorDecorations: +newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Architectural elevation works</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="ArchitecturalElevation"
                size="small"
                type="number"
                value={data.ArchitecturalElevation}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    ArchitecturalElevation: +newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Panelling works</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="PanellingWorks"
                size="small"
                type="number"
                value={data.PanellingWorks}
                onChange={(newValue) => {
                  setData({ ...data, PanellingWorks: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>8.</td>
            <td colSpan="2">Aluminium works</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="AluminiumWorks"
                size="small"
                type="number"
                value={data.AluminiumWorks}
                onChange={(newValue) => {
                  setData({ ...data, AluminiumWorks: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">Aluminium hand rails</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="AluminiumHandRails"
                size="small"
                type="number"
                value={data.AluminiumHandRails}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    AluminiumHandRails: +newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">False ceiling</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="FalseCeiling"
                size="small"
                type="number"
                value={data.FalseCeiling}
                onChange={(newValue) => {
                  setData({ ...data, FalseCeiling: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total</td>
            <td colSpan="10">
              {
                (data.TotalD =
                  data.Wardrobes +
                  data.GlazedTiles +
                  data.ExtraSinks +
                  data.MarbleCeramic +
                  data.InteriorDecorations +
                  data.ArchitecturalElevation +
                  data.PanellingWorks +
                  data.AluminiumWorks +
                  data.AluminiumHandRails +
                  data.FalseCeiling)
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PartD;
