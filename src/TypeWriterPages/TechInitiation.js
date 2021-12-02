// import 'app.css'
import { Box, Button, Divider, Stack } from "@mui/material";
import React from "react";
import DatePicker from "../components/DatePicker";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";

function TechInitiation() {
  return (
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell align="left">Institution Name</TableCell>
    //         <TableCell align="left">Borrower Name</TableCell>
    //         <TableCell align="left">Prop. Location</TableCell>
    //         <TableCell align="left">Engineer Name</TableCell>
    //         <TableCell align="left">Date of Visit</TableCell>
    //         <TableCell align="left">Case Remarks</TableCell>
    //         <TableCell align="left">Case Status</TableCell>
    //         <TableCell align="left">Action</TableCell>
    //       </TableRow>
    //       <TableBody></TableBody>
    //     </TableHead>
    //   </Table>
    // </TableContainer>
    <Box noValidate sx={{ mt: 1 }}>
      <div>
        {/* <DropDown
          id="purpose-of-valuation"
          items={purposeOfValuationOptions}
          name="Purpose Of Valuation"
          value={formData.purposeOfValuation}
          setValue={(value) =>
            setFormData({ ...formData, purposeOfValuation: value })
          }
        /> */}
        <TextFieldComp
          id="institution-type"
          name="Institution Type"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <DropDown
          id="institute-name"
          items={[
            {
              id: "HDFC",
              value: "HDFC",
            },
            {
              id: "SBI",
              value: "SBI",
            },
            {
              id: "ICICI",
              value: "ICICI",
            },
          ]}
          name="Institute Name"
          value="HDFC"
          // setValue={(value) =>
          //   setFormData({ ...formData, purposeOfValuation: value })
          // }
        />
        <DropDown
          id="institute-branch"
          items={[
            {
              id: "Pune",
              value: "Pune",
            },
            {
              id: "Mumbai",
              value: "Mumbai",
            },
            {
              id: "Nashik",
              value: "Nashik",
            },
          ]}
          name="Institute Branch"
          value="Pune"
          // setValue={(value) =>
          //   setFormData({ ...formData, purposeOfValuation: value })
          // }
        />
        <DatePicker id="date-of-request" name="Date of Request" value={null} />
        <DatePicker id="date-of-visit" name="Date of Visit" value={null} />
        <Divider textAlign="left">General Details</Divider>
        <TextFieldComp
          id="institution-type"
          name="Institution Type"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="name-of-applicant"
          name="Name of Applicant"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="name-of-contact-person"
          name="Name of Contact Person"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="mobile-no"
          name="Mobile Number"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <DropDown
          id="loan-type"
          items={[
            {
              id: "a",
              value: "A",
            },
            {
              id: "b",
              value: "B",
            },
          ]}
          name="Loan Type / Product"
          value="A"
          // setValue={(value) =>
          //   setFormData({ ...formData, purposeOfValuation: value })
          // }
        />
        <TextFieldComp
          id="file-ref-no"
          name="File Ref No."
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="cas-no"
          name="CAS No."
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="address-of-the-property-1"
          name="Address of the Property"
          value={null}
          isMultilined={true}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
          helperText="As per Request"
        />
        <TextFieldComp
          id="address-of-the-property-2"
          name="Address of the Property"
          value={null}
          isMultilined={true}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
          helperText="Valued / As per Inspection"
        />
        <Divider />
        <TextFieldComp
          id="flat-no"
          name="Flat No./Unit No."
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="floor-wing"
          name="Floor, Wing"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="society"
          name="Society/Building Name"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="plot-no"
          name="Plot No."
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="sector-colony-locality"
          name="Sector/Colony/Locality"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="road-other"
          name="Road/Other"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="location"
          name="Location"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="city"
          name="City"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="district"
          name="District"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="landmark"
          name="Landmark"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="pincode"
          name="Pincode"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="cts"
          name="CTS/Survey No & Village"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <TextFieldComp
          id="ward-name"
          name="Ward Name/No."
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          // width={50}
        />
        <Divider style={{ margin: "5px" }}></Divider>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          style={{ margin: "20px" }}
        >
          <Button variant="contained">Update</Button>
        </Stack>
      </div>
    </Box>
  );
}

export default TechInitiation;
