import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Components
import SearchBar from "./components/SearchBar/SearchBar";
import Map from "./components/Map/Map";

// Styles
import './sassStyles/_global.scss';
import './sassStyles/_typography.scss';
import './App.scss';
import ResultBox from "./components/ResultBox/ResultBox";


function App() {
  return (
    <main className="App">
      <div className="container__heading">
        <h1 className="heading">IP Address Tracker</h1>
      </div>
      <SearchBar />
      <Map />
      <ResultBox />
    </main>
  );
}

export default App;
