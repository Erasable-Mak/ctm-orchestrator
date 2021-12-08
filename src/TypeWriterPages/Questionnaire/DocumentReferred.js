import { Box, Button, Divider, Stack } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DropDown from "../../components/DropDown";
import TextFieldComp from "../../components/TextFieldComp";
import { db } from "../../firebase-config";

const legalDocumentsDetails = [
  {
    id: "As per our Internal Records",
    value: "As per our Internal Records",
  },
  {
    id: "Yes",
    value: "Yes",
  },
  {
    id: "Provided Earlier",
    value: "Provided Earlier",
  },
  {
    id: "No",
    value: "No",
  },
];

const withinMuncipalLimit = [
  {
    id: "ABC",
    value: "ABC",
  },
];

const landHoldingType = [
  {
    id: "Collector Land",
    value: "Collector Land",
  },
  {
    id: "Freehold",
    value: "Freehold",
  },
  {
    id: "Gaothan Land",
    value: "Gaothan Land",
  },
  {
    id: "LeaseHold",
    value: "LeaseHold",
  },
  {
    id: "Private Lease",
    value: "Private Lease",
  },
];

const numberOfFloorsApproved = [
  {
    id: "ABC",
    value: "ABC",
  },
];
const sanctionPlanProvided = [
  {
    id: "ABC",
    value: "ABC",
  },
];

const approvingAuthority = [
  {
    id: "ABC",
    value: "ABC",
  },
];
const addressMatching = [
  {
    id: "Yes",
    value: "Yes",
  },
  {
    id: "No",
    value: "No",
  },
];

const initialState = {};

function DocumentReferred() {
  const [formData, setFormData] = useState(initialState);
  const [reload, setReload] = useState(false);

  const handleSubmit = async () => {
    try {
      if (formData.legalDocumentsDetails === "") {
        throw new Error("Please enter legal Documents Details");
      }

      await addDoc(collection(db, "Document Referred"), formData);
      toast.success("New Document Details added successfully", {
        autoClose: 5000,
      });
      clearForm();
    } catch (error) {
      toast.error(`${error}`, {
        autoClose: 5000,
      });
    }
  };

  const clearForm = () => {
    setFormData(initialState);
    setReload(true);
  };

  useEffect(() => {}, [reload]);

  return (
    <>
      <Box noValidate m={2} component="span" sx={{ mt: 1, width: 500 }}>
        <div>
          <Divider textAlign="left">Legal Documents Details</Divider>
          <br />
          <DropDown
            width="50"
            className="textboxalignment"
            id="legal-documents-details"
            items={legalDocumentsDetails}
            value={formData.legalDocumentsDetails}
            name="Legal Docs Provided"
            setValue={(value) =>
              setFormData({ ...formData, legalDocumentsDetails: value })
            }
          />

          <TextFieldComp
            width="50"
            className="form-control"
            id="details-of-legal-docs-received"
            name="Details Of Legal Docs Received"
            value={formData.detailsOfLegalDocsReceived}
            isMultilined={false}
            setValue={(value) =>
              setFormData({ ...formData, detailsOfLegalDocsReceived: value })
            }
          />
          <DropDown
            width="50"
            className="textboxalignment"
            id="address-matching"
            items={addressMatching}
            value={formData.addressMatching}
            name="Address Matching"
            setValue={(value) =>
              setFormData({ ...formData, addressMatching: value })
            }
          />

          <DropDown
            width="50"
            id="land-holding-type"
            items={landHoldingType}
            name="Land holding type"
            value={formData.landHoldingType}
            setValue={(value) =>
              setFormData({ ...formData, landHoldingType: value })
            }
          />
          <TextFieldComp
            width="50"
            id="name-of-the-reported-owner"
            name="Name of The Reported Owner"
            value={formData.nameOfTheReportedOwner}
            isMultilined={false}
            setValue={(value) =>
              setFormData({ ...formData, nameOfTheReportedOwner: value })
            }
          />
          <TextFieldComp
            width="50"
            id="developer-name-or-seller-name"
            name="Developer Name / Seller Name"
            value={formData.developerNameOrSellerName}
            isMultilined={false}
            setValue={(value) =>
              setFormData({ ...formData, developerNameOrSellerName: value })
            }
          />
          <br />
          <br />
          <Divider textAlign="left">Technical Document Details</Divider>
          <br />
          <DropDown
            width="50"
            id="approving-authority"
            items={approvingAuthority}
            value={formData.approvingAuthority}
            name="Approving Authority"
            setValue={(value) =>
              setFormData({ ...formData, approvingAuthority: value })
            }
          />
          <DropDown
            width="50"
            id="within-muncipal-limit"
            items={withinMuncipalLimit}
            value={formData.withinMuncipalLimit}
            name="Within Muncipal Limit"
            setValue={(value) =>
              setFormData({ ...formData, withinMuncipalLimit: value })
            }
          />
          <DropDown
            width="50"
            id="sanction-plan-provided"
            items={sanctionPlanProvided}
            value={formData.sanctionPlanProvided}
            name="Sanction plan provided"
            setValue={(value) =>
              setFormData({ ...formData, sanctionPlanProvided: value })
            }
          />
          <TextFieldComp
            width="50"
            id="commencement-certificate-details"
            name="Commencement Certificate Details"
            value={formData.commencementCertificateDetails}
            isMultilined={false}
            setValue={(value) =>
              setFormData({
                ...formData,
                commencementCertificateDetails: value,
              })
            }
          />
          <TextFieldComp
            width="50"
            id="sanction-plan-number"
            name="Sanction Plan Number"
            value={formData.sanctionPlanNumber}
            isMultilined={false}
            setValue={(value) =>
              setFormData({ ...formData, sanctionPlanNumber: value })
            }
          />
          <TextFieldComp
            width="50"
            id="oc-bcc"
            name="OC / BCC"
            value={formData.ocbcc}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, ocbcc: value })}
          />
          <DropDown
            width="50"
            id="number-of-floors-approved"
            items={numberOfFloorsApproved}
            value={formData.numberOfFloorsApproved}
            name="Number of Floors Approved"
            setValue={(value) =>
              setFormData({ ...formData, numberOfFloorsApproved: value })
            }
          />
          <TextFieldComp
            width="50"
            id="rera-registration-number"
            name="RERA Registration Number"
            value={formData.reraRegistrationNumber}
            isMultilined={true}
            setValue={(value) =>
              setFormData({ ...formData, reraRegistrationNumber: value })
            }
          />
          <Divider style={{ margin: "5px" }}></Divider>
          <Stack
            direction="row"
            justifyContent="left"
            alignItems="flex-start"
            spacing={2}
            style={{ margin: "20px" }}
          >
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Save
            </Button>
            {/* <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={clearForm}
          >
            Clear Form
          </Button> */}
          </Stack>
        </div>
      </Box>
    </>
  );
}

export default DocumentReferred;
