import React from "react";

import TextField from "@mui/material/TextField";

function SpecificationOfConstruction2({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <th>I.</th>
            <th className="que" colSpan="2">
              DESCRIPTION
            </th>
            <th className="ans" colSpan="10">
              Ground Floor
            </th>
          </tr>

          <tr>
            <td rowSpan="3">2.</td>
            <td>Compound wall</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="compoundwall"
                size="small"
                value={data.compoundwall}
                onChange={(newValue) => {
                  setData({ ...data, compoundwall: newValue.target.value });
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Length</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="length"
                size="small"
                value={data.length}
                onChange={(newValue) => {
                  setData({ ...data, length: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Type of construction</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="typeOfConstruction"
                size="small"
                value={data.typeOfConstruction}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    typeOfConstruction: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="7">3.</td>
            <td>Electrical installation</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="electricalInstallation"
                size="small"
                value={data.electricalInstallation}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    electricalInstallation: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Type of wiring </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="typeOfWiring"
                size="small"
                value={data.typeOfWiring}
                onChange={(newValue) => {
                  setData({ ...data, typeOfWiring: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Class of fittings (superior / ordinary / poor) </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="classOfFittings"
                size="small"
                value={data.classOfFittings}
                onChange={(newValue) => {
                  setData({ ...data, classOfFittings: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Number of light points</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="numberOfLightPoints"
                size="small"
                value={data.numberOfLightPoints}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    numberOfLightPoints: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Fan points</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="fanPoints"
                size="small"
                value={data.fanPoints}
                onChange={(newValue) => {
                  setData({ ...data, fanPoints: newValue.target.value });
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Spare plug points</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="sparePlugPoints"
                size="small"
                value={data.sparePlugPoints}
                onChange={(newValue) => {
                  setData({ ...data, sparePlugPoints: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Any other item</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="anyOtherItem"
                size="small"
                value={data.anyOtherItem}
                onChange={(newValue) => {
                  setData({ ...data, anyOtherItem: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="7">4</td>
            <td colSpan="8">Plumbing installation</td>
            {/* <td colSpan="12"></td> */}
          </tr>
          <tr>
            <td colSpan="2">a)No. of water closets and their type</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="noOfWaterClosets"
                size="small"
                value={data.noOfWaterClosets}
                onChange={(newValue) => {
                  setData({ ...data, noOfWaterClosets: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">b)No. of wash basins </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="noOfWashBasins"
                size="small"
                value={data.noOfWashBasins}
                onChange={(newValue) => {
                  setData({ ...data, noOfWashBasins: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">c)No. of urinals</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="noOfUrinals"
                size="small"
                value={data.noOfUrinals}
                onChange={(newValue) => {
                  setData({ ...data, noOfUrinals: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">d)No. of bath tubs</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="noOfBathTubs"
                size="small"
                value={data.noOfBathTubs}
                onChange={(newValue) => {
                  setData({ ...data, noOfBathTubs: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">e)Water meter, taps, etc. </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="water"
                size="small"
                value={data.water}
                onChange={(newValue) => {
                  setData({ ...data, water: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">f)Any other fixtures</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="anyOtherFixtures"
                size="small"
                value={data.anyOtherFixtures}
                onChange={(newValue) => {
                  setData({ ...data, anyOtherFixtures: newValue.target.value });
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SpecificationOfConstruction2;
