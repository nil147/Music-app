import React from "react";
import "../styles/Sell.css";
import Order from './Order';
import { Parallax } from 'react-parallax';
import "aos/dist/aos.css";

function Sell() {

    
    const img = "https://images.pexels.com/photos/4061438/pexels-photo-4061438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";


  return (
    <div className="sell">
        <Parallax blur={3} bgImage={img} strength={200} strength={500} style={{ height: 650}}>
      <div data-aos="fade-up" className="sell-top">
        <p>PRICING</p>
        <h1>Invite Us to Your Event</h1>
        <h3>
          Do you want to make your event unforgettable? Then we will be glad to<br></br>
          help you! Regardless of your venue size, we have a great pricing
          option for anyone.
        </h3>
      </div>
    <div className="sell-order">
    <Order price="$ 2.5K" main="Private Party" />
    <Order isLarge price="$ 5K" main="Nightclub Party" />
    <Order price="$ 10K" main="Big Concert" />
    </div>
    </Parallax>
    </div>
  );
}

export default Sell;
