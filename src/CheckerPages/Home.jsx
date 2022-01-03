import jsPDF from "jspdf";
import React from "react";
import "jspdf-autotable";

const CheckerHome = () => {
  const getPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#my-table1", theme: "grid" });
    doc.autoTable({ html: "#my-table2", theme: "grid" });
    doc.autoTable({ html: "#my-table3", theme: "grid" });
    doc.save("table.pdf");
  };

  return (
    <div>
      <h1>page 1 and 2</h1>
      <table id="my-table1" className="myTable">
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
          {/*Table 1 2nd*/}
          <tr>
            <td rowspan="5">8</td>
          </tr>
          <tr>
            <td colspan="2">City / Town</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">Residential Area</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">Commercial Area</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">Industrial Area</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>9.</td>
            <td colspan="2">Classification of the area</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td>i)</td>
            <td>High / Middle / Poor</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td>ii)</td>
            <td>Urban / Semi Urban / Rural</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>10.</td>
            <td colspan="2">
              Coming under Corporation limit / Village Panchayat / Muncipality
            </td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>11.</td>
            <td colspan="2">
              hether covered under any state / Central Govt. enactments (e.g.
              Urban Land Ceiling Act) or notified under agency area / scheduled
              area / cantonment area
            </td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>12.</td>
            <td colspan="2">
              In case it is an agricultural land. any conversion to house site
              plots is contemplated
            </td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td rowspan="10">13.</td>
          </tr>
          <tr>
            <td colspan="2">Boundaried of the property</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">North</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">South</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">East</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">West</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">North-East</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">North-West</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">South-East</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">South-West</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td rowspan="12">14.</td>
          </tr>
          <tr>
            <td colspan="2" rowspan="3">
              Dimensions of the site
            </td>
          </tr>
          <tr>
            <td colspan="2" rowspan="1">
              A
            </td>
            <td colspan="3" rowspan="1">
              B
            </td>
          </tr>
          <tr>
            <td colspan="2">As per the Deed</td>
            <td colspan="3">Actuals</td>
          </tr>
          <tr>
            <td colspan="2">North</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">South</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">East</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">West</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">North-East</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">North-West</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">South-East</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="2">South-West</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>14.2</td>
            <td colspan="2">Latitude, Longitude and Coordinates of the site</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>15.</td>
            <td colspan="2">Extent of the site</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>16.</td>
            <td colspan="2">
              Extent of the site considered for valuation (least of 14 A & 14 B)
            </td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>17.</td>
            <td colspan="2">
              Whether occupied by the owner / tenant? If occupied by tenant,
              since how long? Rent received per month.
            </td>
            <td colspan="10"></td>
          </tr>
        </tbody>
      </table>
      <h1>page 3</h1>
      <table id="my-table2" className="myTable">
        <tbody>
          <tr>
            <th>II.</th>
            <th className="que" colspan="2">
              CHARACTERISTICS OF THE SITE
            </th>
            <th className="ans" colspan="10"></th>
          </tr>
          <tr>
            <td>1.</td>
            <td colspan="2">Classification of localty</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>2.</td>
            <td colspan="2">Development of surrounding areas</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>3.</td>
            <td colspan="2">Possibility of frequent flooding / sub-merging</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>4.</td>
            <td colspan="2">
              Feasibility to the Civic amenities like school, hospital, bus
              stop. market etc.
            </td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>5.</td>
            <td colspan="2">Level of land with topographical conditions</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>6.</td>
            <td colspan="2">Shape of land</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>7.</td>
            <td colspan="2">Type of use to which it can be put</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>8.</td>
            <td colspan="2">Any usage restriction</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>9.</td>
            <td colspan="2">Is plot in town planning approved layout?</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>10.</td>
            <td colspan="2">Corner plot or intermittent plot?</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>11.</td>
            <td colspan="2">Road facilities</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>12.</td>
            <td colspan="2">Type of road available at present</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>13.</td>
            <td colspan="2">
              Width of road - is it below 20 ft. or more than 20 ft.
            </td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>14.</td>
            <td colspan="2">Is it a land - locked land?</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>15.</td>
            <td colspan="2">Water Potentiality</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>16.</td>
            <td colspan="2">Underground sewerage system</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>17.</td>
            <td colspan="2">Is power supply available at the site?</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td rowspan="3">18</td>
            <td colspan="2">Advantage of the site</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td></td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>2.</td>
            <td></td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td rowspan="3">19</td>
            <td colspan="2">
              Special remarks, if any, like threat of acquisition of land for
              public servoce purposes, road widening or applicability of CRZ
              provisions etc. (Distence from sea-coast / tidal level must be
              incorporated)
            </td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td></td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>2.</td>
            <td></td>
            <td colspan="10"></td>
          </tr>
        </tbody>
      </table>
      <h1>page 4</h1>
      <table id="my-table3" className="myTable">
        <tbody>
          <tr>
            <td colspan="4" className="que">
              Part – A (Valuation of land)
            </td>
            <td></td>
            <td colspan="35" className="ans"></td>
          </tr>
          <tr>
            <td>1.</td>
            <td colspan="3">Size of plot</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td></td>
            <td colspan="3">North &amp; South</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td></td>
            <td colspan="3">East &amp; West</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>2.</td>
            <td colspan="3">Total extent of the plot</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>3.</td>
            <td colspan="3">
              Prevailing market rate (Along with details /reference of at least
              two latest deals/transactions with respect to adjacent properties
              in the areas)
            </td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>4.</td>
            <td colspan="3">
              Guideline rate obtained from the Registrar’s Office (an evidence
              thereof to be enclosed)
            </td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>5.</td>
            <td colspan="3">Assessed / adopted rate of valuation</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>6.</td>
            <td colspan="3">Estimated value of land</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td colspan="4">Part – B (Valuation of Building)</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td rowspan="12">1.</td>
            <td>a)</td>
            <td colspan="2">
              Type of Building (Residential / Commercial / Industrial)
            </td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>b)</td>
            <td colspan="2">
              Type of construction (Load bearing / RCC / Steel Framed)
            </td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>c)</td>
            <td colspan="2">Year of construction</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>d)</td>
            <td colspan="2">
              Number of floors and height of each floor including basement, if
              any
            </td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>e)</td>
            <td colspan="2">Plinth area floor-wise</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td rowspan="3">f)</td>
            <td colspan="2">Condition of the building</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>i)</td>
            <td>Exterior – Excellent, Good, Normal, Poor</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>ii)</td>
            <td>Inferior - Excellent, Good, Normal, Poor</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>g)</td>
            <td colspan="2">
              Date of issue and validity of layout of approved map / plan
            </td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>h)</td>
            <td colspan="2">Approved map / plan issuing authority</td>
            <td></td>
            <td colspan="35"></td>
          </tr>
          <tr>
            <td>i)</td>
            <td colspan="2">
              Whether genuineness or authenticity of approved map / plan is
              verified
            </td>
            <td></td>
            <td colspan="35"></td>
          </tr>
        </tbody>
      </table>
      <Button variant="contained" onClick={getPDF}>
        Get PDF
      </Button>
    </div>
  );
};

export default CheckerHome;
