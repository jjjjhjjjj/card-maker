import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./login.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const Login = ({ auth }) => {
  const history = useHistory();
  const onLogin = () => {
    auth //
      .login()
      .then((result) => {
        goToMaker(result.user.uid);
      });
  };

  const goToMaker = (uid) => {
    history.push({
      pathname: "/maker",
      uid,
    });
  };

  useEffect(() => {
    auth.onAuthState((user) => {
      user && goToMaker(user.uid);
    });
  }, []);

  return (
    <section className={styles.container}>
      <Header />
      <section className={styles.login}>
        <h2 className={styles.title}>Login</h2>
        <ul className={styles.list}>
          <li>
            <button type="button" onClick={onLogin}>
              Google
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
