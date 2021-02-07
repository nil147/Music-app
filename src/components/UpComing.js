import React from "react";
import '../styles/UpComing.css';
import Dates from "./Dates";

function UpComing() {
  return (
    <div className="upComing">
      <p>TOUR DATES</p>
      <h1>Upcoming Concerts</h1>
      <Dates dateN={"20"} dateM={`February 2019`} location={"BottleRock"} locationC={"Napa, CA, USA"} buy={"Buy Ticket"} />
      <Dates dateN={"06"} dateM={"March 2019"} location={"Visarno Arena"} locationC={"Florence, Italy"} buy={"Buy Ticket"} />
      <Dates soldOut dateN={"13"} dateM={"April 2019"} location={"Capital One Arena"} locationC={"Washington, DC, USA"} buy={"Sold Out"} />
      <Dates dateN={"19"} dateM={"April 2019"} location={"RXG Theatre"} locationC={"Miami, FL, USA"} buy={"Free"} />
      <Dates dateN={"25"} dateM={"April 2019"} location={"Arena Theatre"} locationC={"Houston, TX, USA"} buy={"Buy Ticket"} />
    </div>
  );
}

export default UpComing;
