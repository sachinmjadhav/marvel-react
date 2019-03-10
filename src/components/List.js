import React, { useState } from "react";
import Search from "./Search/Search";
import Loader from "../assets/loader.gif";
import Landing from "./Landing";
import Poster from "./Poster/Poster";
import Featured from "./Featured/Featured";
import Footer from "../Footer";

const List = React.memo(function List({ isLoading, heros, setCount }) {
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResult] = useState();

  return isLoading ? (
    <img src={Loader} className="loader" alt="" />
  ) : (
    <div>
      <Poster />
      <div className="container mt-5 ">
        <Featured />
        <div className="dropdown-divider" />
        <h2 className="py-2 mt-5 _title-bars list-title">
          MARVEL CHARACTERS LIST
        </h2>
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
