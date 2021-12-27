import React, { useState } from "react";
import { Box } from "@mui/system";
import { Divider, Stack } from "@mui/material";
import { Button } from "@mui/material";
import Icon from "@mui/material/Icon";
import DeleteIcon from "@mui/icons-material/Delete";
import TextFieldComp from "../components/TextFieldComp";
import DropDown from "../components/DropDown";

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

function ResidentialAssets() {
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

  return (
    <Box noValidate sx={{ mt: 1 }}>
      <div>
        {/* <Divider textAlign="left">Photographs</Divider>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Button variant="contained">Add</Button>
          <Button variant="contained">Update</Button>
          <Button variant="contained">Delete All</Button>
          <Button variant="contained">Download Images</Button>
        </Stack> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Group Head</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>sequence</TableCell>
                <TableCell>Length</TableCell>
                <TableCell>Width</TableCell>
                <TableCell>Area</TableCell>
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
                    <TextFieldComp
                      id={`${idx}-group-head`}
                      name="Group Head"
                      value={field.groupHead}
                      isMultilined={false}
                      setValue={(value, i = idx) => {
                        const values = [...fields];
                        values[i].groupHead = value;
                        setFields(values);
                      }}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <DropDown
                      id={`${idx}-name`}
                      items={[
                        { id: `${idx}-bedroom`, value: "Bedroom" },
                        { id: `${idx}-hall`, value: "Hall" },
                        { id: `${idx}-kitchen`, value: "Kitchen" },
                        { id: `${idx}-hall`, value: "Hall" },
                        { id: `${idx}-hall`, value: "Hall" },
                        { id: `${idx}-hall`, value: "Hall" },
                        { id: `${idx}-hall`, value: "Hall" },
                        { id: `${idx}-hall`, value: "Hall" },
                        { id: `${idx}-hall`, value: "Hall" },
                      ]}
                      value={field.name}
                      name="Name"
                      setValue={(value, i = idx) => {
                        const values = [...fields];
                        values[i].name = value;
                        setFields(values);
                      }}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextFieldComp
                      id={`${idx}-sequence`}
                      name="Sequence"
                      value={field.sequence}
                      isMultilined={false}
                      setValue={(value, i = idx) => {
                        const values = [...fields];
                        values[i].sequence = value;
                        setFields(values);
                      }}
                    />
                  </TableCell>
                  <TableCell align="left">
                    {/* Length */}
                    <TextFieldComp
                      id={`${idx}-length`}
                      name="Length"
                      value={field.length}
                      isMultilined={false}
                      setValue={(value, i = idx) => {
                        const values = [...fields];
                        values[i].length = value;
                        setFields(values);
                      }}
                    />
                  </TableCell>
                  <TableCell align="left">
                    {/* Width */}
                    <TextFieldComp
                      id={`${idx}-width`}
                      name="Width"
                      value={field.width}
                      isMultilined={false}
                      setValue={(value, i = idx) => {
                        const values = [...fields];
                        values[i].width = value;
                        setFields(values);
                      }}
                    />
                  </TableCell>
                  <TableCell align="left">
                    {/* Area */}
                    <TextFieldComp
                      id={`${idx}-area`}
                      name="Area"
                      value={field.area}
                      isMultilined={false}
                      setValue={(value, i = idx) => {
                        const values = [...fields];
                        values[i].area = value;
                        setFields(values);
                      }}
                    />
                  </TableCell>
                  <TableCell>
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
              <TableRow
                // key={`row-fixed`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Balcony</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell>
                  <TextFieldComp
                    id="balcony-total"
                    name="Area"
                    value=""
                    isMultilined={false}
                    // setValue={(value, i = idx) => {
                    //   const values = [...fields];
                    //   values[i].area = value;
                    //   setFields(values);
                    // }}
                  />
                </TableCell>
                {/* <TableCell>Area</TableCell>
                <TableCell>
                  <Button variant="text" onClick={() => handleAdd()}>
                    <Icon color="primary">add_circle</Icon>
                  </Button>
                </TableCell> */}
              </TableRow>
              <TableRow
                // key={`row-fixed`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Carpet Area</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell>
                  <TextFieldComp
                    id="carpet-area-total"
                    name="Area"
                    value=""
                    isMultilined={false}
                    // setValue={(value, i = idx) => {
                    //   const values = [...fields];
                    //   values[i].area = value;
                    //   setFields(values);
                    // }}
                  />
                </TableCell>
                {/* <TableCell>Area</TableCell>
                <TableCell>
                  <Button variant="text" onClick={() => handleAdd()}>
                    <Icon color="primary">add_circle</Icon>
                  </Button>
                </TableCell> */}
              </TableRow>
              <TableRow
                // key={`row-fixed`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Other Area</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell>
                  <TextFieldComp
                    id="other-area-total"
                    name="Area"
                    value=""
                    isMultilined={false}
                    // setValue={(value, i = idx) => {
                    //   const values = [...fields];
                    //   values[i].area = value;
                    //   setFields(values);
                    // }}
                  />
                </TableCell>
                {/* <TableCell>Area</TableCell>
                <TableCell>
                  <Button variant="text" onClick={() => handleAdd()}>
                    <Icon color="primary">add_circle</Icon>
                  </Button>
                </TableCell> */}
              </TableRow>
              <TableRow
                // key={`row-fixed`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Refuge Area</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell>
                  <TextFieldComp
                    id="refuge-area-total"
                    name="Area"
                    value=""
                    isMultilined={false}
                    // setValue={(value, i = idx) => {
                    //   const values = [...fields];
                    //   values[i].area = value;
                    //   setFields(values);
                    // }}
                  />
                </TableCell>
                {/* <TableCell>Area</TableCell>
                <TableCell>
                  <Button variant="text" onClick={() => handleAdd()}>
                    <Icon color="primary">add_circle</Icon>
                  </Button>
                </TableCell> */}
              </TableRow>
              <TableRow
                // key={`row-fixed`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Terrace Area</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell>
                  <TextFieldComp
                    id="terrace-area-total"
                    name="Area"
                    value=""
                    isMultilined={false}
                    // setValue={(value, i = idx) => {
                    //   const values = [...fields];
                    //   values[i].area = value;
                    //   setFields(values);
                    // }}
                  />
                </TableCell>
                {/* <TableCell>Area</TableCell>
                <TableCell>
                  <Button variant="text" onClick={() => handleAdd()}>
                    <Icon color="primary">add_circle</Icon>
                  </Button>
                </TableCell> */}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Divider style={{ margin: "5px" }}></Divider> */}
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

export default ResidentialAssets;

// const MMSheet = () => {
