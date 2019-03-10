import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import HeroCard from "./HeroCard/HeroCard";

function Landing({ heros, setCount }) {
  return (
    <div>
      <div className="row mx-auto">
        {/* if search returns zero results show NO RESULTS */}
        {heros.length === 0 ? (
          <h2>Not results found</h2>
        ) : (
          // Map through search result list or general list
          heros.map(hero => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 pl-5" key={hero.id}>
              <Link to={`/character/${hero.id}`}>
                <HeroCard hero={hero} />
              </Link>
            </div>
          ))
        )}
      </div>
      {/* Dont show button if the list shows search result */}
      {/* setCount determines if the list is search result list or general list */}
      {/* Also show the button only after the list fetch is complete, heros.length > 0 */}
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
