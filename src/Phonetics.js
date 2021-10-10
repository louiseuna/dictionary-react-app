import React from "react";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  {
    function playSound() {
      audio.play();
    }
    return (
      <div className="phonetics">
        <span class="volume" onClick={playSound}>
          Listen 🔊
        </span>
        <br />
        <span>{props.phonetic.text}</span>
        <br></br>
      </div>
    );
  }
}
