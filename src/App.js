import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import { AdminPanel } from "./components/Dashboard/AdminPanel";
import { Layout } from "./components/layout/Layout";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/LoginPage/SignupPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
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
