import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import Footer from "../footer/footer";
import styles from "./maker.module.css";

const Maker = ({ auth }) => {
  const history = useHistory();

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
  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.makerMain}>
        <Editor />
        <Preview />
      </section>
      <Footer />
    </div>
  );
};

export default Maker;
