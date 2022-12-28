import React from "react";
import styles from "./navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../auth/firebase";
import woman from  "../helper/img/woman.png"
const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(user);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" component="button" className={styles.link}>
                HARCAMA TAKİP UYGULAMASI
              </Link>
            </Typography>
            {user?.email ? (
              <div className={styles.user}>
                <img src={woman} alt="" className={styles.img}/>
                <p className={styles.username}> {user.username}</p>
                
                <Button
                  variant="outlined"
                  color="inherit"
                  size="small"
                  onClick={() => logOut(navigate, dispatch)}
                  className={styles.logOut}
                >
                  Log Out
                </Button>
              </div>
            ) : (
              <div>
                {" "}
                <Button variant="outlined" color="inherit">
                  <Link to="/" component="button" className={styles.link}>
                    GİRİŞ
                  </Link>
                </Button>
                <Button variant="text" color="secondary">
                  <Link to="/singup" component="button" className={styles.link}>
                    KAYIT OL
                  </Link>
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
