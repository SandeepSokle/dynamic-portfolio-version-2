import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import NavbarTop from "./NavbarTop";
import NavBarDrawer from "./Drawer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../HomePage/header";

const mdTheme = createTheme();

export const Layout = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTab, setSelectedTab] = useState("/");
  const history = useNavigate();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    let newRoute;
    if (selectedTab === "Documentation") newRoute = "docs";
    else {
      newRoute = selectedTab.toLowerCase().replace(/\s/g, "");
    }
    history(`../${newRoute}`, { replace: true });
  }, [selectedTab, history]);

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
          setSelectedTab={setSelectedTab}
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
          <Box sx={{  p: 0 }}>
            {/* <h1>{selectedTab}</h1> */}
            <Header />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
