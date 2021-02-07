import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Test.css";

function Test() {
  const [newAlbums, setNewAlbums] = useState([]);

  const imgUrl = "https://api.napster.com/imageserver/v2/albums/ ";
  const url = "https://api.napster.com/v2.2/";
  const newUrl =
    "https://api.napster.com/v2.2/tracks/top?apikey=NjFjNjc4YmUtMTBmNi00NDYxLThkY2QtNTZiMmRiZWZhYjBh";
  const key = "?apikey=1d4afdb6fb194b7e814bc7624c8114fa";

  useEffect(() => {
    async function fetchData() {
      axios
        .get(newUrl)
        .then((res) => {
          setNewAlbums(res.data.tracks);
          console.log(res.data.tracks);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [newUrl]);

  return (
    <div className="test">
      {newAlbums.map((album) => (
        <div key={album.artistId} className="test-info">
          <img
            className="test-image"
            key={album.artistId}
            src={`https://api.napster.com/imageserver/v2/artists/${album.artistId}/images/230x153.jpg`}
            alt={album.name}
          />
          <p key={album.artistName}>{album.artistName}</p>
          <audio controls>
            <source src={album.previewURL} type="audio/mp3"></source>
          </audio>
        </div>
      ))}
    </div>
  );
}

export default Test;
