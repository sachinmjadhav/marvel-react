import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import "./Featured.css";
import "../HeroCard/HeroCard.css";

import ClipLoader from "react-spinners/ClipLoader";

function Thor() {
  const [hero, setHero] = useState();

  useEffect(() => {
    fetch(
      "https://gateway.marvel.com/v1/public/characters?nameStartsWith=thor&ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f"
    )
      .then(res => res.json())
      .then(data => setHero(data.data.results[0]));
  }, []);
  return hero ? (
    <React.Fragment>
      <Link to={`/character/${hero.id}`}>
        <Card className="_card">
          <CardImg
            className="_img"
            top
            width="80%"
            src={`${hero.thumbnail.path}/portrait_fantastic.${
              hero.thumbnail.extension
            }`}
          />
          <div className="_bar" />
          <CardBody className="_body">
            <CardTitle className="title">{hero.name}</CardTitle>
          </CardBody>
        </Card>
      </Link>
    </React.Fragment>
  ) : (
    <ClipLoader size={100} color={"#333"} />
  );
}

export default Thor;
