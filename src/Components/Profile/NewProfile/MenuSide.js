import React,{useState} from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
 
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import HomeIcon from "@material-ui/icons/Home";
import PaymentIcon from "@material-ui/icons/Payment";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import BuildIcon from "@material-ui/icons/Build";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    fontSize: "20px",
    outline:'none',
    "&:hover": {
      color: "#B9B7BD",
    },
  },
  largeIcon: {
    width: 40,
    height: 40,
    outline:'none',
  },
}));

export default function MenuSide({parentCallback}) {
  const classes = useStyles();
  const [MenuValue, setMenuValue] = useState(0);


  const ChangeMenuvalue=()=>{

  }
 
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button onClick= { () =>{   parentCallback(3); }} 
            className={classes.button}
            startIcon={<AssignmentTurnedInIcon className={classes.largeIcon} />}
          >
            Orders
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button onClick= { () =>{   parentCallback(1); }} 
            className={classes.button}
            startIcon={<HomeIcon className={classes.largeIcon} />}
          >
            Adress
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button onClick= { () =>{   parentCallback(2); }}
            className={classes.button}
            startIcon={<PaymentIcon className={classes.largeIcon} />}
          >
            Payement
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            startIcon={<LoyaltyIcon className={classes.largeIcon} />}
          >
            Credit
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            startIcon={<AssignmentReturnIcon className={classes.largeIcon} />}
          >
            Return
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            startIcon={<AssignmentLateIcon className={classes.largeIcon} />}
          >
            Claims
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            startIcon={<BuildIcon className={classes.largeIcon} />}
          >
            perefernces
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            startIcon={<PersonOutlineIcon className={classes.largeIcon} />}
          >
            Profile
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
