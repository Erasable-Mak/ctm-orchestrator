import React from "react";
import { Box, Button, Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextFieldComp from "../../components/TextFieldComp";

const Valuation = () => {
  return (
    <Box noValidate sx={{ mt: 1 }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ sm: 1, xs: 1, md: 1, lg: 2 }}
      >
        <Grid item xs={6}>
          <TextFieldComp
            id="land-area-as-per-plan"
            name="Land area as per Plan"
            value={null}
            isMultilined={false}
            //   setValue={(value) => setFormData({ ...formData, address: value })}
            width={50}
          />
        </Grid>
        <Grid item xs={6}>
          <TextFieldComp
            id="land-area-as-per-plan"
            name="Land area as per Plan"
            value={null}
            isMultilined={false}
            //   setValue={(value) => setFormData({ ...formData, address: value })}
            width={50}
          />
        </Grid>
        <Grid item xs={6}>
          <TextFieldComp
            id="land-area-as-per-plan"
            name="Land area as per Plan"
            value={null}
            isMultilined={false}
            //   setValue={(value) => setFormData({ ...formData, address: value })}
            width={50}
          />
        </Grid>
        <Grid item xs={6}>
          <TextFieldComp
            id="land-area-as-per-plan"
            name="Land area as per Plan"
            value={null}
            isMultilined={false}
            //   setValue={(value) => setFormData({ ...formData, address: value })}
            width={50}
          />
        </Grid>
      </Grid>
      <div>
        <Divider textAlign="left">
          Valluation by Land and Building Method
        </Divider>
        <TextFieldComp
          id="land-area-as-per-plan"
          name="Land area as per Plan"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="land-area-as-per-deed"
          name="Land area as per Deed"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="land-area-as-measured"
          name="Land area as Measured"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="land-area-considered-for-valuation"
          name="Land area Considered For Valuation"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="A"
        />
        <TextFieldComp
          id="land-rate"
          name="Land Rate"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="B"
        />
        <TextFieldComp
          id="land-value"
          name="Land Value (X)=(A*B)"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="X = (A * B)"
        />
        <TextFieldComp
          id="area-as-per-plan"
          name="Area As per Plan"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="area-as-per-deed"
          name="Area As per Deed"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="area-as-measured"
          name="Area As Measured"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="area-considered-for-valuation"
          name="Area Considered For Valuation"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="C"
        />
        <TextFieldComp
          id="loading"
          name="Loading"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="D"
        />
        <TextFieldComp
          id="built-up-area-for-valuation"
          name="Built-up Area for Valuation"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="Y = (C * D)"
        />
        <TextFieldComp
          id="construction-rate"
          name="Construction Rate"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="E"
        />
        <TextFieldComp
          id="construction-cost-on-completion"
          name="Construction Cost on Completion"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="Z = (Y * E)"
        />
        <TextFieldComp
          id="rate-range"
          name="Rate Range"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="construction-rate"
          name="Construction Rate"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="E"
        />
        <TextFieldComp
          id="proportionate-construction-cost-as-on-date"
          name="Proportionate Construction Cost as on Date"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="G = (Z * F)"
        />
        <TextFieldComp
          id="cost-of-const-as-per-architect-estimate"
          name="Cost of Const. as per Architect Estimate"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="value-by-land-building-method-as-on-date"
          name="Value by Land & Building Method as on Date"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="YY = (X + G)"
        />
        <TextFieldComp
          id="value-by-land-building-method-as-on-completion"
          name="Value by Land & Building Method as on Completion"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="VLB = (X + Z)"
        />
        <Divider textAlign="left">Valluation by Comparision Method</Divider>
        <TextFieldComp
          id="carpet-area-as-measured"
          name="Carpet area as Measured"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="carpet-area-as-per-agreement"
          name="Carpet Area as per Agreement"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="carpet-area-as-per-app-plan"
          name="Carpet Area as per App. Plan"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="area-considered-for-valuation"
          name="Area Considered for valuation"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="A"
        />
        <TextFieldComp
          id="loading"
          name="Loading"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="B"
        />
        <TextFieldComp
          id="super-area"
          name="Super Area"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="C = (A * B)"
        />
        <TextFieldComp
          id="rate-range"
          name="Rate Range"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="rate-per-sq-ft"
          name="Rate per sq ft"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="D"
        />
        <TextFieldComp
          id="value"
          name="Value"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="E = (C * D)"
        />
        <TextFieldComp
          id="no-of-car-park"
          name="No of Car Park"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="F"
        />
        <TextFieldComp
          id="rate-per-car-park"
          name="Rate per Car Park"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="G"
        />
        <TextFieldComp
          id="total-value-of-car-park"
          name="Total Value of Car Park"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="H = (F * G)"
        />
        <TextFieldComp
          id="other-one-time-cost"
          name="Other One Time Cost"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="I"
        />
        <TextFieldComp
          id="duties-levied"
          name="Duties Levied"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="J"
        />
        <TextFieldComp
          id="text-field"
          name="Text Field"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="amenities-cost"
          name="Amenities Cost"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="K"
        />
        <TextFieldComp
          id="value-by-comparision-method-on-completion"
          name="Value by Comparision Method on Completion"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
          helperText="VC = (E + H + I + J + K)"
        />
        <TextFieldComp
          id="value-by-comparision-method-as-on-date"
          name="Value by Comparision Method as on date"
          value={null}
          isMultilined={false}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <TextFieldComp
          id="case-history"
          name="Case History"
          value={null}
          isMultilined={true}
          //   setValue={(value) => setFormData({ ...formData, address: value })}
          width={50}
        />
        <Divider style={{ margin: "5px" }}></Divider>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          style={{ margin: "20px" }}
        >
          <Button variant="contained">Save</Button>
        </Stack>
      </div>
    </Box>
  );
};

export default Valuation;
