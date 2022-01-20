import React from "react";

function PartABPreview({ data }) {
  return (
    <div>
      <table id="Part-A-B" className="myTable">
        <tbody>
          <tr>
            <td colSpan="4" className="que">
              Part – A (Valuation of land)
            </td>
            <td></td>
            <td colSpan="35" className="ans"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="3">Size of plot</td>
            <td></td>
            <td colSpan="35">{data.SizeOfPlot}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="3">North &amp; South</td>
            <td></td>
            <td colSpan="35">{data.NorthSouth}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="3">East &amp; West</td>
            <td></td>
            <td colSpan="35">{data.EastWest}</td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="3">Total extent of the plot</td>
            <td></td>
            <td colSpan="35">{data.TotalExtentOfPlot}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="3">
              Prevailing market rate (Along with details /reference of at least
              two latest deals/transactions with respect to adjacent properties
              in the areas)
            </td>
            <td></td>
            <td colSpan="35">{data.PrevailingMarketRate}</td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="3">
              Guideline rate obtained from the Registrar’s Office (an evidence
              thereof to be enclosed)
            </td>
            <td></td>
            <td colSpan="35">{data.GuidelineRateObtained}</td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="3">Assessed / adopted rate of valuation</td>
            <td></td>
            <td colSpan="35">{data.AssessedAdoptedRate}</td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="3">Estimated value of land</td>
            <td></td>
            <td colSpan="35">{data.EstimatedLandValue}</td>
          </tr>
          <tr>
            <td colSpan="4">Part – B (Valuation of Building)</td>
            <td></td>
            <td colSpan="35"></td>
          </tr>
          <tr>
            <td rowSpan="12">1.</td>
            <td>a)</td>
            <td colSpan="2">
              Type of Building (Residential / Commercial / Industrial)
            </td>
            <td></td>
            <td colSpan="35">{data.TypeOfBuilding}</td>
          </tr>
          <tr>
            <td>b)</td>
            <td colSpan="2">
              Type of construction (Load bearing / RCC / Steel Framed)
            </td>
            <td></td>
            <td colSpan="35">{data.TypeOfConstruction}</td>
          </tr>
          <tr>
            <td>c)</td>
            <td colSpan="2">Year of construction</td>
            <td></td>
            <td colSpan="35">{data.YearOfConstruction}</td>
          </tr>
          <tr>
            <td>d)</td>
            <td colSpan="2">
              Number of floors and height of each floor including basement, if
              any
            </td>
            <td></td>
            <td colSpan="35">{data.NumberOfFloorsAndHeight}</td>
          </tr>
          <tr>
            <td>e)</td>
            <td colSpan="2">Plinth area floor-wise</td>
            <td></td>
            <td colSpan="35">{data.PlinthAreaFloorWise}</td>
          </tr>
          <tr>
            <td rowSpan="3">f)</td>
            <td colSpan="2">Condition of the building</td>
            <td></td>
            <td colSpan="35"></td>
          </tr>
          <tr>
            <td>i)</td>
            <td>Exterior – Excellent, Good, Normal, Poor</td>
            <td></td>
            <td colSpan="35">{data.Exterior}</td>
          </tr>
          <tr>
            <td>ii)</td>
            <td>Inferior - Excellent, Good, Normal, Poor</td>
            <td></td>
            <td colSpan="35">{data.Inferior}</td>
          </tr>
          <tr>
            <td>g)</td>
            <td colSpan="2">
              Date of issue and validity of layout of approved map / plan
            </td>
            <td></td>
            <td colSpan="35">{data.DateOfIssueValidity}</td>
          </tr>
          <tr>
            <td>h)</td>
            <td colSpan="2">Approved map / plan issuing authority</td>
            <td></td>
            <td colSpan="35">{data.ApprovedMapPlan}</td>
          </tr>
          <tr>
            <td>i)</td>
            <td colSpan="2">
              Whether genuineness or authenticity of approved map / plan is
              verified
            </td>
            <td></td>
            <td colSpan="35">{data.GenuinenessOrAuthenticity}</td>
          </tr>
          <tr>
            <td>j)</td>
            <td colSpan="2">
              Any other comments by our empanelled valuers on authentic of
              approved plan
            </td>
            <td></td>
            <td colSpan="35">{data.commentByEmpanelledValuers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PartABPreview;
