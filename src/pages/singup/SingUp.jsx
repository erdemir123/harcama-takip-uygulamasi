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
import {  useNavigate } from "react-router-dom";
import { createUser } from "../../auth/firebase";
import { useDispatch } from "react-redux";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
const SingUp = () => {
  const [rememberUser, setrememberUser] = useState(false);
  const [genderUser,setGenderUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    remember: rememberUser,
    gender:genderUser
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = user.username;
    const email = user.email;
    const password = user.password;
    const gender = genderUser;
    const remember = rememberUser;
    createUser(email, password,remember,gender, navigate, displayName, dispatch);
    console.log(email, password,remember,gender)
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
            sx={{mx: 6 }}
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
            
            <FormControl sx={{border:"1px solid #bebebe",display:"flex",borderRadius:"3px",margin: "8px  0"}}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                row={true}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                //   checked={gender ==='female'}
                  onChange={(e)=>setGenderUser(e.target.value)}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                //   checked={gender ==='male'}
                  onChange={(e)=>setGenderUser(e.target.value)}
                />
              </RadioGroup>
            </FormControl>
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
