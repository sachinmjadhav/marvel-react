import React from "react";
import "./HeroCard.css";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

function HeroCard({ hero }) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default HeroCard;
