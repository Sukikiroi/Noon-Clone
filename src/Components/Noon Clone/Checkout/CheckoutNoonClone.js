import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Checkoutcontainer from "./Checkoutcontainer";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const useStyles = makeStyles((theme) => ({
  steps_root: {
    width: "100%",
    height:'120px',
    position: 'fixed',
    zIndex:'5',
    top: '0',
    backgroundColor:'whitesmoke',
    display: "flex",
    justifyContent: "center",
 
  },
  steps: {
    width: "98%",
    marginTop: "30px",
    margin: "auto",
  },
  suivant_button_root: {
    width: "100%",
    display: "flex",
    height:'100px',
    justifyContent: "center",
    zIndex:'5',
    marginTop:'80px',
  },
  suivant_button: {
    width: "80%", 
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "30px",
    '& Button':{
      whiteSpace:'nowrap',
      textTransform:'capitalize',
      '& hover':{
        border:'2px solid dodgerblue',
      },
      width:'90px'
    }
  },
}));
const Checkoutnoonclone = () => {
  function getSteps() {
    return ["Shipping Address", "Payment", "Order Placed"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return "Shipping Address";
      case 1:
        return "Payment";
      case 2:
        return "Order Placed";
      default:
        return "Unknown step";
    }
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const classes = useStyles();
  return (
    <div>
      <div className={classes.steps_root}>
        <div className={classes.steps}>
          <Stepper
            style={{ whiteSpace: "nowrap", backgroundColor: "yellow" }}
            activeStep={activeStep}
          >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
      </div>
      <div className={classes.suivant_button_root}>
        <div className={classes.suivant_button}>
          <Button onClick={handleNext} endIcon={<ArrowRightAltIcon/>}>Suivant</Button>
        </div>
      </div>
      <Checkoutcontainer steps_value={activeStep} />
    </div>
  );
};

export default Checkoutnoonclone;
