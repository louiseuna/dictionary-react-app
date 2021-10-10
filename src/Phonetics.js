import React from "react";

export default function Phonetic(props) {
  return (
    <div className="phonetics">
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
