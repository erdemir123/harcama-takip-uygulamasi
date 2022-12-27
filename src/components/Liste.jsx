import {
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSpend } from "../features/spendSlice";

const Liste = () => {
  const { spend } = useSelector((state) => state.spend);
  const dispatch = useDispatch();
  const handleClear = (id) => {
    dispatch(removeSpend(id));
    console.log(id);
  };
  return (
    <List>
      {spend.map((item) => (
        <React.Fragment key={item.id}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={() => handleClear(item.spendId)} />
              </IconButton>
            }
          >
            <ListItemText primary={item.baslik} secondary={item.miktar} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default Liste;
