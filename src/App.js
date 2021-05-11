import React from "react";
import "semantic-ui-css/semantic.min.css";
import Main from "./components/Main.jsx";
import { Route, Switch } from "react-router-dom";
import Protected from "./components/protected.jsx";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path='/safe'>
          <Protected />
        </Route>
      </Switch>
    </>
  );
}

export default App;
