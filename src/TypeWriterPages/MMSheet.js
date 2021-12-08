import React, { useState } from "react";
import ResidentialAssets from "./ResidentialAssets";
import CommercialAssets from "./CommercialAssets";

import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";

const MMSheet = () => {
  const [contentName, setcontentName] = useState("Residential Assets");

  const changeContent = (value) => {
    setcontentName(value);
  };

  return (
    <div>
      {" "}
      <Box>
        <List sx={{ display: "flex", alignItems: "center" }}>
          <ListItem
            selected={contentName === "Residential Assets"}
            button
            onClick={() => {
              changeContent("Residential Assets");
            }}
          >
            <ListItemText primary="Residential Assets" />
          </ListItem>
          <Divider orientation="vertical" flexItem />

          <ListItem
            selected={contentName === "Commercial Assets"}
            button
            onClick={() => {
              changeContent("Commercial Assets");
            }}
          >
            <ListItemText primary="Commercial Assets" />
          </ListItem>
        </List>
      </Box>
      {contentName === "Residential Assets" && <ResidentialAssets />}
      {contentName === "Commercial Assets" && <CommercialAssets />}
    </div>
  );
};

export default MMSheet;
