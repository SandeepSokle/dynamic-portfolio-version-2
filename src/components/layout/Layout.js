import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import NavbarTop from "./NavbarTop";
import NavBarDrawer from "./Drawer";

const mdTheme = createTheme();

export const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedTab, setSelectedTab] = React.useState("About");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavbarTop
          open={open}
          toggleDrawer={toggleDrawer}
          anchorEl={anchorEl}
          handlePopoverOpen={handlePopoverOpen}
          handlePopoverClose={handlePopoverClose}
        />
        <NavBarDrawer
          open={open}
          toggleDrawer={toggleDrawer}
          setSelectedTab={setSelectedTab}
        />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            padding: "0px",
          }}
        >
          <Box sx={{ mt: 11, mb: 4, p: 0 }}>
            <h1>{selectedTab}</h1>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
