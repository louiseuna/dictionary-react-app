import React from "react";
import "./Dictionary.css";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";

export default function Result(props) {
  if (props.results) {
    return (
      <div>
        <span className="results">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <section key={index}>
                <Phonetics phonetic={phonetic} />
              </section>
            );
          })}
        </span>
        <div className="results">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
