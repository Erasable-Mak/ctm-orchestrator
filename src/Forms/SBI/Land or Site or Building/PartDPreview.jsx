import React from "react";

function PartDPreview({ data }) {
  return (
    <div>
      <table id="Part-D" className="myTable">
        <tbody>
          <tr>
            <td>1.</td>
            <td className="que" colSpan="2">
              Wardrobes
            </td>
            <td className="ans" colSpan="10">
              {data.Wardrobes}
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Glazed tiles</td>
            <td colSpan="10">{data.GlazedTiles}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Extra sinks and bath tub</td>
            <td colSpan="10">{data.ExtraSinks}</td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">Marble / Ceramic tiles flooring</td>
            <td colSpan="10">{data.MarbleCeramic}</td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">Interior decorations</td>
            <td colSpan="10">{data.InteriorDecorations}</td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Architectural elevation works</td>
            <td colSpan="10">{data.ArchitecturalElevation}</td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Panelling works</td>
            <td colSpan="10">{data.PanellingWorks}</td>
          </tr>
          <tr>
            <td>8.</td>
            <td colSpan="2">Aluminium works</td>
            <td colSpan="10">{data.AluminiumWorks}</td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">Aluminium hand rails</td>
            <td colSpan="10">{data.AluminiumHandRails}</td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">False ceiling</td>
            <td colSpan="10">{data.FalseCeiling}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total</td>
            <td colSpan="10">{data.TotalD}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PartDPreview;
