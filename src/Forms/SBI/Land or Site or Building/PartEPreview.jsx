import React from "react";

function PartEPreview({ data }) {
  return (
    <div>
      <table id="Part-E" className="myTable">
        <tbody>
          <tr>
            <td>1.</td>
            <td className="que" colSpan="2">
              Seperate toilet room
            </td>
            <td className="ans" colSpan="10">
              {data.SeperateToiletRoom}
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Seperate lumber room</td>
            <td colSpan="10">{data.SeperateLumberRoom}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Seperate water tank/ sump</td>
            <td colSpan="10">{data.SeperateWaterTank}</td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">Trees, gardening</td>
            <td colSpan="10">{data.TreesGardening}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total</td>
            <td colSpan="10">{data.TotalE}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PartEPreview;
