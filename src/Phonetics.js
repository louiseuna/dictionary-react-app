import React from "react";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  {
    function playSound() {
      audio.play();
    }
    if (props.phonetic.audio) {
      return (
        <div className="phonetics">
          <span className="volume" onClick={playSound}>
            Listen 🔊
          </span>
          <span>{props.phonetic.text}</span>
        </div>
      );
    } else {
      return (
        <div className="phonetics">
          <span>{props.phonetic.text}</span>
        </div>
      );
    }
  }
}
