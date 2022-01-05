import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function(phoneitc, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phoneitc} />
            </div>
          )
        })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (<section key={index}>
              <Meaning meaning={meaning}/>
          </section>);
        })}
      </div>
    );
  } else {
    return null;
  }
}
