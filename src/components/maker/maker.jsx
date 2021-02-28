import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import Footer from "../footer/footer";
import styles from "./maker.module.css";

const Maker = ({ FileInput, auth, database }) => {
  const history = useHistory();
  const historyState = history.state;
  const [cards, setCards] = useState();
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    auth //
      .logout()
      .then(() => {
        history.push("/");
      });
  };

  useEffect(() => {
    auth.onAuthState((user) => {
      user ? setUserId(user.uid) : history.push("/");
    });
  }, [auth, history]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = database.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [database, userId]);

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    database.removeCard(userId, card);
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    database.saveCard(userId, card);
  };

  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.makerMain}>
        <Editor
          FileInput={FileInput}
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
