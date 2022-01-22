import React, { useState, useEffect } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import DropDown from "../components/DropDown";

import SbiLandOrSiteOrBuilding from "../Forms/SBI/Land or Site or Building/MainPage";
import SbiAgriculturalLand from "../Forms/SBI/Agricultural Land/MainPage";

function Report({
  VisitVariables,
  setVisitVariables,
  SelectedCaseDetails,
  setSelectedCaseDetails,
}) {
  //state to change the form on the basis of selected option from dropdowns given
  const [selectedOptions, setSelectedOptions] = useState({
    bankName: "",
    typeOfProperty: "",
  });

  //this effect runs when page is loaded and all data from field visit officer is fetched
  useEffect(() => {
    try {
      //getting data from field visit officer, one doc at time
      let getdata = async (typeOFData) => {
        let FVODataSnap = await getDoc(
          doc(
            db,
            "Field Visits",
            SelectedCaseDetails.FVODetails.FVOId,
            SelectedCaseDetails.InitialCaseDetails.caseId,
            typeOFData
          )
        );
        // console.log(FVODataSnap.data());
        return FVODataSnap.data();
      };

      //assembling data and storing it in SelectedCaseDetails
      const allData = async () => {
        //data of field visit is stored in 5 diffevent documents so we have to fetch all of them and add them to the 1 object
        const temp1 = await getdata("Area and Location");
        // console.log(temp1);
        const temp2 = await getdata("Documents and Directions");
        const temp3 = await getdata("Property Detail");
        const temp4 = await getdata("Valuation Detail");
        const temp5 = await getdata("visit detail");

        const temp6 = { ...temp1, ...temp2, ...temp3, ...temp4, ...temp5 };
        // console.log({ temp6 });
        setSelectedCaseDetails({ ...SelectedCaseDetails, DataByFVO: temp6 });
      };
      allData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Box direction="column-reverse" spacing={2}>
        {console.log(SelectedCaseDetails)}
        <Button
          variant="contained"
          onClick={() => {
            setVisitVariables({ ...VisitVariables, tableOn: true });
          }}
        >
          Go Back
        </Button>
      </Box>
      <Divider style={{ margin: "10px" }} />
      <DropDown
        id="Bank name"
        items={[
          {
            id: "Select",
            value: "Select",
          },
          {
            id: "SBI,UBI,UCO,BOI,CBI",
            value: "SBI,UBI,UCO,BOI,CBI",
          },
        ]}
        value={selectedOptions.bankName}
        name="Bank name"
        setValue={(value) =>
          setSelectedOptions({ ...selectedOptions, bankName: value })
        }
      />
      <DropDown
        id="typeOfProperty"
        items={[
          {
            id: "Select",
            value: "Select",
          },
          {
            id: "Land / Site and Building",
            value: "Land / Site and Building",
          },
          {
            id: "Agricultural Land",
            value: "Agricultural Land",
          },
        ]}
        value={selectedOptions.typeOfProperty}
        name="Type of Property"
        setValue={(value) =>
          setSelectedOptions({ ...selectedOptions, typeOfProperty: value })
        }
      />
      {selectedOptions.bankName === "SBI,UBI,UCO,BOI,CBI" &&
        selectedOptions.typeOfProperty === "Land / Site and Building" && (
          <SbiLandOrSiteOrBuilding
            SelectedCaseDetails={SelectedCaseDetails}
            setVisitVariables={setVisitVariables}
          />
        )}
      {selectedOptions.bankName === "SBI,UBI,UCO,BOI,CBI" &&
        selectedOptions.typeOfProperty === "Agricultural Land" && (
          <SbiAgriculturalLand
            SelectedCaseDetails={SelectedCaseDetails}
            setVisitVariables={setVisitVariables}
          />
        )}
    </div>
  );
}

export default Report;
