import React from "react";
import TextField from "@mui/material/TextField";

function PartF({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <td>1.</td>
            <td className="que" colSpan="2">
              Water supply arrangements
            </td>
            <td className="ans" colSpan="10">
              <TextField
                fullWidth
                id="WaterSupplyArrangements"
                size="small"
                type="number"
                value={data.WaterSupplyArrangements}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    WaterSupplyArrangements: +newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Drainage arrangements</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="DrainageArrangements"
                size="small"
                type="number"
                value={data.DrainageArrangements}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    DrainageArrangements: +newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Compound wall</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="CompoundWall"
                size="small"
                type="number"
                value={data.CompoundWall}
                onChange={(newValue) => {
                  setData({ ...data, CompoundWall: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">C. B. deposits, fittings etc.</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="DepositsFittings"
                size="small"
                type="number"
                value={data.DepositsFittings}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    DepositsFittings: +newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Pavement</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="PavementF"
                size="small"
                type="number"
                value={data.PavementF}
                onChange={(newValue) => {
                  setData({ ...data, PavementF: +newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total</td>
            <td colSpan="10">
              {
                (data.TotalF =
                  +data.WaterSupplyArrangements +
                  +data.DrainageArrangements +
                  +data.CompoundWall +
                  +data.DepositsFittings +
                  +data.PavementF)
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PartF;
