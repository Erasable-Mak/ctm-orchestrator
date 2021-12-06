import { Box, Button, Stack} from "@mui/material";
import Divider from '@mui/material/Divider'
import React, { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";
import { TextField } from "@mui/material";

import Icon from "@mui/material/Icon";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const CalculationType = [
  {
    id: "Valuation by Land & Building Method",
    value: "Valuation by Land & Building Method",
  },
  {
    id: "Valuation by Comparison Method",
    value: "Valuation by Comparison Method",
  },
];

const initialState = {
};

function Finalization() {
  const [formData, setFormData] = useState(initialState);
  const [reload, setReload] = useState(false);

  const [fields, setFields] = useState([]);
    function handleAdd() {
    const values = [...fields];
    values.push({
      groupHead: "",
      name: "",
      sequence: 0,
      length: "",
      width: "",
      area: "",
    });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }


  const handleSubmit = async () => {
  
  };


  useEffect(() => {}, [reload]);

  return (
    <><> 
      {/*First box*/}
      <Box noValidate sx={{ mt: 1 }}>
        <div>
          <Divider textAlign="left">Details of  Property</Divider><br/>
          <DropDown
            id="calculation-type"
            width={50}
            items={CalculationType}
            value={formData.CalculationType}
            name="Calculation Type"
            setValue={(value) => setFormData({ ...formData, CalculationType: value })} />
            <TextFieldComp
            id="net-mortgage-value-rs"
            width={50}
            name="Net Mortgage Value (Rs)"
            value={formData.NetMortgageValueRs}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, NetMortgageValueRs: value })} />
        <TextFieldComp
            id="net-mortgage-value-in-words"
            width={50}
            name="Net Mortgage Value (In Words)"
            value={formData.NetMortgageValueInWords}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, NetMortgageValueInWords: value })} />
        <TextFieldComp
            id="realisable-value-rs"
            width={50}
            name="Realisable Value (Rs)"
            value={formData.RealisableValueRs}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, RealisableValueRs: value })} />
         <TextFieldComp
            id="realisable-value-in-words"
            width={50}
            name="Realisable Value (In Words)"
            value={formData.RealisableValueInWords}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, RealisableValueInWords: value })} />
        <TextFieldComp
            id="rental-per-month"
            width={50}
            name="Rental Per Month"
            value={formData.RentalPerMonth}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, RentalPerMonth: value })} />
            <TextFieldComp
            id="govt-ready-reckoner-rate"
            width={50}
            name="Govt. Ready Reckoner Rate"
            value={formData.GovtReadyReckonerRate}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, GovtReadyReckonerRate: value })} />
            <TextFieldComp
            id="insurable-value"
            width={50}
            name="Insurable Value"
            value={formData.InsurableValue}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, InsurableValue: value })} />
            <TextFieldComp
            id="distress-value"
            width={50}
            name="Distress Value"
            value={formData.DistressValue}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, DistressValue: value })} />
        </div>
      </Box><br />

      {/*Second box*/}
      <Box noValidate sx={{ mt: 1 }}>
        <div>
          <Divider textAlign="left">Recommendations</Divider><br/>
          <TextFieldComp
            id="stage-of-construction"
            width={50}
            name="% Stage of Construction"
            value={formData.StageOfConstruction}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, StageOfConstruction: value })} />
            <TextFieldComp
            id="recommendation-stage"
            width={50}
            name="Recommendation Stage"
            value={formData.RecommendationStage}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, RecommendationStage: value })} />
        </div>
      </Box><br/>
      
       {/*Last addition remark text field*/}
       <Box noValidate sx={{ mt: 1 }}>
       <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Remarks</TableCell>
                <TableCell>
                  <Button variant="text" onClick={() => handleAdd()}>
                    <Icon color="primary">add_circle</Icon>
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fields.map((field, idx) => (
                <TableRow
                  key={`row-${idx}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                  <TextField
                      id="remarks"
                      style = {{width: 1000}}
                      name="Remarks"
                      value={formData.Remarks}
                      isMultilined={false}
                      setValue={(value) => setFormData({ ...formData, Remarks: value })} />
                  <Button
                      variant="text"
                      color="error"
                      onClick={() => handleRemove(idx)}
                    >
                    <DeleteIcon />
                  </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box><br/><br/>

    <Divider textAlign="left">Declaration</Divider>

      </><Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          style={{ margin: "20px" }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Stack></>
  );
}

export default Finalization;
