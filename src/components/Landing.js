import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import HeroCard from "./HeroCard/HeroCard";

function Landing({ heros, setCount }) {
  return (
    <div>
      <div className="row mx-auto">
        {heros.length === 0 ? (
          <h2>Not results found</h2>
        ) : (
          heros.map(hero => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={hero.id}>
              <Link to={`/character/${hero.id}`}>
                <HeroCard hero={hero} />
              </Link>
            </div>
          ))
        )}
      </div>
      {setCount && heros.length > 0 ? (
        <Button
          color="primary"
          block
          className="mb-2"
          onClick={() => setCount(count => count + 20)}
        >
          Load More Superheroes
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Landing;
