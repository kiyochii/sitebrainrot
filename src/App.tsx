
import React from "react";
import "./App.css"; 

import paparamericano from "./audio/paparamericano.mp3";
import escorregando from "./audio/escorregando.mp3"
import alarme from "./audio/alarme.mp3"
import whatthehell from "./audio/whattheheeell.mp3"

const sounds = [
  { id: 1, label: "paparamericano", file: paparamericano },
  { id: 2, label: "escorregando", file: escorregando},
  { id:3, label: "alarme", file: alarme},
  { id: 4, label: "what the hell", file:whatthehell}
];

const App: React.FC = () => {
  const playSound = (soundFile: string) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    
    <div className="container">
      {sounds.map((sound) => (
        <button
          key={sound.id}
          className="botao"
          onClick={() => playSound(sound.file)}
        >
          {sound.label}
        </button>
      ))}
      <footer className="footer"> 
      <p>feito por: dan</p>
      
      </footer>
    </div>
  );
};

export default App;