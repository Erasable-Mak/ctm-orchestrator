import React from "react";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function DetailsOfValuation({ data }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <td style={{ width: "55px" }}>Sr. no.</td>
            <td style={{ width: "120px" }}>Particular of item</td>
            <td style={{ width: "120px" }}>Plinth area</td>
            <td style={{ width: "120px" }}>Roof height</td>
            <td style={{ width: "120px" }}>Area of building</td>
            <td style={{ width: "120px" }}>
              Estimated replacement rate of construction Rs.
            </td>
            <td style={{ width: "120px" }}>Replacement cost Rs.</td>
            <td style={{ width: "120px" }}>Depreciation cost Rs.</td>
            <td style={{ width: "120px" }}>Net value after depreciation</td>
          </tr>
          <tr>
            <td></td>
            <td>Ground floor</td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorPlinth"
                minRows={1}
                size="small"
                value={data.FirstFloorPlinth}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorPlinth: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorRoof"
                minRows={1}
                size="small"
                value={data.FirstFloorRoof}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorRoof: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorAreaBuilding"
                minRows={1}
                size="small"
                value={data.FirstFloorAreaBuilding}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorAreaBuilding: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorRateConstruction"
                minRows={1}
                size="small"
                value={data.FirstFloorRateConstruction}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorRateConstruction: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorPlacementCost"
                minRows={1}
                size="small"
                value={data.FirstFloorPlacementCost}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorPlacementCost: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorValueAfterDepreciation"
                minRows={1}
                size="small"
                value={data.FirstFloorValueAfterDepreciation}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorValueAfterDepreciation: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorParticular"
                minRows={1}
                size="small"
                value={data.FirstFloorParticular}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorParticular: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>First floor</td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorPlinth"
                minRows={1}
                size="small"
                value={data.FirstFloorPlinth}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorPlinth: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorRoof"
                minRows={1}
                size="small"
                value={data.FirstFloorRoof}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorRoof: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorAreaBuilding"
                minRows={1}
                size="small"
                value={data.FirstFloorAreaBuilding}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorAreaBuilding: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorRateConstruction"
                minRows={1}
                size="small"
                value={data.FirstFloorRateConstruction}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorRateConstruction: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorPlacementCost"
                minRows={1}
                size="small"
                value={data.FirstFloorPlacementCost}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorPlacementCost: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="FirstFloorValueAfterDepreciation"
                minRows={1}
                size="small"
                value={data.FirstFloorValueAfterDepreciation}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    FirstFloorValueAfterDepreciation: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="GroundFloorParticular"
                minRows={1}
                size="small"
                value={data.GroundFloorParticular}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    GroundFloorParticular: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>Other floor, if any</td>
            <td>
              <TextField
                fullWidth
                id="OtherFloorPlinth"
                minRows={1}
                size="small"
                value={data.OtherFloorPlinth}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    OtherFloorPlinth: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="OtherFloorRoof"
                minRows={1}
                size="small"
                value={data.OtherFloorRoof}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    OtherFloorRoof: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="OtherFloorAreaBuilding"
                minRows={1}
                size="small"
                value={data.OtherFloorAreaBuilding}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    OtherFloorAreaBuilding: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="OtherFloorRateConstruction"
                minRows={1}
                size="small"
                value={data.OtherFloorRateConstruction}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    OtherFloorRateConstruction: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="OtherFloorPlacementCost"
                minRows={1}
                size="small"
                value={data.OtherFloorPlacementCost}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    OtherFloorPlacementCost: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="OtherFloorValueAfterDepreciation"
                minRows={1}
                size="small"
                value={data.OtherFloorValueAfterDepreciation}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    OtherFloorValueAfterDepreciation: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="OtherFloorParticular"
                minRows={1}
                size="small"
                value={data.OtherFloorParticular}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    OtherFloorParticular: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td>
              <TextField
                fullWidth
                id="TotalFloorPlinth"
                minRows={1}
                size="small"
                value={data.TotalFloorPlinth}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TotalFloorPlinth: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="TotalFloorRoof"
                minRows={1}
                size="small"
                value={data.TotalFloorRoof}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TotalFloorRoof: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="TotalFloorAreaBuilding"
                minRows={1}
                size="small"
                value={data.TotalFloorAreaBuilding}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TotalFloorAreaBuilding: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="TotalFloorRateConstruction"
                minRows={1}
                size="small"
                value={data.TotalFloorRateConstruction}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TotalFloorRateConstruction: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="TotalFloorPlacementCost"
                minRows={1}
                size="small"
                value={data.TotalFloorPlacementCost}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TotalFloorPlacementCost: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="TotalFloorValueAfterDepreciation"
                minRows={1}
                size="small"
                value={data.TotalFloorValueAfterDepreciation}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TotalFloorValueAfterDepreciation: newValue.target.value,
                  });
                }}
              />
            </td>
            <td>
              <TextField
                fullWidth
                id="TotalFloorParticular"
                minRows={1}
                size="small"
                value={data.TotalFloorParticular}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TotalFloorParticular: newValue.target.value,
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

export default DetailsOfValuation;
