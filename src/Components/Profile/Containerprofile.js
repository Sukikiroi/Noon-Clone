import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import {  withStyles } from '@material-ui/core/styles';
import Editprofile from './Editprofile'
import { firebase, googleProvider } from "../../Firebase/firebase.confige"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  papertab:{
height:'500px',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,height:'500px',
  },
  avatar:{
    width: 70,
    height: 70,
    border: `2px solid ${theme.palette.background.paper}`,

  },
}));
var currentuser = JSON.parse(localStorage.getItem("User"));
let photo='';
let providerId =  ''
let email =  ''
let displayName = ''
if (currentuser== null){
  photo=''
}
else {
  photo = currentuser.photoURL;
  providerId = currentuser.uid;
  email = currentuser.email;
  displayName = currentuser.displayName;
}


console.log(photo)
const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(Avatar);
export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={0}>
            {" "}
            <Grid container>
              <Grid item xs={12}>
              <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={<SmallAvatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />}
      >
        <Avatar  className={classes.avatar} alt="Travis Howard" src={photo} />
      </Badge>
              </Grid>
              <Grid item xs={12}>
             <h3>{displayName} </h3>
              </Grid>
              <Grid item xs={12}>
                <Button
                  href=""
                  color="secondary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary">
                  My Tickets
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Contact us
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.papertab}>


            <Editprofile/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
