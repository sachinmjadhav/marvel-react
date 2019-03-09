import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Navbar";
import List from "./components/List";
import Hero from "./components/Hero/Hero";
import Series from "./components/Series/Series";

function App() {
  const [heros, setHeroes] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters?limit=20&offset=${count}&ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f`
    )
      .then(res => res.json())
      .then(data => {
        setHeroes(prevHeros => [...prevHeros, ...data.data.results]);
        setIsLoading(false);
      });
  }, [count]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route
          exact
          path="/"
          render={props => (
            <List
              {...props}
              heros={heros}
              setCount={setCount}
              isLoading={isLoading}
            />
          )}
        />
        <Route
          exact
          path="/character/:id"
          render={props => <Hero {...props} />}
        />
        <Route
          exact
          path="/series/:id"
          render={props => <Series {...props} />}
        />
      </div>
    </Router>
  );
}

export default App;
