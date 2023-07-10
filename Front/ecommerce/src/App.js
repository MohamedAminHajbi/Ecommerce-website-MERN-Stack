import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact"
import "./App.css"
import Loader from "./Components/Loader/Loader";
import SuccessSend from "./Components/SuccessSend/SuccessSend";
import Index from "./Components/Index/Index";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Sidebar><Home /></Sidebar>} />
          <Route path="/contact" element={<Sidebar><Contact/></Sidebar>} />
        </Routes>
    </Router>
  );
}

export default App;
