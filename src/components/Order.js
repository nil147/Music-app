import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Order.css";
import { Parallax } from 'react-parallax';
import "aos/dist/aos.css";

function Order({main, price, isLarge}) {
  return (
    <div className="order">
        <div data-aos="fade-up" className={`order-center ${isLarge && "order-center-large"}`}>
      <div className="order-top">
        <h2>{main}</h2>
        <h1>{price}</h1>
        <div className="order-list">
          <li>Rock Covers</li>
          <li>EDM Covers</li>
          <li>Original Song</li>
          <li>New Songs</li>
          <li>Improvisations</li>
          <li>Extra Options</li>
        </div>
        <Button>Order Now </Button>
      </div>
      </div>
    </div>
  );
}

export default Order;
