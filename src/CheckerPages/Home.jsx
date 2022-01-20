import React, { useState } from "react";
import DefaultPage from "./DefaultPage";

import
{
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { useAuth } from "../contexts/AuthContext";

const drawerWidth = 240;

export default function Home()
{
    const [contentName, setcontentName] = useState("DefaultPage");

    const { currentUser, logout } = useAuth();

    const changeContent = (value) =>
    {
        setcontentName(value);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Makarand Rajendra
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "flex" } }}>
                        <Typography variant="h6" noWrap component="div">
                            {currentUser?.email}
                        </Typography>
                        <Button
                            style={{ marginLeft: "10px" }}
                            variant="contained"
                            color="error"
                            startIcon={<LogoutIcon />}
                            onClick={() => logout()}
                        >
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        <ListItem
                            selected={contentName === "Demo"}
                            button
                            onClick={() =>
                            {
                                changeContent("Demo");
                            }}
                        >
                            <ListItemText primary="Demo" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            selected={contentName === "DefaultPage"}
                            button
                            onClick={() =>
                            {
                                changeContent("DefaultPage");
                            }}
                        >
                            <ListItemText primary="DefaultPage" />
                        </ListItem>
                        <Divider />
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {contentName === "DefaultPage" && <DefaultPage />}
            </Box>
        </Box>
    );
}
