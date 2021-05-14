import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Responcivenavbar from './Navbarresponcive'
import ExtrasmallNavbar from './Extrasmallnavbar'
import HomeHeader from './HomeHeader'
import ExtrasmallHeader from './ExtrasmallHeader'


function BreakpointUp(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      flex: '1 0 auto',
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const { width } = props;

  return (
    <div  >
      {/* <Typography variant="subtitle1">Current width: {width}</Typography> */}
      
      <Hidden only={['xs', 'md']}>
         <Responcivenavbar/>
         <HomeHeader/>
        </Hidden>
        <Hidden only={['lg']}>
        <ExtrasmallNavbar/>
         <ExtrasmallHeader/>
        </Hidden>
    
    </div>
  );
}

BreakpointUp.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(BreakpointUp);
