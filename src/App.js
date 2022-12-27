import { Container } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { userObserver } from "./auth/firebase";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SingUp from "./pages/singup/SingUp";
import { ToastContainer } from 'react-toastify';


function App() {
  let currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    userObserver(dispatch);
  }, [currentUser]);
  return (
    <div>
      <Navbar />
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SingUp />} />
      </Routes>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
