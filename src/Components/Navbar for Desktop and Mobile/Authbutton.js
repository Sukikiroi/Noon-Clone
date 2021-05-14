import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./Authbuttontheme";
import { firebase, googleProvider } from "../../Firebase/firebase.confige";
import Logout from "../../Firebase/Logout";
export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  function refreshPage() {
    window.location.reload(false);
  }
  var currentuser = JSON.parse(localStorage.getItem("DbUserdata"));
  let photo = "";
  const providerId = currentuser.id;
  const emailuser = currentuser.email;
  if (currentuser == null) {
    photo = "";
  } else {
    photo = currentuser.Picture;
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        style={{ outline: "none" }}
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Avatar alt="Remy Sharp" src={photo} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <img alt="Remy Sharp" src={photo} /> 
        <MenuItem onClick={handleClose}>{providerId}</MenuItem>
        <MenuItem> {emailuser}</MenuItem>
     

        <MenuItem onClick={handleClose}>
          <Logout />
        </MenuItem>
      </Menu>
    </div>
  );
}
