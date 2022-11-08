import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [definitions, setDefinitions] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setDefinitions(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeyword}
            placeholder="Enter a word"
          />
        </form>
      </section>
      <Results results={definitions} />
    </div>
  );
}
