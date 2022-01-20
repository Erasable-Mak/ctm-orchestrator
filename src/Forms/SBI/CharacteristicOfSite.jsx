import React from "react";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function CharacteristicOfSite({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <th>II.</th>
            <th className="que" colSpan="2">
              CHARACTERISTICS OF THE SITE
            </th>
            <th className="ans" colSpan="10"></th>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">Classification of localty</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="ClassificationLocalty"
                multiline
                minRows={1}
                size="small"
                value={data.ClassificationLocalty}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    ClassificationLocalty: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Development of surrounding areas</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="DevelopmentArea"
                multiline
                minRows={1}
                size="small"
                value={data.DevelopmentArea}
                onChange={(newValue) => {
                  setData({ ...data, DevelopmentArea: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Possibility of frequent flooding / sub-merging</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="PossibilityFlooding"
                multiline
                minRows={1}
                size="small"
                value={data.PossibilityFlooding}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    PossibilityFlooding: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">
              Feasibility to the Civic amenities like school, hospital, bus
              stop. market etc.
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="CivicAmenities"
                multiline
                minRows={1}
                size="small"
                value={data.CivicAmenities}
                onChange={(newValue) => {
                  setData({ ...data, CivicAmenities: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Level of land with topographical conditions</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="LevelOfLand"
                multiline
                minRows={1}
                size="small"
                value={data.LevelOfLand}
                onChange={(newValue) => {
                  setData({ ...data, LevelOfLand: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Shape of land</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="ShapeOfLand"
                multiline
                minRows={1}
                size="small"
                value={data.ShapeOfLand}
                onChange={(newValue) => {
                  setData({ ...data, ShapeOfLand: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Type of use to which it can be put</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="TypeOfUsePut"
                multiline
                minRows={1}
                size="small"
                value={data.TypeOfUsePut}
                onChange={(newValue) => {
                  setData({ ...data, TypeOfUsePut: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>8.</td>
            <td colSpan="2">Any usage restriction</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="UsageRestriction"
                multiline
                minRows={1}
                size="small"
                value={data.UsageRestriction}
                onChange={(newValue) => {
                  setData({ ...data, UsageRestriction: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">Is plot in town planning approved layout?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="TownPlanningLayout"
                multiline
                minRows={1}
                size="small"
                value={data.TownPlanningLayout}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TownPlanningLayout: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">Corner plot or intermittent plot?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="PlotSituated"
                multiline
                minRows={1}
                size="small"
                value={data.PlotSituated}
                onChange={(newValue) => {
                  setData({ ...data, PlotSituated: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>11.</td>
            <td colSpan="2">Road facilities</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="RoadFacilities"
                multiline
                minRows={1}
                size="small"
                value={data.RoadFacilities}
                onChange={(newValue) => {
                  setData({ ...data, RoadFacilities: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>12.</td>
            <td colSpan="2">Type of road available at present</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="TypeOfRoadAvailable"
                multiline
                minRows={1}
                size="small"
                value={data.TypeOfRoadAvailable}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    TypeOfRoadAvailable: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>13.</td>
            <td colSpan="2">
              Width of road - is it below 20 ft. or more than 20 ft.
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="WidthOfRoad"
                multiline
                minRows={1}
                size="small"
                value={data.WidthOfRoad}
                onChange={(newValue) => {
                  setData({ ...data, WidthOfRoad: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>14.</td>
            <td colSpan="2">Is it a land - locked land?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="LandLocked"
                multiline
                minRows={1}
                size="small"
                value={data.LandLocked}
                onChange={(newValue) => {
                  setData({ ...data, LandLocked: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>15.</td>
            <td colSpan="2">Water Potentiality</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="WaterPotentiality"
                multiline
                minRows={1}
                size="small"
                value={data.WaterPotentiality}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    WaterPotentiality: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>16.</td>
            <td colSpan="2">Underground sewerage system</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="SewerageSystem"
                multiline
                minRows={1}
                size="small"
                value={data.SewerageSystem}
                onChange={(newValue) => {
                  setData({ ...data, SewerageSystem: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>17.</td>
            <td colSpan="2">Is power supply available at the site?</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="PowerSupplyAvailability"
                multiline
                minRows={1}
                size="small"
                value={data.PowerSupplyAvailability}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    PowerSupplyAvailability: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan={data.advantageOfSite.length + 1}>18</td>
            <td colSpan="2">Advantage of the site</td>
            <td colSpan="10">
              <Button
                variant="contained"
                onClick={() => {
                  setData({
                    ...data,
                    advantageOfSite: [...data.advantageOfSite, ""],
                  });
                }}
              >
                Add
              </Button>
            </td>
          </tr>
          {data.advantageOfSite.map((advantage, index) => {
            return (
              <tr key={index}>
                <td colSpan="5">
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      id={advantage}
                      size="small"
                      value={advantage}
                      onChange={(e) => {
                        let newArray = [...data.advantageOfSite];
                        newArray[index] = e.target.value;
                        setData({
                          ...data,
                          advantageOfSite: newArray,
                        });
                      }}
                    />
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        let newArray = [...data.advantageOfSite];
                        newArray.splice(index, 1);
                        setData({
                          ...data,
                          advantageOfSite: newArray,
                        });
                      }}
                    >
                      Delete
                    </Button>
                  </Stack>
                </td>
              </tr>
            );
          })}

          <tr>
            <td rowSpan="2">19</td>
            <td colSpan="2">
              Special remarks, if any, like threat of acquisition of land for
              public servoce purposes, road widening or applicability of CRZ
              provisions etc. (Distence from sea-coast / tidal level must be
              incorporated)
            </td>
            <td colSpan="10">
              <Button
                variant="contained"
                onClick={() => {
                  setData({
                    ...data,
                    specialRemarks: [...data.specialRemarks, ""],
                  });
                }}
              >
                Add
              </Button>
            </td>
          </tr>
          {data.specialRemarks.map((remark, index) => {
            return (
              <tr key={index}>
                <td colSpan="5">
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      id={remark}
                      size="small"
                      value={remark}
                      onChange={(e) => {
                        let newArray = [...data.specialRemarks];
                        newArray[index] = e.target.value;
                        setData({
                          ...data,
                          specialRemarks: newArray,
                        });
                      }}
                    />
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        let newArray = [...data.specialRemarks];
                        newArray.splice(index, 1);
                        setData({
                          ...data,
                          specialRemarks: newArray,
                        });
                      }}
                    >
                      Delete
                    </Button>
                  </Stack>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CharacteristicOfSite;
