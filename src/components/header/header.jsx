import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="../images/logo.png" alt="card-maker" />
      <h1 className={styles.title}>Business Card Maker</h1>
      {onLogout && (
        <button className={styles.logout} type="button" onClick={onLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
