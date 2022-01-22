import React from "react";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  purposeOfValuationOptions,
  classificationOfArea1Options,
  classificationOfArea2Options,
} from "../../DropDownOptions/options";
import DropDown from "../../components/DropDown";

import "../SBI/SBI.css";

function General({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <th>I.</th>
            <th className="que" colSpan="2">
              GENERAL
            </th>
            <th className="ans" colSpan="10"></th>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">Purpose for which the valuation is made</td>
            <td colSpan="10">
              <DropDown
                id="purposeOfValuation"
                items={purposeOfValuationOptions}
                value={data.purposeOfValuation}
                setValue={(value) =>
                  setData({ ...data, purposeOfValuation: value })
                }
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="2">2.</td>
            <td>a)</td>
            <td>Date of inspection</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="doinspection"
                size="small"
                value={data.dateOfInspection}
                onChange={(newValue) => {
                  setData({ ...data, dateOfInspection: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>b)</td>
            <td>Date on which the valuation is made</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="dovaluation"
                size="small"
                value={data.dateOfValuation}
                onChange={(newValue) => {
                  setData({ ...data, dateOfValuation: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan={data.documentsProducedForPerusal.length + 1}>3</td>
            <td colSpan="2">List of documents produced for perusal</td>
            <td colSpan="10">
              <Button
                variant="contained"
                onClick={() => {
                  setData({
                    ...data,
                    documentsProducedForPerusal: [
                      ...data.documentsProducedForPerusal,
                      "",
                    ],
                  });
                }}
              >
                Add
              </Button>
            </td>
          </tr>
          {data.documentsProducedForPerusal.map((document, index) => {
            return (
              <tr key={index}>
                <td colSpan="5">
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      id={document}
                      size="small"
                      value={document}
                      onChange={(e) => {
                        let newArray = [...data.documentsProducedForPerusal];
                        newArray[index] = e.target.value;
                        setData({
                          ...data,
                          documentsProducedForPerusal: newArray,
                        });
                      }}
                    />
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        let newArray = [...data.documentsProducedForPerusal];
                        newArray.splice(index, 1);
                        setData({
                          ...data,
                          documentsProducedForPerusal: newArray,
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
            <td>4.</td>
            <td colSpan="2">
              Name of the owner(s) and his / their address (es) with Phone no.
              (details of share of each owner in case of joint ownership)
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="ownerInfo"
                multiline
                minRows={4}
                size="small"
                value={data.ownerInfo}
                onChange={(newValue) => {
                  console.log(newValue.target.value);
                  setData({ ...data, ownerInfo: newValue.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">
              Brief description of the property (Including leasehold / freehold
              etc)
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="propertyDescription"
                multiline
                minRows={2}
                size="small"
                value={data.propertyDescription}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    propertyDescription: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Location of property</td>
            <td colSpan="10">
              {data.completeAddress +
                "\n" +
                (data.locality ? data.locality : "")}
            </td>
          </tr>
          <tr>
            <td></td>
            <td>a)</td>
            <td>Plot No. / Survey No.</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="plotNo"
                multiline
                minRows={1}
                size="small"
                value={data.plotNo}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    plotNo: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>b)</td>
            <td>Door No.</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="doorNo"
                multiline
                minRows={1}
                size="small"
                value={data.doorNo}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    doorNo: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>c)</td>
            <td>T. S. No. / Village</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="tsNo"
                multiline
                minRows={1}
                size="small"
                value={data.tsNo}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    tsNo: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>d)</td>
            <td>Ward / Taluka</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="Taluka"
                multiline
                minRows={1}
                size="small"
                value={data.taluka}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    taluka: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>e)</td>
            <td>Mandal / District</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="district"
                multiline
                minRows={1}
                size="small"
                value={data.district}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    district: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Postal address of the property</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td rowSpan="5">8</td>
          </tr>
          <tr>
            <td colSpan="2">City / Town</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="city"
                multiline
                minRows={1}
                size="small"
                value={data.city}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    city: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Residential Area</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="residential area"
                multiline
                minRows={1}
                size="small"
                value={data.residentalArea}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    residentialArea: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Commercial Area</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="Commertial area"
                multiline
                minRows={1}
                size="small"
                value={data.commercialArea}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    commercialArea: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Industrial Area</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="Industrial area"
                multiline
                minRows={1}
                size="small"
                value={data.industrialArea}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    industrialArea: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">Classification of the area</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td>i)</td>
            <td>High / Middle / Poor</td>
            <td colSpan="10">
              <DropDown
                id="classification of area 1"
                items={classificationOfArea1Options}
                value={data.classificationOfArea1}
                setValue={(value) =>
                  setData({ ...data, classificationOfArea1: value })
                }
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>ii)</td>
            <td>Urban / Semi Urban / Rural</td>
            <td colSpan="10">
              <DropDown
                id="classification of area 2"
                items={classificationOfArea2Options}
                value={data.classificationOfArea2}
                setValue={(value) =>
                  setData({ ...data, classificationOfArea2: value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">
              Coming under Corporation limit / Village Panchayat / Muncipality
            </td>
            <td colSpan="10">
              <DropDown
                id="Comes Under"
                items={[
                  { id: "Corporation limit", value: "Corporation limit" },
                  { id: "Village Panchayat", value: "Village Panchayat" },
                  { id: "Muncipality", value: "Muncipality" },
                ]}
                value={data.comesUnder}
                setValue={(value) => setData({ ...data, comesUnder: value })}
              />
            </td>
          </tr>
          <tr>
            <td>11.</td>
            <td colSpan="2">
              whether covered under any state / Central Govt. enactments (e.g.
              Urban Land Ceiling Act) or notified under agency area / scheduled
              area / cantonment area
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="covered under something"
                multiline
                minRows={5}
                size="small"
                value={data.coveredUnderSomething}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    coveredUnderSomething: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>12.</td>
            <td colSpan="2">
              In case it is an agricultural land. any conversion to house site
              plots is contemplated
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="If agricultural land"
                multiline
                minRows={3}
                size="small"
                value={data.ifAgriculturalLand}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    ifAgriculturalLand: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="10">13.</td>
          </tr>
          <tr>
            <td colSpan="2">Boundaries of the property</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">North</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="north"
                multiline
                minRows={1}
                size="small"
                value={data.north}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    north: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">South</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="south"
                multiline
                minRows={1}
                size="small"
                value={data.south}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    south: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">East</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="east"
                multiline
                minRows={1}
                size="small"
                value={data.east}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    east: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">West</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="west"
                multiline
                minRows={1}
                size="small"
                value={data.west}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    west: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">North-East</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="north-east"
                multiline
                minRows={1}
                size="small"
                value={data.northEast}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    northEast: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">North-West</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="North-west"
                multiline
                minRows={1}
                size="small"
                value={data.northWest}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    northWest: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">South-East</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="South-East"
                multiline
                minRows={1}
                size="small"
                value={data.southEast}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    southEast: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">South-West</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="south-west"
                multiline
                minRows={1}
                size="small"
                value={data.southWest}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    southWest: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="12">14.</td>
          </tr>
          <tr>
            <td colSpan="2" rowSpan="3">
              Dimensions of the site
            </td>
          </tr>
          <tr>
            <td colSpan="2" rowSpan="1">
              A
            </td>
            <td colSpan="3" rowSpan="1">
              B
            </td>
          </tr>
          <tr>
            <td colSpan="2">As per the Deed</td>
            <td colSpan="3">Actuals</td>
          </tr>
          <tr>
            <td colSpan="2">North</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">South</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">East</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">West</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">North-East</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">North-West</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">South-East</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">South-West</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td>14.2</td>
            <td colSpan="2">Latitude, Longitude and Coordinates of the site</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="latLang"
                multiline
                minRows={1}
                size="small"
                value={data.latLang}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    latLang: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>15.</td>
            <td colSpan="2">Extent of the site</td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="Extent of the site"
                multiline
                minRows={1}
                size="small"
                value={data.extentOfSite}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    extentOfSite: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>16.</td>
            <td colSpan="2">
              Extent of the site considered for valuation (least of 14 A & 14 B)
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="Extent of site considered"
                multiline
                minRows={1}
                size="small"
                value={data.extentOfSiteConsidered}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    extentOfSiteConsidered: newValue.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>17.</td>
            <td colSpan="2">
              Whether occupied by the owner / tenant? If occupied by tenant,
              since how long? Rent received per month.
            </td>
            <td colSpan="10">
              <TextField
                fullWidth
                id="Whether occupied by the owner"
                multiline
                minRows={3}
                size="small"
                value={data.whetherOccupiedByOwner}
                onChange={(newValue) => {
                  setData({
                    ...data,
                    whetherOccupiedByOwner: newValue.target.value,
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

export default General;
