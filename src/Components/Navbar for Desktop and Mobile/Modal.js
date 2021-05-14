import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  chakra,
} from "@chakra-ui/react";
import Singinform from "./Singinform";
import Registerform from "./Registerform";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "400px",
    height: "500px",
    position: "relative",
    top: "20px",
  },
  logbutton: {
    color: "Black",
    borderColor: "Black",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
        className={classes.logbutton}
      >
        Login
      </Button>

    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Paper className={classes.paper}>
          <Tabs>
            <TabList>
              <Tab style={{ outline: "none" }}>Sing in</Tab>
              <Tab style={{ outline: "none" }}>Register</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Singinform />
              </TabPanel>
              <TabPanel>
                <Registerform />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Paper>
      </Modal>
    </div>
  );
}
