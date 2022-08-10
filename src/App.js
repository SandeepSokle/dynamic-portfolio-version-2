import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Layout />}></Route>
          <Route exact path="/login" element={<Layout />}></Route>
          <Route exact path="/register" element={<Layout />}></Route>
          <Route exact path="/blogs" element={<Layout />}></Route>
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
