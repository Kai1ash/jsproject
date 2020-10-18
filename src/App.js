import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import { cards } from "./cards";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'

  }
});

export default (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" className={classes.flex}>
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </Container>
    </React.Fragment>
  );
};
