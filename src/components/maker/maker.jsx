import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
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
    <>
      <Header onLogout={onLogout} />
      <Footer />
    </>
  );
};

export default Maker;
