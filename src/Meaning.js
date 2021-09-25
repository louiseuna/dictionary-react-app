import React from "react";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key="index">
            <div className="definition">{definition.definition}</div>
            <div className="example">
              <i>Example: </i>
              {definition.example}
            </div>
          </div>
        );
      })}
    </div>
  );
}