import React from "react";

function SpecificationOfConstruction2Preview({ data }) {
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
            <td colSpan="2">Compound wall</td>
            <td colSpan="10">{data.compoundwall}</td>
          </tr>

          <tr>
            <td colSpan="2">Length</td>
            <td colSpan="10">{data.length}</td>
          </tr>
          <tr>
            <td colSpan="2">Type of construction</td>
            <td colSpan="10">{data.typeOfConstruction}</td>
          </tr>
          <tr>
            <td rowSpan="7">3.</td>
            <td colSpan="2">Electrical installation</td>
            <td colSpan="10">{data.electricalInstallation}</td>
          </tr>
          <tr>
            <td colSpan="2">Type of wiring </td>
            <td colSpan="10">{data.typeOfWiring}</td>
          </tr>
          <tr>
            <td colSpan="2">Class of fittings (superior / ordinary / poor) </td>
            <td colSpan="10">{data.classOfFittings}</td>
          </tr>

          <tr>
            <td colSpan="2">Fan points</td>
            <td colSpan="10">{data.fanPoints}</td>
          </tr>
          <tr>
            <td colSpan="2">Number of light points</td>
            <td colSpan="10">{data.numberOfLightPoints}</td>
          </tr>
          <tr>
            <td colSpan="2">Spare plug points</td>
            <td colSpan="10">{data.sparePlugPoints}</td>
          </tr>
          <tr>
            <td colSpan="2">Any other item</td>
            <td colSpan="10">{data.anyOtherItem}</td>
          </tr>
          <tr>
            <td rowSpan="7">4</td>
            <td colSpan="10">Plumbing installation</td>
            {/* <td colSpan="12"></td> */}
          </tr>
          <tr>
            <td colSpan="2">a)No. of water closets and their type</td>
            <td colSpan="10">{data.noOfWaterClosets}</td>
          </tr>
          <tr>
            <td colSpan="2">b)No. of wash basins </td>
            <td colSpan="10">{data.noOfWashBasins}</td>
          </tr>
          <tr>
            <td colSpan="2">c)No. of urinals</td>
            <td colSpan="10">{data.noOfUrinals}</td>
          </tr>
          <tr>
            <td colSpan="2">d)No. of bath tubs</td>
            <td colSpan="10">{data.noOfBathTubs}</td>
          </tr>
          <tr>
            <td colSpan="2">e)Water meter, taps, etc. </td>
            <td colSpan="10">{data.water}</td>
          </tr>
          <tr>
            <td colSpan="2">f)Any other fixtures</td>
            <td colSpan="10">{data.anyOtherFixtures}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SpecificationOfConstruction2Preview;
