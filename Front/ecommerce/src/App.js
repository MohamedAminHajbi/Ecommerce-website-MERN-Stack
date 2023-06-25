import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
