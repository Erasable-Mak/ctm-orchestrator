import React from "react";
import "./SBI.css";

const SBI = () => {
  const getPdf = () => {};

  return (
    <div>
      <table id="my-table" className="myTable">
        <tbody>
          <tr>
            <th>I.</th>
            <th className="que" colspan="2">
              GENERAL
            </th>
            <th className="ans" colspan="10"></th>
          </tr>
          <tr>
            <td>1.</td>
            <td colspan="2">Purpose for which the valuation is made</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td rowspan="2">2.</td>
            <td>a)</td>
            <td>Date of inspection</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>b)</td>
            <td>Date of inspection</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td rowspan="4">3</td>
            <td colspan="2">List of documents produced for perusal</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>i)</td>
            <td></td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>ii)</td>
            <td></td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>iii)</td>
            <td></td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>4.</td>
            <td colspan="2">
              Name of the owner(s) and his / their address (es) with Phone no.
              (details of share of each owner in case of joint ownership)
            </td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>5.</td>
            <td colspan="2">
              Brief description of the property (Including leasehold / freehold
              etc)
            </td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>6.</td>
            <td colspan="2">Location of property</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td>a)</td>
            <td>Plot No. / Survey No.</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td>b)</td>
            <td>Door No.</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td>c)</td>
            <td>T. S. No. / Village</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td>d)</td>
            <td>Ward / Taluka</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td>e)</td>
            <td>Mandal / District</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>7.</td>
            <td colspan="2">Postal address of the property</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td colspan="10"></td>
          </tr>
        </tbody>
      </table>
      <button onClick={getPdf}> </button>
    </div>
  );
};

export default SBI;
