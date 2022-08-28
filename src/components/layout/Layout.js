import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import NavbarTop from "./NavbarTop";
import NavBarDrawer from "./Drawer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../HomePage/header";
import HomeInfo from "../HomePage/HomeInfo";
import InfoContainer from "../HomePage/InfoContainer";
import FeatureContainer from "../HomePage/FeatureContainer";
import { Footer } from "../HomePage/Footer";

const mdTheme = createTheme();

export const Layout = () => {
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("/");
  const history = useNavigate();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let newRoute;
    if (selectedTab === "Documentation") newRoute = "docs";
    else {
      newRoute = selectedTab.toLowerCase().replace(/\s/g, "");
    }
    history(`../${newRoute}`, { replace: false });
  }, [selectedTab, history]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavbarTop open={open} toggleDrawer={toggleDrawer} />
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
          <Box sx={{ p: 0 }}>
            <Header />
            <InfoContainer />
            <FeatureContainer open={open} />
            <HomeInfo />
            <Footer/>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
