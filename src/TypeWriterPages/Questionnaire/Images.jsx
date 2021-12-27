import React from "react";

import { Box } from "@mui/system";
import { Divider, Stack } from "@mui/material";
import { Button } from "@mui/material";

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

const Images = () => {
  return (
    <Box noValidate sx={{ mt: 1 }}>
      <div>
        <Divider textAlign="left">Photographs</Divider>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Button variant="contained">Add</Button>
          <Button variant="contained">Update</Button>
          <Button variant="contained">Delete All</Button>
          <Button variant="contained">Download Images</Button>
        </Stack>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image Preview</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Image Sequence</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
              <TableBody></TableBody>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default Images;
