import React from "react";
import "../styles/Banner.css";
import { Parallax } from 'react-parallax';
import "aos/dist/aos.css";


function Banner() {

    const img = "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  return (
      
    <div className="banner">
        <Parallax blur={5} bgImage={img} strength={200} strength={500} style={{ height: 500}}>
      <div className="banner-main">
          
        <h1 data-aos="fade-up">New Official Video Released</h1>
        <h3 data-aos="fade-up">
          We are glad to announce the release of our first official video on the
          new single «Way».<br></br> The video was shot in Atlanta, GA and
          directed by John Peterson, an award-winning videographer.
        </h3>
      </div>
      <div className="center">
      <div className="banner-data">
        <div data-aos="fade-up" className="banner-data-info">
          <h1>900+</h1>
          <h3>
            Thousand <br></br>
            Downloads
          </h3>
        </div>
        <div data-aos="fade-down" className="banner-data-info">
          <h1>150</h1>
          <h3>
            Years <br></br>
            on the Stage
          </h3>
        </div>
        <div data-aos="fade-up" className="banner-data-info">
          <h1>140</h1>
          <h3>
            Top-Rated <br></br>
            Songs
          </h3>
        </div>
        </div>
      </div>
      </Parallax>
    </div>
  );
}

export default Banner;
