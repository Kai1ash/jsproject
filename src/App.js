import React, { useState } from "react";
import Header from "./Components/Layouts/Header";
import Card from "./Components/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import { cards } from "./cards";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Components/Layouts/Footer";
import Modal from "./Components/Layouts/Modal";
import { Context } from "./Components/context";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default function App(props) {
  const classes = useStyles();

  const [isOpen, setOpen] = useState(null);
  const [posterURL, setPosterURL] = useState(null);

  function handlePosterURL(currentPosterURL) {
    setPosterURL(currentPosterURL);
  }

  function handleModal(flag) {
    setOpen(flag);
  }

  return (
    <Context.Provider value={cards}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="lg" className={classes.flex}>
          <>
          {cards.map((card) => (
              <Card
                card={card}
                key={card.id}
                setOpen={handleModal}
                setPosterURL={handlePosterURL}
                isOpen={isOpen}
              />
          ))} 
          <Modal isOpen={isOpen} setOpen={handleModal} posterURL={posterURL}/>
          </>
        </Container>

        <Footer />
      </React.Fragment>
    </Context.Provider>
  );
}
