import React from "react";
import styles from "./login.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const Login = () => {
  return (
    <section className={styles.container}>
      <Header />
      <section className={styles.login}>
        <h2 className={styles.title}>Login</h2>
        <ul className={styles.list}>
          <li>
            <button type="button">Google</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
