import React, { useState, useEffect } from "react";
import Loader from "../../assets/loader.gif";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";
import "./Hero.css";

// get last part of the URL
const getSeriesId = url => {
  let index = url.lastIndexOf("/");
  return url.substr(index);
};

const Hero = React.memo(function Hero(props) {
  const [hero, setHero] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const characterId = parseInt(props.match.params.id);

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f`
    )
      .then(res => res.json())
      .then(data => {
        setHero(data.data.results[0]);
        setIsLoading(false);
      });
  }, [characterId]);

  // useEffect for title
  useEffect(() => {
    if (hero) {
      document.title = hero.name;
    } else {
      document.title = "Marvel";
    }
    // change title to Marvel on component unmount
    return () => {
      document.title = "Marvel";
    };
  }, [hero]);

  return isLoading ? (
    <img src={Loader} className="loader" alt="" />
  ) : (
    <div>
      <div className="_title">
        <img
          src={`${hero.thumbnail.path}/detail.${hero.thumbnail.extension}`}
          alt=""
          className="image"
        />
        <h1 className="name ml-4 name _title-bars">{hero.name}</h1>
      </div>
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-md-8">
            <h2>Description</h2>
            <div className="dropdown-divider" />
            {hero.description ? hero.description : "Not Available"}
          </div>
        </div>
        {hero.series.available > 0 ? (
          <div className="row mt-5">
            <div className="col-md-6">
              <h2>Series</h2>
              <div className="dropdown-divider" />
              {hero.series.items.map(item => (
                <Link
                  key={item.name}
                  to={`/series${getSeriesId(item.resourceURI)}`}
                >
                  <Badge
                    className="mx-1"
                    style={{ fontSize: "0.8rem", margin: "2px" }}
                    color="secondary"
                  >
                    {item.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
});

export default Hero;
