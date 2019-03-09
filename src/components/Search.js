import React, { useState, useEffect } from "react";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";

function Search({ setSearching, setSearchResult }) {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUrl(input);
    setInput("");
    setSearching(true);
  };

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${url}&ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f`
    )
      .then(res => res.json())
      .then(data => setSearchResult(data.data));
  }, [url]);

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="md" className="mx-auto mb-4 w-100">
        <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
        <Input
          placeholder="Search for your Superhero!"
          onChange={handleInput}
        />
      </InputGroup>
    </form>
  );
}

export default Search;
