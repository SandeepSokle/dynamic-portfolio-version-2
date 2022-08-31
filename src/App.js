import { Backdrop, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import { AdminPanel } from "./components/Dashboard/AdminPanel";
import { Layout } from "./components/layout/Layout";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/LoginPage/SignupPage";
import MySnackbar from "../src/components/Snackbar/Snackbar";
import { Portfolio } from "./components/ResumeForUsers.js/Portfolio";

function App() {
  const [isProgress, setIsProgress] = useState(false);
  const progressStatus = useSelector((state) => {
    return state.loader.status;
  });

  // useEffect(() => {
  //   setIsProgress(progressStatus);
  // }, [progressStatus]);

  return (
    <div className="App">
      <Router>
        {isProgress ? (
          <>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isProgress}
            >
              <Box
                sx={{
                  display: "flex",
                  position: "fixed",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 30,
                }}
              >
                <CircularProgress size="5rem" Backdrop />
              </Box>
            </Backdrop>
          </>
        ) : (
          ""
        )}

        <MySnackbar />
        <Routes>
          <Route exact path="/detail/:id" element={<Portfolio />}></Route>
          <Route exact path="/dashboard" element={<AdminPanel />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/register" element={<SignupPage />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
          <Route exact path="/contactus" element={<Layout />}></Route>
          <Route exact path="/docs" element={<Layout />}></Route>
          <Route exact path="/home" element={<Layout />}></Route>
          <Route exact path="/" element={<Layout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
