import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Fuse from "fuse.js";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperfilter: {
    padding: theme.spacing(2),
    height: "600px",
  },
  category: {
    columnCount: "3",
    columnGap: "3",
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: "gold",
    "&$checked": {
      color: "yellow",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
export default function CenteredGrid() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
    checkedC: false,
    checkedD: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [category, setcategory] = useState([]);
  const [filter, setfilter] = useState([]);
  const [Searchfiled, setSearchfiled] = useState("");
  const [filtrage, setfiltrage] = React.useState(false);
  var Pathname = window.location.pathname;
  var Pathnamearray = Pathname.split("/");

  const handlesearchfiled = (e) => {
    setSearchfiled(e.target.value);
  };

  const options = {
    includeScore: false,
    // Search in `author` and in `tags` array
    keys: ["name", "Title"],
  };

  const fuse = new Fuse(filter, options);

  const result = fuse.search({
    $or: [{ name: Searchfiled }],
  });
  const gosearch = () => {
    console.log(result);

    setfiltrage(true);
  };
  useEffect(() => {
    // axios.get(`http://localhost:2000/products`).then((res) => {
    //   console.log(res.data);
    // });

    axios
      .post(`http://localhost:2000/getProductbycategory`, { Pathnamearray })
      .then((res) => {
        const products = res.data;
        setfilter(products);
        console.log(products);
        setcategory(products);
      });
  }, []);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Paper className={classes.paperfilter} elevation={0}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  onChange={handlesearchfiled}
                  id="outlined-basic"
                  label="Search By Name ..."
                  variant="outlined"
                ></TextField>
               
              </Grid>

              <Grid item xs={12}>
                <FormGroup row>
                  <Grid container>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                          />
                        }
                        label="10$ - 150$"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedF}
                            onChange={handleChange}
                            name="checkedF"
                          />
                        }
                        label="Secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedG}
                            onChange={handleChange}
                            name="checkedG"
                          />
                        }
                        label="Secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedC}
                            onChange={handleChange}
                            name="checkedC"
                          />
                        }
                        label="Secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedD}
                            onChange={handleChange}
                            name="checkedD"
                          />
                        }
                        label="Secondary"
                      />
                    </Grid>
                  </Grid>
                </FormGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <div>
            {(Searchfiled.replace(/\s/g,"") == ""   && (
              <div className={classes.category}>
                {category.map((res) => (
                  <div>
                    <h1>{res.name}</h1>
                  </div>
                ))}
              </div>
            )) || (
              <div>
                {result.map((res) => (
                  <div>
                    <h1>{res.item.name}</h1>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
