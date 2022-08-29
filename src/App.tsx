import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { IBBResponse } from "./types";

const App: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = React.useState<IBBResponse>();

  return (
    <div className="container">
      <div className="content">
        <div className="title-wrapper">
          <div className="title">Breaking Bad</div>
          <sub className="subtitle">Character Database</sub>
        </div>
        <SearchBar onSelectedCharacter={(character) => setSelectedCharacter(character)} />
        {selectedCharacter && (
          <div className="card">
            <h3 className="card-name">{selectedCharacter?.name}</h3>
            <img className="card-img" src={selectedCharacter?.img} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
