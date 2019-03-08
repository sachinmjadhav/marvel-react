import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import HeroCard from "./HeroCard/HeroCard";

const List = React.memo(function List() {
  const [heros, setHeroes] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters?limit=20&offset=${count}&ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f`
    )
      .then(res => res.json())
      .then(data =>
        setHeroes(prevHeros => [...prevHeros, ...data.data.results])
      );
  }, [count]);

  console.log(heros);

  return (
    <div className="container mt-5">
      <div className="row">
        {heros.map(hero => (
          <div className="col-md-3 col-sm-6 mb-3" key={hero.id}>
            <Link to={`/character/${hero.id}`}>
              <HeroCard hero={hero} />
            </Link>
          </div>
        ))}
      </div>
      {heros.length > 0 ? (
        <Button
          color="primary"
          className="m-2"
          onClick={() => setCount(count => count + 20)}
        >
          More Heroes
        </Button>
      ) : (
        ""
      )}
    </div>
  );
});

export default List;
