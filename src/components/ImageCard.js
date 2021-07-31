import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    backgroundColor: 'rgba(0,0,0,0.5)',
    margin: '20px'
  },
  media: {
    height: 340,
    
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'Bold',
    fontSize: '2rem',
    color: '#fff'
  },
  desc: {
    fontFamily: 'Nunito',
    fontWeight: 'normal',
    fontSize: '1.1rem',
    color: '#ddd'
  }
});

export default function ImageCard({place}) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h1">
            {place.title}
          </Typography>
          <Typography className={classes.desc} variant="body2" color="textSecondary" component="p">
            {place.description}
          </Typography>
        </CardContent>
      </Card>
  );
}