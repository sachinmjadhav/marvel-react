import React, { useState, useLayoutEffect, useRef } from "react";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";
import "./Search.css";

function Search({ setSearching, setSearchResult }) {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUrl(input);
    setSearching(true);
  };

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${url}&ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f`
    )
      .then(res => res.json())
      .then(data => setSearchResult(data.data));
  }, [url]);

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="md" className="ml-3 mb-4 input_group">
        <InputGroupAddon addonType="prepend" className="icon">
          <i className="fas fa-search" />
        </InputGroupAddon>
        <Input placeholder="Search" className="search" onChange={handleInput} />
      </InputGroup>
    </form>
  );
}

export default Search;
