import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home/Home';
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
