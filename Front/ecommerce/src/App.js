import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import "./App.css"
function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
