import React from "react";
import "./SBI.css";

const SBI87 = () => {
  const getPdf = () => {};

  return (
      <div>
          <b>Specification of Construction</b>
      <table id="my-table" className="myTable">
        <tbody>
          <tr>
            <th>Sr. No</th>
            <th className="que" colspan="4">
              DESCRIPTION
            </th>
            <th  >Ground Floor</th>
                   
            <th  >Other Floor</th>
          </tr>
          <tr>
            <td>1.</td>
            <td colspan="4">Foundation</td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td>2.</td>
            <td colspan="4">Basement</td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td>3.</td>
            <td colspan="4">Superstructure</td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td>4.</td>
            <td colspan="4">Joinery / Doors & Windows (please furnish details 
            about size of frames, shutters, glazing, fitting etc. and 
            specify the species of timber)
            </td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td>5.</td>
            <td colspan="4">RCC works</td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td>6.</td>
            <td colspan="4">Plastering</td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td>7.</td>
            <td colspan="4">Flooring, Skirting, dadoing</td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td>8.</td>
            <td colspan="4">Special finish as marble, granite, wooden paneling, 
            grills, etc</td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td>9.</td>
            <td colspan="4">Roofing including weather proof course</td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td>10.</td>
            <td colspan="4">Drainage</td>
            <td ></td>
            <td ></td>
          </tr>
        </tbody>
        </table><br/><br/>
        <table id="my-table" className="myTable">
        <tbody>
          <tr>
            <th>I.</th>
            <th className="que" colspan="1">
              DESCRIPTION
            </th>
            <th colspan="4">Ground Floor</th>
            <th colspan="4">Other Floor</th>
            {/* <th colspan="4"></th> */}
          </tr>
          
          <tr>
            <td rowspan="4">1.</td>
            <td>Compound wall</td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
          </tr>
          <tr>
            <td>Compound wall</td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
            </tr>
            <tr>
            
            <td>Length</td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
            </tr>
            <tr>
            
            <td>Type of construction</td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
            </tr>
            <tr>
            <td rowspan="8">2.</td>
            
            <td>Electrical installation</td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
          </tr>
          <tr>
            
            <td >Type of wiring </td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
            </tr>
            <tr>
            
            <td>Class of fittings (superior / ordinary / poor) </td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
            </tr>
            <tr>
            
            <td>Number of light points </td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
            </tr>
            <tr>
            
            <td>Fan points </td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
            </tr>
            <tr>
            
            <td>Number of light points </td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
            </tr>
            <tr>
            
            <td>Spare plug points </td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
            </tr>
            <tr>
            
            <td>Any other item </td>
            <td colspan="4"></td>
            <td colspan="4"></td>
            {/* <td></td> */}
            </tr>
            <tr>
            <td rowspan="7">3</td>
            <td colspan="8">Plumbing installation</td>
            {/* <td colspan="12"></td> */}
          </tr>
          <tr>
            <td >a)</td>
            <td colspan="4">No. of water closets and their type</td>
            <td ></td>
            <td ></td>
            </tr>
          <tr>
            <td>b)</td>
            <td colspan="4">No. of wash basins </td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td>c)</td>
            <td colspan="4">No. of urinals</td>
            <td ></td>
            <td ></td>
            </tr>
            <tr>
            <td>d)</td>
            <td colspan="4">No. of bath tubs</td>
            <td ></td>
            <td ></td>
            </tr> 
            <tr>
            <td>e)</td>
            <td colspan="4">Water meter, taps, etc. </td>
            <td ></td>
            <td ></td>
            </tr>
            <tr>
            <td>f)</td>
            <td colspan="4">Any other fixtures</td>
            <td ></td>
            <td ></td>
          </tr>        
        </tbody>
      </table>
      <button onClick={getPdf}> </button>
    </div>
  );
};

export default SBI87;
