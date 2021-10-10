import React from "react";
import "./Dictionary.css";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
