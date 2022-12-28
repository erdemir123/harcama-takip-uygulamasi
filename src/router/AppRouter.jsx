import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import SingUp from "../pages/singup/SingUp"
import { userObserver } from "../auth/firebase";
import Navbar from "../components/Navbar"
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
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
          <Route path="/login" element={<Login />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route path="/" element={<PrivateRouter />}>
             <Route path="/home" element={<Home />} />
      </Route>
        </Routes>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AppRouter;
