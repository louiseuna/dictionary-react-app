import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}...`);

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="search-form">
        <form onSubmit={search}>
          <input
            className="search"
            type="search"
            autoFocus={true}
            placeholder="Search for a word..."
            onChange={handleKeywordChange}
          />
          <input className="submit" type="submit" value="Search" />
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
