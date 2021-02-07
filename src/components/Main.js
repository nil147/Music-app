import React, { useEffect } from "react";
import "../styles/Main.css";
import video from "../images/video.mp4";
import { Button } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

  return (
    <div className="main">
      <video autoPlay muted loop className="video">
        <source src={video} type="video/mp4"></source>
      </video>
      <div className="main-info">
        <h1 data-aos="fade-down">FILL THE SOUND</h1>
        <h2 data-aos="fade-right">We specialise in the unxpected.</h2>
        <Button data-aos="fade-left">Sign in Now!</Button>
      </div>
    </div>
  );
}

export default Main;
