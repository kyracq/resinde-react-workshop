import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header.js";
import Recipes from "./components/recipes.js";
import Profile from "./components/profile.js";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Recipes} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
