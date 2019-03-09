import React, { useState, useEffect } from "react";
import "./Series.css";
import Loader from "../../assets/loader.gif";

const Series = React.memo(function Series(props) {
  // get id from router params
  let id = props.match.params.id;

  const [series, setSeries] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/series/${id}?ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f`
    )
      .then(res => res.json())
      .then(data => {
        setSeries(data.data.results[0]);
        setIsLoading(false);
      });
  }, [id]);

  return isLoading ? (
    <img src={Loader} className="loader" alt="" />
  ) : (
    <div>
      <div className="_title">
        <img
          src={`${series.thumbnail.path}/detail.${series.thumbnail.extension}`}
          alt=""
          className="image"
        />
        <h1 className="name ml-4">{series.title}</h1>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h2>Description</h2>
            <div className="dropdown-divider" />
            {series.description ? series.description : "Not Available"}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Series;
