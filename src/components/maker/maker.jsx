import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import Footer from "../footer/footer";
import styles from "./maker.module.css";

const Maker = ({ auth }) => {
  const history = useHistory();
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.makerMain}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </section>
      <Footer />
    </div>
  );
};

export default Maker;
