import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSpend } from "../features/spendSlice";
import { toastWarnNotify } from "../helper/Toastfy";

const Form = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { spend } = useSelector((state) => state.spend);
  const [baslik, setBaslik] = useState("");
  const [miktar, setMiktar] = useState("");
  const [spendId,setSpendId]=useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    setSpendId(Math.floor(Math.random()*10000))
    if(baslik && miktar){
        dispatch(addSpend({ baslik, miktar,spendId }))
    }
    else{
        if(!baslik){
            toastWarnNotify("Harcama Başlığı Giriniz")
        }
        if(!miktar){
            toastWarnNotify("Harcama Miktarı Giriniz")
        }
        
    }
    setBaslik("")
    setMiktar("")
  };
  console.log(spend);
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h6" color="darkslateblue">
        Harcama Bilgisi Giriniz
      </Typography>
      <TextField
        label="Harcama Başlık"
        variant="standard"
        fullWidth
        required
        onChange={(e) => setBaslik(e.target.value)}
        value={baslik}
      />
      <TextField
        label="Harcama Miktar"
        variant="standard"
        fullWidth
        required
        onChange={(e) => setMiktar(e.target.value)}
        value={miktar}
        sx={{ my: 5 }}
      />
      <Button variant="contained" color="secondary" type="submit">
        EKLE
      </Button>
    </form>
  );
};

export default Form;
