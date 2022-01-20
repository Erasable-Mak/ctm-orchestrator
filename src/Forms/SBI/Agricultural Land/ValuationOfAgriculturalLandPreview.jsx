import React from "react";

function ValuationOfAgriculturalLandPreview({ data }) {
  return (
    <div>
      <table id="my-table2" className="myTable">
        <tbody>
        <tr>
            <th>III.</th>
            <th className="que" colSpan="2">
              Valuation of Agricultural Land
            </th>
            <th className="ans" colSpan="10"></th>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">Size of Land</td>
            <td colSpan="10">{data.SizeofLand}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">North & South</td>
            <td colSpan="10">{data.NorthSouth}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">East & West</td>
            <td colSpan="10">{data.EastWest}</td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Total extent of the land</td>
            <td colSpan="10">{data.TotalExtentLand}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Prevailing market rate (per acre) (Along with details/reference of at-least two latest deals/transactions with respect to adjacent properties in the areas)</td>
            <td colSpan="10">{data.PrevailingMarketRate}</td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">Guideline rate obtained from the Registar's Office/Mandal Revenue office (an evidence there of to be enclosed)</td>
            <td colSpan="10">{data.GuidelineRate}</td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Assessed / adopted rate of valuation</td>
            <td colSpan="10">{data.AssessedAdoptedRatevaluation}</td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Estimated value of land</td>
            <td colSpan="10">{data.EstimatedValueLand}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ValuationOfAgriculturalLandPreview;
