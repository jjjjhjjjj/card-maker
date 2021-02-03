import styles from "./App.module.css";
import Login from "./login/login";

function App() {
  return (
    <div className={styles.loginBox}>
      <Login />
    </div>
  );
}

export default App;
