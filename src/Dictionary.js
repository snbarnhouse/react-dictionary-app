import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary () {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search (event) {
        event.preventDefault();

//documentation: https://dictionaryapi.dev/ 
        let apiUrl =
          `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
          axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={search}>
            <input type="search" placeholder="search for a word" onChange={handleKeywordChange} />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
}