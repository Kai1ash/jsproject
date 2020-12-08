import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 260,
  },
});

export default ({ card, setOpen, isOpen }) => {
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={card.poster}
          title={card.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.desctiption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" size="small" href="#outlined-buttons">
          Share
        </Button>
        <Button
          variant="outlined"
          size="small"
          href="#outlined-buttons"
          onClick={()=> setOpen(!isOpen.isOpen)}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
};
