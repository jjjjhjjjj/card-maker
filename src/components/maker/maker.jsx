import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./maker.module.css";
const Maker = ({ auth }) => {
  const history = useHistory();

  useEffect(() => {
    auth.onAuthState((user) => {
      user || history.push("/");
    });
  }, []);
  return <p>Maker!!!</p>;
};

export default Maker;
