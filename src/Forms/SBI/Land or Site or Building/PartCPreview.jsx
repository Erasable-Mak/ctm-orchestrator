import React from "react";

function PartCPreview({ data }) {
  return (
    <div>
      <table id="Part-C" className="myTable">
        <tbody>
          <tr>
            <td>1.</td>
            <td className="que" colSpan="2">
              Portico
            </td>
            <td className="ans" colSpan="10">
              {data.Portico}
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Ornamental front door</td>
            <td colSpan="10">{data.Ornamental}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Sit out/ Verandah with steel grills</td>
            <td colSpan="10">{data.SitOutVerandah}</td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">Overhead water tank</td>
            <td colSpan="10">{data.OverheadTank}</td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Extra steel/ collapsible gates</td>
            <td colSpan="10">{data.ExtraSteel}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total</td>
            <td colSpan="10">{data.TotalC}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PartCPreview;
