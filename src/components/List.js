import React, { useState } from "react";
import Search from "./Search";
import Loader from "../assets/loader.gif";
import Landing from "./Landing";
import Footer from "../Footer";

const List = React.memo(function List({ isLoading, heros, setCount }) {
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResult] = useState();

  console.log(searchResult);

  return isLoading ? (
    <img src={Loader} className="loader" alt="" />
  ) : (
    <div>
      <div className="container mt-5">
        <Search setSearching={setSearching} setSearchResult={setSearchResult} />
        {searching ? (
          !searchResult ? (
            <img src={Loader} alt="" />
          ) : (
            <Landing heros={searchResult.results} />
          )
        ) : (
          <Landing heros={heros} setCount={setCount} />
        )}
      </div>
      <Footer />
    </div>
  );
});

export default List;
