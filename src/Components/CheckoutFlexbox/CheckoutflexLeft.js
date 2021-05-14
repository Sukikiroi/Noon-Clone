import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    height: "500px",
    padding: "5px",
    
    borderRadius: "5px",
  },
  center_root: {
    width: "100%",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

 
  },
  phone_and_name: {
    width: "90%",
    height: "40px",
    marginLeft: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  form: {
    width: "90%",
    height: "40px",
    marginLeft: "20px",
    marginBottom: "20px",
    
    display: "flex",
    justifyContent: "center",
  },
  zip_code: {
    width: "90%",
    height: "40px",

    marginLeft: "20px",
    marginBottom: "20px",
  },
}));
const Checkoutflexleft = () => {
    const classes = useStyles();
    return (
        <div    className={classes.center_root}>
      <div className={classes.root}>
        <div className={classes.phone_and_name}>
          <input
            style={{
              height: "100%",
              width: "45%",
              border: "2px solid Black",
              borderRadius: "5px",
              outline: "none",
              paddingLeft: "10px",
            }}
            tyep="text"
            placeholder="Full name"
          />
          <input
            style={{
              height: "100%",
              width: "45%",
              border: "2px solid Black",
              borderRadius: "5px",
              outline: "none",
              paddingLeft: "10px",
            }}
            tyep="tel"
            placeholder="Phone Number"
          />
        </div>
        <div className={classes.form}>
          <select    style={{
              height: "100%",
              width: "100%",
              border: "2px solid Black",
              borderRadius: "5px",
              outline: "none",
              paddingLeft: "10px",
              color:'grey'
            }}>
            <option value="grapefruit" style={{color:'bold'}}>Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">
              Coconut
            </option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <div className={classes.form}>
        <select     style={{
              height: "100%",
              width: "100%",
              border: "2px solid Black",
              borderRadius: "5px",
              outline: "none",
              paddingLeft: "10px",
            }}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">
              Coconut
            </option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <div className={classes.form}>
        <input
            style={{
              height: "100%",
              width: "100%",
              border: "2px solid Black",
              borderRadius: "5px",
              outline: "none",
              paddingLeft: "10px",
            }}
            tyep="text"
            placeholder="City/Town"
          />
        </div>
        <div className={classes.form}>
        <input
            style={{
              height: "100%",
              width: "100%",
              border: "2px solid Black",
              borderRadius: "5px",
              outline: "none",
              paddingLeft: "10px",
            }}
            tyep="text"
            placeholder="Delevry address"
          />
        </div>
        <div className={classes.zip_code}>
        <input
            style={{
              height: "100%",
              width: "45%",
              border: "2px solid Black",
              borderRadius: "5px",
              outline: "none",
              paddingLeft: "10px",
            }}
            tyep="text"
            placeholder="Post code / Zip code"
          />
        </div>
      </div>
      </div>
    );
}

export default Checkoutflexleft
