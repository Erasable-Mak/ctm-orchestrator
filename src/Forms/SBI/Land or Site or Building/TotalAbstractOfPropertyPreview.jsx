import React from "react";

function TotalAbstractOfPropertyPreview({ data }) {
  return (
    <div>
      <table id="Total-abstract" className="myTable">
        <tbody>
          <tr>
            <td>Part-A</td>
            <td className="que" colSpan="2">
              Land
            </td>
            <td className="ans" colSpan="10">
              {data.LandTotalAbstract}
            </td>
          </tr>
          <tr>
            <td>Part-B</td>
            <td colSpan="2">Buildings</td>
            <td colSpan="10">{data.BuildingsTotalAbstract}</td>
          </tr>
          <tr>
            <td>Part-C</td>
            <td colSpan="2">Extra Items</td>
            <td colSpan="10">{data.ExtraItems}</td>
          </tr>
          <tr>
            <td>Part-D</td>
            <td colSpan="2">Amenities</td>
            <td colSpan="10">{data.Amenities}</td>
          </tr>
          <tr>
            <td>Part-E</td>
            <td colSpan="2">Miscellaneous</td>
            <td colSpan="10">{data.Miscellaneous}</td>
          </tr>
          <tr>
            <td>Part-F</td>
            <td colSpan="2">services</td>
            <td colSpan="10">{data.Services}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total</td>
            <td colSpan="10">{data.TotalAbstract}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TotalAbstractOfPropertyPreview;
