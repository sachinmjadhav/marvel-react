import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = React.memo(function Hero(props) {
  const [hero, setHero] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const characterId = parseInt(props.match.params.id);

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters/${characterId}?ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f`
    )
      .then(res => res.json())
      .then(data => {
        setHero(data.data.results[0]);
        setIsLoading(false);
      });
  }, [characterId]);

  console.log(hero);

  return (
    !isLoading && (
      <div>
        <div className="_title">
          <img
            src={`${hero.thumbnail.path}/detail.${hero.thumbnail.extension}`}
            alt=""
            className="image"
          />
          <h1 className="name ml-4">{hero.name}</h1>
        </div>
        <div className="container mt-5">
          {hero.description ? (
            <div className="row">
              <div className="col-md-8">
                <h2>Description</h2>
                <div className="dropdown-divider" />
                {hero.description}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="row mt-5">
            <div className="col-md-6">
              <h2>Series</h2>
              <div className="dropdown-divider" />
              {hero.series.items.map(item => (
                <p>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
});

export default Hero;
