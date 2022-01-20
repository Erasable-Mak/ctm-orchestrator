import React from "react";

function DetailsOfValuationPreview({ data, setData }) {
  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            <td>Sr. no.</td>
            <td>Particular of item</td>
            <td>Plinth area</td>
            <td>Roof height</td>
            <td>Area of building</td>
            <td>Estimated replacement rate of construction Rs.</td>
            <td>Replacement cost Rs.</td>
            <td>Depreciation cost Rs.</td>
            <td>Net value after depreciation</td>
          </tr>
          <tr>
            <td></td>
            <td>Ground floor</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>First floor</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Other floor, if any</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailsOfValuationPreview;
