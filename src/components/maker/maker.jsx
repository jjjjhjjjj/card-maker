import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import Footer from "../footer/footer";
import styles from "./maker.module.css";

const Maker = ({ auth }) => {
  const history = useHistory();
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Ellie2",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: "ellie.png",
    },
    3: {
      id: "3",
      name: "Ellie3",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
  });

  const onLogout = () => {
    auth //
      .logout()
      .then(() => {
        history.push("/");
      });
  };

  useEffect(() => {
    auth.onAuthState((user) => {
      user || history.push("/");
    });
  }, []);

  const deleteCard = (cardId) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[cardId];
      return updated;
    });
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.makerMain}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          deleteCard={deleteCard}
          updateCard={createOrUpdateCard}
        />
        <Preview cards={cards} />
      </section>
      <Footer />
    </div>
  );
};

export default Maker;
