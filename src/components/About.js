import { Button } from "@material-ui/core";
import React from "react";
import "../styles/About.css";



function About() {
  return (
    <div data-aos="fade-up" className="about">
      <div className="about-content">
        <div className="about-content-flex">
          <h1>The First Band to Combine Neurofunk & Rock Music</h1>
          <p>
            B-Rock Band has gathered in 2005 in one of Los Angeles <br></br>
            colleges to create a true revolution in rock music.
          </p>
          <h3>
            We met at LA State college when we were about 15 y.o. and quickly
            became friends thanks to our music taste. We just did what we loved
            and somehow became popular.
          </h3>
        </div>
        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/2240765/pexels-photo-2240765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="music"
          />
        </div>
      </div>
      <div className="about-content">
        <div data-aos="fade-right" className="about-image2">
          <img
            src="https://images.pexels.com/photos/2240772/pexels-photo-2240772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="music"
          />
        </div>
        <div data-aos="fade-left" className="about-content-flex">
          <h1>Rated #1 Rock Band by Critics and Journalists</h1>
          <p>
          B-Rock gained the love of fans and attention of critics <br></br>worldwide. They were rated #1 Electronic Rock Band by:
          </p>
          <li>ROCK Magazine</li>
          <li>ThunderEDM Music Blog</li>
          <li>DigiRock Website</li>
          <div className="about-content-flex-button">
              <Button>Listen to Our Songs</Button>
              <Button>View Tour Dates</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
