import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
 
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Grid,
  Typography,
  Paper,
  makeStyles,
  TextField,
  RadioGroup,
  withStyles,
  FormControlLabel,
  Radio,
  Button,
  Icon,
  Divider,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Hidden,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  hintTitle: {
    textAlign: "center",
  },
  inputForm: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    backgroundColor: "black",
    height: "60px",

    "&:hover": {
      backgroundColor: "yellow",
      color: "black",
    },
    color: "white",
  },
  root: {
    // marginTop: '50px',
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      // height:'100%'
    },
    [theme.breakpoints.up("md")]: {
      // flexDirection: 'column-reverse',
      height: "100%",
    },
  },
  gridright: {
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  grid_right_small: {
    backgroundColor: "whitesmoke",
  },
}));

const WithMaterialUI = () => {
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: 'uremail@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const classes = useStyles();
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>


        
        <TextField
           
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
              variant="outlined"
        />
      



            <TextField
               
               onChange={formik.handleChange}
               error={formik.touched.email && Boolean(formik.errors.email)}
               helperText={formik.touched.email && formik.errors.email}
            //   onChange={(e) =>
            //     setFormshipping({ ...formshipping, fullname: e.target.value })
            //   }
              className={classes.inputForm}
              label="Full name"
              fullWidth
              variant="outlined"
            />



            <TextField
            
            
              className={classes.inputForm}
              label="Phone number"
              fullWidth
              variant="outlined"
            />

            {/* <InputLabel id='country-label' >Country</InputLabel> */}

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Country
              </InputLabel>
              <Select
                style={{ width: "580px" }}
                native
                value={state.age}
                onChange={handleChange}
                label="Age"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>KSA</option>
                <option value={20}>UAE</option>
                <option value={30}>Egypte</option>
              </Select>
            </FormControl>

            <TextField
           
             
              className={classes.inputForm}
              label="Shipping address "
              fullWidth
              multiline
              rows={3}
              variant="outlined"
            />
            
        <Button  color="primary" variant="contained" fullWidth type="submit"  className={classes.button}  endIcon={<ShoppingCartIcon/>}>
          ORDER NOW
        </Button>
      </form>
    </div>
  );
};

export default WithMaterialUI;
