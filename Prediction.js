import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Menu2 from './Menu2';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import AssessmentIcon from '@material-ui/icons/Assessment';
import axios from 'axios'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import BlurOnTwoToneIcon from '@material-ui/icons/BlurOnTwoTone';
import CallSplitTwoToneIcon from '@material-ui/icons/CallSplitTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const mystyle = {
  position:'relative',
  top:'300px',
  left:'200px',
  color: "white",
  'borderRadius':'10px',
  backgroundColor: "Purple",
  padding: "10px",
  fontFamily: "Arial",
  bottom:"100px",
  width:"300px",
  height:"200px",
  
  right:"900px"
};
 //Css of The Card
  const Cardo = {
  position:'relative',
  opacity:" 2",
  bottom:'100px',
  height: '120px',
 
  borderRadius:'60px',
  width:'600px',
  fontFamily: "Arial"
};
const Boton = {
  margin: "0 10px", 
  backgroundColor: "Purple",
  borderRadius:'10px',
  top:'100px',
  right:'250px',
  fontFamily: "Arial"
};
const Textfild = {
 
  borderRadius:'90px',
  top:'10px',
  left:'50px',
  fontFamily: "Arial"
};
const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
export default function BasicTextFields() {
  const classes = useStyles();
  const [relustName, setrelustName] =React.useState("");
  const [Name, setName] =React.useState("Name");
  const [Resultats, setResultats] =React.useState("Resultats");
  const [ESOL, setESOL] =React.useState("ESOL");
  const [Weight, setWeight] =React.useState("Weight");
  const [HBond, setHBond] =React.useState("HBond");
  const [Rings, setRings] =React.useState("Rings");
  const [Rotatable, setRotatable] =React.useState("Rotatable");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  //Handele Event of a Inpute
 const  handleName = event => {
   
  setName(event.target.value);
  }
  //Handele Event of a Inpute
  const  handleESOL = event => {
   
    setESOL(event.target.value);
    }
      //Handele Event of a Inpute
 const  handleWeight = event => {
   
  setWeight(event.target.value);
  }
    //Handele Event of a Inpute
 const  handleHBond = event => {
   
  setHBond(event.target.value);
  }
    //Handele Event of a Inpute
 const  handleRings = event => {
 
    
  setRings(event.target.value);
  }
      //Handele Event of a Inpute
 const  handleRotatable = event => {
 
    
  setRotatable(event.target.value);
  }
  const  PredictSvm = event => {
    setrelustName('Svm');
    axios.post(`http://127.0.0.1:5000/api/Svmpredict`, { Name,ESOL,Weight,HBond,Rings,Rotatable })
        .then(res => {
          setResultats(res.data);
         
        }) }
  const  PredictNighbor = event => {
    setrelustName('Nighbor');
  axios.post(`http://127.0.0.1:5000/api/Neighborspredict`, { Name,ESOL,Weight,HBond,Rings,Rotatable })
      .then(res => {
        setResultats(res.data);
       
      }) }
  const  PredictArbre = event => {
    setrelustName('Arbre');
        axios.post(`http://127.0.0.1:5000/api/arbreredict`, { Name,ESOL,Weight,HBond,Rings,Rotatable })
            .then(res => {
              setResultats(res.data);
             
            }) }
  const  Predictbayes = event => {
    setrelustName('baye');
              axios.post(`http://127.0.0.1:5000/api/bayespredict`, { Name,ESOL,Weight,HBond,Rings,Rotatable })
                  .then(res => {
                    setResultats(res.data);
                   
                  }) }
  return (
    
    <div> 
   
    <Menu2/>
    <h1 style={mystyle} > {Resultats} </h1>
   
    <Card   style={Cardo}  >
    <ButtonGroup  style={{position:'relative',left:'40px'}} disableElevation variant="contained" color="primary">
  <Button  startIcon= {<BlurOnTwoToneIcon/> }  onClick={PredictSvm}>SVM</Button>
  <Button onClick={Predictbayes} startIcon={<AccountTreeTwoToneIcon />}>   Bayes</Button> 
  <Button  startIcon={<AssessmentIcon />} onClick={PredictNighbor}>K-Nearest</Button>
  <Button onClick={PredictArbre}  startIcon= {<CallSplitTwoToneIcon/>} >Decision Tree</Button>
</ButtonGroup>

    <TextField id="outlined-basic"  style={Textfild} label="Compound Smile " variant="outlined"  onChange={handleName} />  


    <h4 style={{position:'relative',left:"300px" ,bottom:'40px'}}> Predict with : {relustName}</h4>
   
 </Card>
 
  </div> 
  );
}
