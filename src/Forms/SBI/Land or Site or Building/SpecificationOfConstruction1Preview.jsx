import React from "react";

function SpecificationOfConstruction1Preview({ data }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <th>Sr. No</th>
            <th className="que" colSpan="2">
              DESCRIPTION
            </th>
            <th className="ans" colSpan="10">
              Ground Floor
            </th>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">Foundation</td>
            <td colSpan="10">{data.foundation}</td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="2">Basement</td>
            <td colSpan="10">{data.basement}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="2">Superstructure</td>
            <td colSpan="10">{data.superstructure}</td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="2">
              Joinery / Doors & Windows (please furnish details about size of
              frames, shutters, glazing, fitting etc. and specify the species of
              timber)
            </td>
            <td colSpan="10">{data.joineryDoorsWindows}</td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">RCC works</td>
            <td colSpan="10">{data.rccworks}</td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Plastering</td>
            <td colSpan="10">{data.plastering}</td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Flooring, Skirting, dadoing</td>
            <td colSpan="10">{data.flooring}</td>
          </tr>
          <tr>
            <td>8.</td>
            <td colSpan="2">
              Special finish as marble, granite, wooden paneling, grills, etc
            </td>
            <td colSpan="10">{data.marbleGraniteWoodenGrills}</td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">Roofing including weather proof course</td>
            <td colSpan="10">{data.roofing}</td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">Drainage</td>
            <td colSpan="10">{data.drainage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SpecificationOfConstruction1Preview;
