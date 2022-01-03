import jsPDF from "jspdf";
import React from "react";
import "jspdf-autotable";
import { Button } from "@mui/material";
import "./SBI.css";
import { useForm } from "react-hook-form";

const SBIForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const getPDF = (e) => {
    console.log(e);
    // e.preventDefault();
    // const doc = new jsPDF();
    // doc.autoTable({ html: "#my-table1", theme: "grid" });
    // doc.autoTable({ html: "#my-table2", theme: "grid" });
    // doc.autoTable({ html: "#my-table3", theme: "grid" });
    // doc.save("table.pdf");
  };

  return (
    <div style={{ padding: "12px" }}>
      <form onSubmit={handleSubmit(getPDF)}>
        <table id="my-table1" className="myTable">
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
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("purposeOfValuation")}
                />
              </td>
            </tr>
            <tr>
              <td rowSpan="2">2.</td>
              <td>a)</td>
              <td>Date of inspection</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="date"
                  {...register("dateOfInspection")}
                />
              </td>
            </tr>
            <tr>
              <td>b)</td>
              <td>Date of inspection</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="date"
                  {...register("dateOfInspection2")}
                />
              </td>
            </tr>
            <tr>
              <td rowSpan="4">3</td>
              <td colSpan="2">List of documents produced for perusal</td>
              <td colSpan="10"></td>
            </tr>
            <tr>
              <td>i)</td>
              <td></td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("documents")}
                />
              </td>
            </tr>
            <tr>
              <td>ii)</td>
              <td></td>
              <td colSpan="10"></td>
            </tr>
            <tr>
              <td>iii)</td>
              <td></td>
              <td colSpan="10"></td>
            </tr>
            <tr>
              <td>4.</td>
              <td colSpan="2">
                Name of the owner(s) and his / their address (es) with Phone no.
                (details of share of each owner in case of joint ownership)
              </td>
              <td colSpan="10">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("nameOfPresentOwner")}
                />
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td colSpan="2">
                Brief description of the property (Including leasehold /
                freehold etc)
              </td>
              <td colSpan="10">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("propertyDescription")}
                />
              </td>
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
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("plotSurveyNo")}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>b)</td>
              <td>Door No.</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("doorNo")}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>c)</td>
              <td>T. S. No. / Village</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("village")}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>d)</td>
              <td>Ward / Taluka</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("wardTaluka")}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>e)</td>
              <td>Mandal / District</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("mandalDistrict")}
                />
              </td>
            </tr>
            <tr>
              <td>7.</td>
              <td colSpan="2">Postal address of the property</td>
              <td colSpan="10">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("postalAddress")}
                />
              </td>
            </tr>
            {/*Table 1 2nd*/}
            <tr>
              <td rowSpan="5">8</td>
            </tr>
            <tr>
              <td colSpan="2">City / Town</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("city")}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">Residential Area</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("residentialArea")}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">Commercial Area</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("commercialArea")}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">Industrial Area</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("industrialArea")}
                />
              </td>
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
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("areaClass")}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>ii)</td>
              <td>Urban / Semi Urban / Rural</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("areaType")}
                />
              </td>
            </tr>
            <tr>
              <td>10.</td>
              <td colSpan="2">
                Coming under Corporation limit / Village Panchayat / Muncipality
              </td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("comesUnder")}
                />
              </td>
            </tr>
            <tr>
              <td>11.</td>
              <td colSpan="2">
                Whether covered under any state / Central Govt. enactments (e.g.
                Urban Land Ceiling Act) or notified under agency area /
                scheduled area / cantonment area
              </td>
              <td colSpan="10">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("comesUnder")}
                />
              </td>
            </tr>
            <tr>
              <td>12.</td>
              <td colSpan="2">
                In case it is an agricultural land. any conversion to house site
                plots is contemplated
              </td>
              <td colSpan="10">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("comesUnder")}
                />
              </td>
            </tr>
            <tr>
              <td rowSpan="6">13.</td>
            </tr>
            <tr>
              <td colSpan="2">Boundaried of the property</td>
              <td colSpan="10"></td>
            </tr>
            <tr>
              <td colSpan="2">North</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("northBoundary")}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">South</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("southBoundary")}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">East</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("eastBoundary")}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">West</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("westBoundary")}
                />
              </td>
            </tr>

            <tr>
              <td rowSpan="8">14.</td>
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
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("northDimensions")}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">South</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("southDimensions")}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">East</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("eastDimensions")}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">West</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("westDimensions")}
                />
              </td>
            </tr>
            <tr>
              <td>14.2</td>
              <td colSpan="2">
                Latitude, Longitude and Coordinates of the site
              </td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("coordinates")}
                />
              </td>
            </tr>
            <tr>
              <td>15.</td>
              <td colSpan="2">Extent of the site</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("extentOfSite")}
                />
              </td>
            </tr>
            <tr>
              <td>16.</td>
              <td colSpan="2">
                Extent of the site considered for valuation (least of 14 A & 14
                B)
              </td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("extentOfSiteValuation")}
                />
              </td>
            </tr>
            <tr>
              <td>17.</td>
              <td colSpan="2">
                Whether occupied by the owner / tenant? If occupied by tenant,
                since how long? Rent received per month.
              </td>
              <td colSpan="10">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("ownerTenant")}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table id="my-table2" className="myTable">
          <tbody>
            <tr>
              <th>II.</th>
              <th className="que" colSpan="2">
                CHARACTERISTICS OF THE SITE
              </th>
              <th className="ans" colSpan="10"></th>
            </tr>
            <tr>
              <td>1.</td>
              <td colSpan="2">Classification of locality</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("localityType")}
                />
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td colSpan="2">Development of surrounding areas</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("developmentOfArea")}
                />
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td colSpan="2">
                Possibility of frequent flooding / sub-merging
              </td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("floodPossibility")}
                />
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td colSpan="2">
                Feasibility to the Civic amenities like school, hospital, bus
                stop. market etc.
              </td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("feasibility")}
                />
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td colSpan="2">Level of land with topographical conditions</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("levelOfLand")}
                />
              </td>
            </tr>
            <tr>
              <td>6.</td>
              <td colSpan="2">Shape of land</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("ShapeOfLand")}
                />
              </td>
            </tr>
            <tr>
              <td>7.</td>
              <td colSpan="2">Type of use to which it can be put</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("typeOfUse")}
                />
              </td>
            </tr>
            <tr>
              <td>8.</td>
              <td colSpan="2">Any usage restriction</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("restrictions")}
                />
              </td>
            </tr>
            <tr>
              <td>9.</td>
              <td colSpan="2">Is plot in town planning approved layout?</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("townPlanning")}
                />
              </td>
            </tr>
            <tr>
              <td>10.</td>
              <td colSpan="2">Corner plot or intermittent plot?</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("cornerIntermittent")}
                />
              </td>
            </tr>
            <tr>
              <td>11.</td>
              <td colSpan="2">Road facilities</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("roadFacilities")}
                />
              </td>
            </tr>
            <tr>
              <td>12.</td>
              <td colSpan="2">Type of road available at present</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("roadAvailable")}
                />
              </td>
            </tr>
            <tr>
              <td>13.</td>
              <td colSpan="2">
                Width of road - is it below 20 ft. or more than 20 ft.
              </td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("roadWidth")}
                />
              </td>
            </tr>
            <tr>
              <td>14.</td>
              <td colSpan="2">Is it a land - locked land?</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("landLockedLand")}
                />
              </td>
            </tr>
            <tr>
              <td>15.</td>
              <td colSpan="2">Water Potentiality</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("waterPotent")}
                />
              </td>
            </tr>
            <tr>
              <td>16.</td>
              <td colSpan="2">Underground sewerage system</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("sewerage")}
                />
              </td>
            </tr>
            <tr>
              <td>17.</td>
              <td colSpan="2">Is power supply available at the site?</td>
              <td colSpan="10">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("powerSupply")}
                />
              </td>
            </tr>
            <tr>
              <td rowSpan="3">18</td>
              <td colSpan="2">Advantage of the site</td>
              <td colSpan="10"></td>
            </tr>
            <tr>
              <td>1.</td>
              <td></td>
              <td colSpan="10"></td>
            </tr>
            <tr>
              <td>2.</td>
              <td></td>
              <td colSpan="10"></td>
            </tr>
            <tr>
              <td rowSpan="3">19</td>
              <td colSpan="2">
                Special remarks, if any, like threat of acquisition of land for
                public servoce purposes, road widening or applicability of CRZ
                provisions etc. (Distence from sea-coast / tidal level must be
                incorporated)
              </td>
              <td colSpan="10">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("specialRemarks")}
                />
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td></td>
              <td colSpan="10"></td>
            </tr>
            <tr>
              <td>2.</td>
              <td></td>
              <td colSpan="10"></td>
            </tr>
          </tbody>
        </table>
        <table id="my-table3" className="myTable">
          <tbody>
            <tr>
              <td colSpan="4" className="que">
                Part – A (Valuation of land)
              </td>
              <td></td>
              <td colSpan="35" className="ans"></td>
            </tr>
            <tr>
              <td>1.</td>
              <td colSpan="3">Size of plot</td>
              <td></td>
              <td colSpan="35"></td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="3">North &amp; South</td>
              <td></td>
              <td colSpan="35">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("northSouth")}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="3">East &amp; West</td>
              <td></td>
              <td colSpan="35">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("eastWest")}
                />
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td colSpan="3">Total extent of the plot</td>
              <td></td>
              <td colSpan="35">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("totalExtent")}
                />
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td colSpan="3">
                Prevailing market rate (Along with details /reference of at
                least two latest deals/transactions with respect to adjacent
                properties in the areas)
              </td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("prevailingRate")}
                />
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td colSpan="3">
                Guideline rate obtained from the Registrar’s Office (an evidence
                thereof to be enclosed)
              </td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("guidelineRate")}
                />
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td colSpan="3">Assessed / adopted rate of valuation</td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("assessedRate")}
                />
              </td>
            </tr>
            <tr>
              <td>6.</td>
              <td colSpan="3">Estimated value of land</td>
              <td></td>
              <td colSpan="35">
                <input
                  className="table_inputs"
                  type="text"
                  {...register("estimatedValue")}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="4">Part – B (Valuation of Building)</td>
              <td></td>
              <td colSpan="35"></td>
            </tr>
            <tr>
              <td rowSpan="12">1.</td>
              <td>a)</td>
              <td colSpan="2">
                Type of Building (Residential / Commercial / Industrial)
              </td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("buildingType")}
                />
              </td>
            </tr>
            <tr>
              <td>b)</td>
              <td colSpan="2">
                Type of construction (Load bearing / RCC / Steel Framed)
              </td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("constructionType")}
                />
              </td>
            </tr>
            <tr>
              <td>c)</td>
              <td colSpan="2">Year of construction</td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("constrnYear")}
                />
              </td>
            </tr>
            <tr>
              <td>d)</td>
              <td colSpan="2">
                Number of floors and height of each floor including basement, if
                any
              </td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("noOfFloors")}
                />
              </td>
            </tr>
            <tr>
              <td>e)</td>
              <td colSpan="2">Plinth area floor-wise</td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("plinthArea")}
                />
              </td>
            </tr>
            <tr>
              <td rowSpan="3">f)</td>
              <td colSpan="2">Condition of the building</td>
              <td></td>
              <td colSpan="35"></td>
            </tr>
            <tr>
              <td>i)</td>
              <td>Exterior – Excellent, Good, Normal, Poor</td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("exterior")}
                />
              </td>
            </tr>
            <tr>
              <td>ii)</td>
              <td>Interior - Excellent, Good, Normal, Poor</td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("interior")}
                />
              </td>
            </tr>
            <tr>
              <td>g)</td>
              <td colSpan="2">
                Date of issue and validity of layout of approved map / plan
              </td>
              <td></td>
              <td colSpan="35">
                <input
                  className="table_inputs"
                  type="date"
                  {...register("dateOfIssue")}
                />
              </td>
            </tr>
            <tr>
              <td>h)</td>
              <td colSpan="2">Approved map / plan issuing authority</td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("approvedMap")}
                />
              </td>
            </tr>
            <tr>
              <td>i)</td>
              <td colSpan="2">
                Whether genuineness or authenticity of approved map / plan is
                verified
              </td>
              <td></td>
              <td colSpan="35">
                <textarea
                  className="table_inputs"
                  type="text"
                  {...register("mapAuthenticity")}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Button variant="contained" type="submit">
          Get PDF
        </Button>
        {/* <Button variant="contained" onClick={(event) => getPDF(event)}>
          Get PDF
        </Button> */}
      </form>
    </div>
  );
};

export default SBIForm;
