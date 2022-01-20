import React from "react";

function GeneralPreview({ data }) {
  return (
    <div>
      <table id="General" className="myTable">
        <tbody>
          <tr>
            <th>I.</th>
            <th className="que" colSpan="2">
              GENERAL
            </th>
            <th className="ans" colSpan="10"></th>
          </tr>
          <tr>
            <td>1.</td>
            <td colSpan="2">Purpose for which the valuation is made</td>
            <td colSpan="10">{data.purposeOfValuation}</td>
          </tr>
          <tr>
            <td rowSpan="2">2.</td>
            <td>a)</td>
            <td>Date of inspection</td>
            <td colSpan="10">{data.dateOfInspection}</td>
          </tr>
          <tr>
            <td>b)</td>
            <td>Date on which the valuation is made</td>
            <td colSpan="10">{data.dateOfValuation}</td>
          </tr>
          <tr>
            <td rowSpan={data.documentsProducedForPerusal.length + 1}>3</td>
            <td colSpan="2">List of documents produced for perusal</td>
            <td colSpan="10"></td>
          </tr>

          {data.documentsProducedForPerusal.map((document, index) => {
            return (
              <tr key={index}>
                <td colSpan="2">{document}</td>
                <td colSpan="5"></td>
              </tr>
            );
          })}

          <tr>
            <td>4.</td>
            <td colSpan="2">
              Name of the owner(s) and his / their address (es) with Phone no.
              (details of share of each owner in case of joint ownership)
            </td>
            <td colSpan="10">{data.ownerInfo}</td>
          </tr>
          <tr>
            <td>5.</td>
            <td colSpan="2">
              Brief description of the property (Including leasehold / freehold
              etc)
            </td>
            <td colSpan="10">{data.propertyDescription}</td>
          </tr>
          <tr>
            <td>6.</td>
            <td colSpan="2">Location of property</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td>a)</td>
            <td>Plot No. / Survey No.</td>
            <td colSpan="10">{data.plotNo}</td>
          </tr>
          <tr>
            <td></td>
            <td>b)</td>
            <td>Door No.</td>
            <td colSpan="10">{data.doorNo}</td>
          </tr>
          <tr>
            <td></td>
            <td>c)</td>
            <td>T. S. No. / Village</td>
            <td colSpan="10">{data.tsNo}</td>
          </tr>
          <tr>
            <td></td>
            <td>d)</td>
            <td>Ward / Taluka</td>
            <td colSpan="10">{data.taluka}</td>
          </tr>
          <tr>
            <td></td>
            <td>e)</td>
            <td>Mandal / District</td>
            <td colSpan="10">{data.district}</td>
          </tr>
          <tr>
            <td>7.</td>
            <td colSpan="2">Postal address of the property</td>
            <td colSpan="10"></td>
          </tr>

          <tr>
            <td rowSpan="5">8</td>
          </tr>
          <tr>
            <td colSpan="2">City / Town</td>
            <td colSpan="10">{data.city}</td>
          </tr>
          <tr>
            <td colSpan="2">Residential Area</td>
            <td colSpan="10">{data.residentialArea}</td>
          </tr>
          <tr>
            <td colSpan="2">Commercial Area</td>
            <td colSpan="10">{data.commercialArea}</td>
          </tr>
          <tr>
            <td colSpan="2">Industrial Area</td>
            <td colSpan="10">{data.industrialArea}</td>
          </tr>
          <tr>
            <td>9.</td>
            <td colSpan="2">Classification of the area</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td></td>
            <td>i)</td>
            <td>High / Middle / Poor</td>
            <td colSpan="10">{data.classificationOfArea1}</td>
          </tr>
          <tr>
            <td></td>
            <td>ii)</td>
            <td>Urban / Semi Urban / Rural</td>
            <td colSpan="10">{data.classificationOfArea2}</td>
          </tr>
          <tr>
            <td>10.</td>
            <td colSpan="2">
              Coming under Corporation limit / Village Panchayat / Muncipality
            </td>
            <td colSpan="10">{data.comesUnder}</td>
          </tr>
          <tr>
            <td>11.</td>
            <td colSpan="2">
              whether covered under any state / Central Govt. enactments (e.g.
              Urban Land Ceiling Act) or notified under agency area / scheduled
              area / cantonment area
            </td>
            <td colSpan="10">{data.coveredUnderSomething}</td>
          </tr>
          <tr>
            <td>12.</td>
            <td colSpan="2">
              In case it is an agricultural land. any conversion to house site
              plots is contemplated
            </td>
            <td colSpan="10">{data.ifAgriculturalLand}</td>
          </tr>
          <tr>
            <td rowSpan="10">13.</td>
          </tr>
          <tr>
            <td colSpan="2">Boundaried of the property</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">North</td>
            <td colSpan="10">{data.north}</td>
          </tr>
          <tr>
            <td colSpan="2">South</td>
            <td colSpan="10">{data.south}</td>
          </tr>
          <tr>
            <td colSpan="2">East</td>
            <td colSpan="10">{data.east}</td>
          </tr>
          <tr>
            <td colSpan="2">West</td>
            <td colSpan="10">{data.west}</td>
          </tr>
          <tr>
            <td colSpan="2">North-East</td>
            <td colSpan="10">{data.northEast}</td>
          </tr>
          <tr>
            <td colSpan="2">North-West</td>
            <td colSpan="10">{data.northWest}</td>
          </tr>
          <tr>
            <td colSpan="2">South-East</td>
            <td colSpan="10">{data.southEast}</td>
          </tr>
          <tr>
            <td colSpan="2">South-West</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td rowSpan="12">14.</td>
          </tr>
          <tr>
            <td colSpan="2" rowSpan="3">
              Dimensions of the site
            </td>
          </tr>
          <tr>
            <td colSpan="2" rowSpan="1">
              A
            </td>
            <td colSpan="3" rowSpan="1">
              B
            </td>
          </tr>
          <tr>
            <td colSpan="2">As per the Deed</td>
            <td colSpan="3">Actuals</td>
          </tr>
          <tr>
            <td colSpan="2">North</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">South</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">East</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">West</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">North-East</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">North-West</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">South-East</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td colSpan="2">South-West</td>
            <td colSpan="10"></td>
          </tr>
          <tr>
            <td>14.2</td>
            <td colSpan="2">Latitude, Longitude and Coordinates of the site</td>
            <td colSpan="10">{data.latLang}</td>
          </tr>
          <tr>
            <td>15.</td>
            <td colSpan="2">Extent of the site</td>
            <td colSpan="10">{data.extentOfSite}</td>
          </tr>
          <tr>
            <td>16.</td>
            <td colSpan="2">
              Extent of the site considered for valuation (least of 14 A & 14 B)
            </td>
            <td colSpan="10">{data.extentOfSiteConsidered}</td>
          </tr>
          <tr>
            <td>17.</td>
            <td colSpan="2">
              Whether occupied by the owner / tenant? If occupied by tenant,
              since how long? Rent received per month.
            </td>
            <td colSpan="10">{data.whetherOccupiedByOwner}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GeneralPreview;
