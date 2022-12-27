import "./singUp.module.css";
import React, { useState } from "react";
import "./singUp.module.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { createUser, signIn } from "../../auth/firebase";
import { useDispatch } from "react-redux";
const SingUp = () => {
  const [rememberUser, setrememberUser] = useState(false);
  const dispatch = useDispatch()
    const navigate =useNavigate()
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    remember: rememberUser,
  });
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const displayName = user.username;
    const email = user.email;
    const password = user.password;
    createUser(email, password, navigate, displayName, dispatch);
    console.log(email, password, displayName);
  };

  return (
    <div>
      <Grid item xs={12} sm={8} md={5} component={Paper}>
        <Box
          sx={{
            mt: 2,
            py: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SİNG IN
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 ,mx:6,}}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  value={rememberUser}
                  onClick={() => setrememberUser(!rememberUser)}
                  onChange={(e) =>
                    setUser({ ...user, remember: !rememberUser })
                  }
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default SingUp;
