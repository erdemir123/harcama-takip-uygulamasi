import {
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSpend } from "../features/spendSlice";

const Liste = () => {
  const { spend } = useSelector((state) => state.spend);
  const dispatch = useDispatch();
  const handleClear = (item) => {
    dispatch(removeSpend(item.spendId));
    
  };
  useEffect(()=>{
    localStorage.setItem("spend",JSON.stringify(spend))
},[spend])
  return (
    <List>
      {spend.map((item) => (
        <div key={item.spendId}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={() => handleClear(item)} />
              </IconButton>
            }
          >
            <ListItemText primary={item.baslik} secondary={item.miktar} />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default Liste;
