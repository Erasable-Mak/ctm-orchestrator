import React from "react";

function CharacteristicOfSitePreview({ data }) {
  return (
    <div>
      <table id="my-table2" className="myTable">
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
            <td colSpan="10">{data.ClassificationLocalty}</td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Development of surrounding areas</td>
            <td colSpan="10">{data.DevelopmentArea}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Possibility of frequent flooding / sub-merging</td>
            <td colSpan="10">{data.PossibilityFlooding}</td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">
              Feasibility to the Civic amenities like school, hospital, bus
              stop. market etc.
            </td>
            <td colSpan="10">{data.CivicAmenities}</td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Level of land with topographical conditions</td>
            <td colSpan="10">{data.LevelOfLand}</td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Shape of land</td>
            <td colSpan="10">{data.ShapeOfLand}</td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Type of use to which it can be put</td>
            <td colSpan="10">{data.TypeOfUsePut}</td>
          </tr>
          <tr>
            <td>8.</td>
            <td colSpan="2">Any usage restriction</td>
            <td colSpan="10">{data.UsageRestriction}</td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">Is plot in town planning approved layout?</td>
            <td colSpan="10">{data.TownPlanningLayout}</td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">Corner plot or intermittent plot?</td>
            <td colSpan="10">{data.PlotSituated}</td>
          </tr>
          <tr>
            <td>11.</td>
            <td colSpan="2">Road facilities</td>
            <td colSpan="10">{data.RoadFacilities}</td>
          </tr>
          <tr>
            <td>12.</td>
            <td colSpan="2">Type of road available at present</td>
            <td colSpan="10">{data.TypeOfRoadAvailable}</td>
          </tr>
          <tr>
            <td>13.</td>
            <td colSpan="2">
              Width of road - is it below 20 ft. or more than 20 ft.
            </td>
            <td colSpan="10">{data.WidthOfRoad}</td>
          </tr>
          <tr>
            <td>14.</td>
            <td colSpan="2">Is it a land - locked land?</td>
            <td colSpan="10">{data.LandLocked}</td>
          </tr>
          <tr>
            <td>15.</td>
            <td colSpan="2">Water Potentiality</td>
            <td colSpan="10">{data.WaterPotentiality}</td>
          </tr>
          <tr>
            <td>16.</td>
            <td colSpan="2">Underground sewerage system</td>
            <td colSpan="10">{data.SewerageSystem}</td>
          </tr>
          <tr>
            <td>17.</td>
            <td colSpan="2">Is power supply available at the site?</td>
            <td colSpan="10">{data.PowerSupplyAvailability}</td>
          </tr>
          <tr>
            <td rowSpan={data.advantageOfSite.length + 1}>18</td>
            <td colSpan="2">Advantage of the site</td>
            <td colSpan="10"></td>
          </tr>
          {data.advantageOfSite.map((advantage, index) => {
            return (
              <tr key={index}>
                <td colSpan="2">{advantage}</td>
                <td colSpan="5"></td>
              </tr>
            );
          })}
          <tr>
            <td rowSpan="3">19</td>
            <td colSpan="2">
              Special remarks, if any, like threat of acquisition of land for
              public servoce purposes, road widening or applicability of CRZ
              provisions etc. (Distence from sea-coast / tidal level must be
              incorporated)
            </td>
            <td colSpan="10"></td>
          </tr>
          {data.specialRemarks.map((remark, index) => {
            return (
              <tr key={index}>
                <td colSpan="2">{remark}</td>
                <td colSpan="5"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CharacteristicOfSitePreview;
