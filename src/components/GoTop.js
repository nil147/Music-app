import { Button } from "@material-ui/core";
import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import '../styles/GoTop.css';
import "aos/dist/aos.css";

function GoTop() {
  return (
    <div  className="gotop">
      <Button onClick={() => window['scrollTo']({ top: 0, behavior: 'smooth'})} data-aos="fade-up">
        <ArrowUpwardIcon  />
      </Button>
    </div>
  );
}

export default GoTop;
