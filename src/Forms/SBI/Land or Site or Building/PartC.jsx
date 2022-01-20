import React from "react";

import TextField from "@mui/material/TextField";

function PartC({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <td>1.</td>
            <td className="que" colSpan="2">
              Portico
            </td>
            <td className="ans" colSpan="10">
              <TextField
                fullWidth
                id="Portico"
                size="small"
                type="number"
                value={data.Portico}
                onChange={(newValue) => {
                  setData({ ...data, Portico: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Ornamental front door</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="Ornamental"
                size="small"
                type="number"
                value={data.Ornamental}
                onChange={(newValue) => {
                  setData({ ...data, Ornamental: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">Sit out/ Verandah with steel grills</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="SitOutVerandah"
                size="small"
                type="number"
                value={data.SitOutVerandah}
                onChange={(newValue) => {
                  setData({ ...data, SitOutVerandah: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">Overhead water tank</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="OverheadTank"
                size="small"
                type="number"
                value={data.OverheadTank}
                onChange={(newValue) => {
                  setData({ ...data, OverheadTank: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Extra steel/ collapsible gates</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="ExtraSteel"
                size="small"
                type="number"
                value={data.ExtraSteel}
                onChange={(newValue) => {
                  setData({ ...data, ExtraSteel: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total</td>
            <td colSpan="10">
              {
                (data.TotalC =
                  data.Portico +
                  data.Ornamental +
                  data.SitOutVerandah +
                  data.OverheadTank +
                  data.ExtraSteel)
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PartC;
