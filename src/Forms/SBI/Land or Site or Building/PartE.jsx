import React from "react";
import TextField from "@mui/material/TextField";

function PartE({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <td>1.</td>
            <td className="que" colSpan="2">
              Seperate toilet room
            </td>
            <td className="ans" colSpan="10">
              <TextField
                fullWidth
                id="SeperateToiletRoom"
                size="small"
                type="number"
                value={data.SeperateToiletRoom}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    SeperateToiletRoom: +newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Seperate lumber room</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="SeperateLumberRoom"
                size="small"
                type="number"
                value={data.SeperateLumberRoom}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    SeperateLumberRoom: +newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Seperate water tank/ sump</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="SeperateWaterTank"
                size="small"
                type="number"
                value={data.SeperateWaterTank}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    SeperateWaterTank: +newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">Trees, gardening</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="TreesGardening"
                size="small"
                type="number"
                value={data.TreesGardening}
                onChange={(newValue) => {
                  setData({ ...data, TreesGardening: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total</td>
            <td colSpan="10">
              {
                (data.TotalE =
                  +data.SeperateToiletRoom +
                  +data.SeperateLumberRoom +
                  +data.SeperateWaterTank +
                  +data.TreesGardening)
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PartE;
