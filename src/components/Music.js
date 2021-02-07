import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Music.css";
import Card from "./Card";

function Music() {







  return (
    <div className="music">
      <div className="music-top">
        <h2>Music</h2>
        <h1>Our Sounds</h1>
      </div>
      <div className="card-body">

      <Card />

      </div>
      
      
    </div>
  );
}

export default Music;
