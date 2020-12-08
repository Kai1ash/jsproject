import React, { useState } from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import { cards } from "./cards";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Components/Footer";
import Carousel from "./Components/Modal";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default function App(props) {
  const classes = useStyles();

  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" className={classes.flex}>
        {cards.map((card) => (
          <>
            <Card card={card} key={card.id} setOpen={setOpen} isOpen={isOpen} />
            <Carousel isOpen={isOpen} setOpen={setOpen} card={card} />
          </>
        ))}
      </Container>

      <Footer />
    </React.Fragment>
  );
}
