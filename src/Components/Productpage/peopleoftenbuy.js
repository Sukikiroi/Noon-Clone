import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({

  Peopleoftenbuy: {
    height: "200px",
    width: "200px",
  
  },
  buttonpeopleoftenbuy: {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    left: "95px",
    bottom: "15px",
  },
  button:{
    borderStyle:'dashed',
    borderColor:'black',
  }
}));
export default function Peopleoftenbuy({ pictur }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <Button className={classes.button}>
        <Paper className={classes.Peopleoftenbuy}>
          <Checkbox
            className={classes.buttonpeopleoftenbuy}
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <img className={classes.img} alt="complex" src={pictur} />
        </Paper>
      </Button>
      <AddIcon />
    </div>
  );
}
