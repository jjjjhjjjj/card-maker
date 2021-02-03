import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Business Card Maker</h1>
        <img
          className={styles.logo}
          src="../images/logo.png"
          alt="card-maker"
        />
        <button className={styles.logout} type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
