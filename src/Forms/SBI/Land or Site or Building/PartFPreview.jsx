import React from "react";

function PartFPreview({ data }) {
  return (
    <div>
      <table id="Part-F" className="myTable">
        <tbody>
          <tr>
            <td>1.</td>
            <td className="que" colSpan="2">
              Water supply arrangements
            </td>
            <td className="ans" colSpan="10">
              {data.WaterSupplyArrangements}
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Drainage arrangements</td>
            <td colSpan="10">{data.DrainageArrangements}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Compound wall</td>
            <td colSpan="10">{data.CompoundWall}</td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">C. B. deposits, fittings etc.</td>
            <td colSpan="10">{data.DepositsFittings}</td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Pavement</td>
            <td colSpan="10">{data.PavementF}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total</td>
            <td colSpan="10">{data.TotalF}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PartFPreview;
