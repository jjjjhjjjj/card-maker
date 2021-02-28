import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({ FileInput, auth, database }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/maker">
            <Maker FileInput={FileInput} auth={auth} database={database} />
          </Route>
          <Route path="/">
            <Login auth={auth} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
