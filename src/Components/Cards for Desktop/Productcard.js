import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FaCartPlus } from 'react-icons/fa';
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height:320,
  },
  media: {
    height: 110,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcyUpeHvHn-Yrpa1mqIgKwz4U1HS8-hwLtQ&usqp=CAU"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Xps 15 Laptop
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <img height="32" width="32" src="data:image/png;base64,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" />
        </Button>
        <Button size="small" color="primary">
        <img height="32" width="32" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTJiqFVnWeCbTAGP7SPLy1mKoHjYDgZVVeg&usqp=CAU"></img>
        </Button>
      </CardActions>
    </Card>
  );
}
