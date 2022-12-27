import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Form from "../../components/Form";
import List from "../../components/Liste";
import "./home.module.css";
const Home = () => {
  
  return (
    <div>
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={12}>
          <Grid item md={4} sm={12} xs={12}>
            <Form />
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <List />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
