import styles from "./App.module.css";
import Login from "./components/login/login";

function App() {
  return (
    <div className={styles.loginBox}>
      <Login />
    </div>
  );
}

export default App;
