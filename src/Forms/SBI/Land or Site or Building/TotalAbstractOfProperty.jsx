import React from "react";

function TotalAbstractOfProperty({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <td style={{ width: "70px" }}>Part-A</td>
            <td className="que" colSpan="2">
              Land
            </td>
            <td className="ans" colSpan="10">
              {data.TotalA}
            </td>
          </tr>
          <tr>
            <td>Part-B</td>
            <td colSpan="2">Buildings</td>
            <td colSpan="10">{data.TotalB}</td>
          </tr>
          <tr>
            <td>Part-C</td>
            <td colSpan="2">Extra Items</td>
            <td colSpan="10">{data.TotalC}</td>
          </tr>
          <tr>
            <td>Part-D</td>
            <td colSpan="2">Amenities</td>
            <td colSpan="10">{data.TotalD}</td>
          </tr>
          <tr>
            <td>Part-E</td>
            <td colSpan="2">Miscellaneous</td>
            <td colSpan="10">{data.TotalE}</td>
          </tr>
          <tr>
            <td>Part-F</td>
            <td colSpan="2">Services</td>
            <td colSpan="10">{data.TotalF}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">Total</td>
            <td colSpan="10">
              {
                (data.TFMV =
                  +data.TotalA +
                  +data.TotalB +
                  +data.TotalC +
                  +data.TotalD +
                  +data.TotalE +
                  +data.TotalF)
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TotalAbstractOfProperty;
