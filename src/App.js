import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/admin" element={<Layout />}></Route>
          <Route exact path="/blogs" element={<Layout />}></Route>
          <Route exact path="/projects" element={<Layout />}></Route>
          <Route exact path="/login" element={<Layout />}></Route>
          <Route exact path="/main" element={<Layout />}></Route>
          <Route exact path="/" element={<Layout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
