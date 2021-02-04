import styles from "./App.module.css";
import Login from "./components/login/login";

function App({ auth }) {
  return (
    <div className={styles.loginBox}>
      <Login auth={auth} />
    </div>
  );
}

export default App;
