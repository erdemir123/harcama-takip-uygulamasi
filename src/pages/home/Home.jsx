import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import List from "../../components/Liste";
import Loading from "../../helper/img/loading.gif"
import styles from "./home.module.css";
const Home = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2500);
  }, []);
  return (
    <div>
{
      load ? <img src={Loading} alt="" className={styles.img} /> : (<div>
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
      </div>)
    }
    </div>
    
    
  );
};

export default Home;
