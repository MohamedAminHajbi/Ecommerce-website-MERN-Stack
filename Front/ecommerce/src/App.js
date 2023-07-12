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
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  
  return (
    <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Sidebar><Home /></Sidebar>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Index />}>
          <Route element={<PrivateRoute />}>
            <Route path="/contact" element={<Sidebar><Contact /></Sidebar>} />
          </Route>
        </Route>
        </Routes>
    </Router>
  );
}

export default App;
