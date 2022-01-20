import React from "react";
import "./SBI.css";

const ParticularValuerComment = () => {
  const getPdf = () => {};

  return (
    <div>
      {/* ANNEXURE –22 */}
      {/*Last table 2nd part*/}
      <table id="my-table" className="myTable">
        <tbody>
          <tr>
            <th style={{ width: "40px" }}>S.No.</th>
            <th style={{ width: "350px" }} colSpan="10">
              Particulars
            </th>
            <th style={{ width: "350px" }}>Valuer Comment</th>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="10">
              Background information of the asset being valued
            </td>
            <td></td>
          </tr>
          <tr>
            <td>2.</td>
            <td colSpan="10">Purpose of valuation and appointing authority</td>
            <td></td>
          </tr>
          <tr>
            <td>3.</td>
            <td colSpan="10">
              Identity of the valuer and any other experts involvedin the
              valuation;
            </td>
            <td></td>
          </tr>
          <tr>
            <td>4.</td>
            <td colSpan="10">
              Disclosure of valuer interest or conflict, if any;
            </td>
            <td></td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="10">
              Date of appointment, valuation date and date of report;
            </td>
            <td></td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="10">Inspections and/or investigations undertaken;</td>
            <td></td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="10">
              Nature and sources of the information used or relied upon;
            </td>
            <td></td>
          </tr>
          <tr>
            <td>8.</td>
            <td colSpan="10">
              Procedures adopted in carrying out the valuation and valuation
              standards followed;
            </td>
            <td></td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="10">Restrictions on use of the report, if any;</td>
            <td></td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="10">
              Major factors that were taken into account during thevaluation;
            </td>
            <td></td>
          </tr>
          <tr>
            <td>11.</td>
            <td colSpan="10">
              Major factors that were not taken into account duringthe
              valuation;
            </td>
            <td></td>
          </tr>
          <tr>
            <td>12.</td>
            <td colSpan="10">
              Caveats, limitations and disclaimers to the extent they explain or
              elucidate the limitations faced by valuer, which shall not be for
              the purpose of limiting is responsibility for the valuation
              report.
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
};

export default ParticularValuerComment;
