import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Navbar";
import List from "./components/List";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" render={props => <List {...props} />} />
        <Route
          exact
          path="/character/:id"
          render={props => <Hero {...props} />}
        />
      </div>
    </Router>
  );
}

export default App;
