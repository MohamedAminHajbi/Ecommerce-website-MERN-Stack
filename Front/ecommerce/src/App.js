import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact"
import "./App.css"
function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
