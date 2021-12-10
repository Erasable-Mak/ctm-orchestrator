import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import DropDown from "../../components/DropDown";
import TextFieldComp from "../../components/TextFieldComp";

const ReportMaker = [
  {
    id: "X",
    value: "X",
  },
];
const ReportChecker = [
  {
    id: "Y",
    value: "Y",
  },
];
const SubmitTo = [
  {
    id: "Z",
    value: "Z",
  },
];
const Status = [
  {
    id: "Send report to principle Valuers",
    value: "Send report to principle Valuers",
  },
  {
    id: "Send report to Release Case",
    value: "Send report to Release Case",
  },
];

const initialState = {};

function CaseStatus() {
  const [formData, setFormData] = useState(initialState);
  const [reload, setReload] = useState(false);

  const handleSubmit = async () => {};

  useEffect(() => {}, [reload]);

  return (
    <>
      <>
        {/*First box*/}
        <Box noValidate sx={{ mt: 1 }}>
          <div>
            <TextFieldComp
              id="reception"
              width={50}
              name="Reception"
              value={formData.Reception}
              isMultilined={false}
              setValue={(value) =>
                setFormData({ ...formData, Reception: value })
              }
            />
            <TextFieldComp
              id="engineer"
              width={50}
              name="Engineer"
              value={formData.Engineer}
              isMultilined={false}
              setValue={(value) =>
                setFormData({ ...formData, Engineer: value })
              }
            />
            <DropDown
              id="report-maker"
              width={50}
              items={ReportMaker}
              value={formData.ReportMaker}
              name="Report Maker"
              setValue={(value) =>
                setFormData({ ...formData, ReportMaker: value })
              }
            />
            <DropDown
              id="report-checker"
              width={50}
              items={ReportChecker}
              value={formData.ReportChecker}
              name="Report Checker"
              setValue={(value) =>
                setFormData({ ...formData, ReportChecker: value })
              }
            />
            <DropDown
              id="submit-to"
              width={50}
              items={SubmitTo}
              value={formData.SubmitTo}
              name="Submit To"
              setValue={(value) =>
                setFormData({ ...formData, SubmitTo: value })
              }
            />
            <TextFieldComp
              id="fees"
              width={50}
              name="Fees"
              value={formData.Fees}
              isMultilined={false}
              setValue={(value) => setFormData({ ...formData, Fees: value })}
            />
            <DropDown
              id="status"
              width={50}
              items={Status}
              value={formData.Status}
              name="Status"
              setValue={(value) => setFormData({ ...formData, Status: value })}
            />
            <TextField
              id="case-status"
              style={{ width: "50ch" }}
              sx={{ m: 1 }}
              label="Case Status"
              multiline
              value={formData.example}
              rows={4}
              setValue={(value) => setFormData({ ...formData, address: value })}
            />
          </div>
        </Box>
        <br />
        <br />
      </>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        style={{ margin: "20px" }}
      >
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update & Mail
        </Button>
      </Stack>
    </>
  );
}

export default CaseStatus;
