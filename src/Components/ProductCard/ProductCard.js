import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Badge,Stack } from "@chakra-ui/react"
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
   height:'350px',
   rowGap:'4',
    '&:hover    ': {
      boxShadow:' lightgray 0px 0px 10px 5px !important',
     
        "& $addtocart": {
      visibility:"visible",
      backgroundColor:'black',
       
        },
        
        "& $wished": {
          visibility:"visible",
            }
            ,
            "& $wishedclicked": {
              visibility:"visible",
                }
            
    },
  },
  media: {
    maxWidth:' 100%',
    /* OPTIONAL OBJECT-FIT STYLES */
    height: '200px',
  },

  tilte:{
    position:'relative',
    left:'60px',
    width:'70px'
  },
  desciption:{
    maxHeight:'100px'
  },
  addtocart:{
     
    [theme.breakpoints.down('sm')]: {
      position:'relative',
      left:'10px',

    },
    [theme.breakpoints.down('xs')]: {
      position:'relative',
      left:'50px',

    },
   position:'relative',
   right:'10px',
 bottom:'20px',
   visibility:"hidden",
   backgroundColor:'black',
   width: '100%',
        height: '100%',
   borderRadius:'2px',


  },
  wished:{
    color:'red ',
    position :'relative',
    left:'150px',
    top:'20px',
    visibility:"hidden",
  },
  wishedclicked:{
    
    width:'10px',
    height:'10px',
    position :'relative',
    left:'200px',
    top:'20px',
    visibility:"hidden",
  }
}));

export default function ProductCard({Image,Desciption}) {
  const classes = useStyles();
  const [wishedclicked,setwishedclicked] = React.useState(false);
  return (
    <Container fixed>
    <Card className={classes.root}>
    
      
      <CardActionArea>
  

        <IconButton  className={classes.wishedclicked} aria-label="upload picture" component="span">
          <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />}   checkedIcon={<Favorite />} name="checkedH" />}
       
      />
        </IconButton>


       
     
        
     
      
        <CardMedia
          className={classes.media}
          image={Image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"  className={classes.tilte}>
            Lizard
          </Typography>
          <Stack direction="row">
  <Badge>Default</Badge>
  <Badge colorScheme="green">Success</Badge>
  <Badge colorScheme="red">Removed</Badge>
 
</Stack>
          <Typography variant="body2" color="textSecondary" component="p"className={classes.desciption} >
          {Desciption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{width:'280px' }}>
      <Button variant="contained" color="primary" className={classes.addtocart} >
      <ShoppingCartIcon  />
       </Button>
        
      </CardActions>
    </Card>


    </Container>
  );
}
