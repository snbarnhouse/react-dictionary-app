import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";
// import { isCompositeComponent } from "react-dom/cjs/react-dom-test-utils.production.min";

export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] =useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
      setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey =
          "563492ad6f91700001000001772a217aa20b4069a827abefe7cf5e2b";
          let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
          let headers = {Authorization:  `Bearer ${pexelsApiKey}` };
          axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
    }


    function handleSubmit(event) {
        event.preventDefault();
        search();

//documentation: https://dictionaryapi.dev/ 
        let apiUrl =
          `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
          axios.get(apiUrl).then(handleDictionaryResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
          <div className="Dictionary">
            <section>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  defaultValue={props.defaultKeyword}
                  onChange={handleKeywordChange}
                />
              </form>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
          </div>
        );
    } else {
        load();
        return "Loading";
    }
}