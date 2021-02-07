import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Card.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactPlayer from 'react-player'

function Card() {
  const [newAlbums, setNewAlbums] = useState([]);


  const imgUrl = "https://api.napster.com/imageserver/v2/albums/ ";
  const url = "https://api.napster.com/v2.2/";
  const newUrl =
    "https://api.napster.com/v2.2/albums/new?apikey=NjFjNjc4YmUtMTBmNi00NDYxLThkY2QtNTZiMmRiZWZhYjBh";
  const key = "?apikey=NjFjNjc4YmUtMTBmNi00NDYxLThkY2QtNTZiMmRiZWZhYjBh";

  useEffect(() => {
    async function fetchData() {
      axios
        .get(newUrl)
        .then((res) => {
          setNewAlbums(res.data.albums);
          console.log(res.data.albums);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [newUrl]);

  return (
    <div className="card">
      {newAlbums.map((album) => (
        <div key={album.id}  data-aos="fade-up" className="card-info">
          <img
          
            className="card-image"
            key={album.id}
            src={`${imgUrl}${album.id}/images/300x300`}
            alt={album.name}
          />
          <p key={album.name}>{album.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
