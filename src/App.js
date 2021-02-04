import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({ auth }) {
  return (
    <Router>
      <Switch>
        <Route path="/maker">
          <Maker />
        </Route>
        <Route path="/">
          <div className={styles.loginBox}>
            <Login auth={auth} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
