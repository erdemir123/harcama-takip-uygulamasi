import React from "react";
import styles from "./navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
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
            {user ? (
              <div>
                <p> {user.username}</p>
              </div>
            ) : (
              <div>
                {" "}
                <Button variant="outlined" color="inherit">
                  <Link to="/login" component="button" className={styles.link}>
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
