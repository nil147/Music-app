import React from "react";
import "../styles/Dates.css";
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { Button } from "@material-ui/core";

function Dates({ dateN, dateM, location, locationC, buy, soldOut}) {
  return (
    <div className="dates">
      <div className="dates-left">
        <h1>{dateN}</h1>
        <h2>
          {dateM}
        </h2>
      </div>
      <div className="dates-center">
          <h3>{location}</h3>
          <div className="dates-center-location">
          <RoomOutlinedIcon />
          <p>
              {locationC}
          </p>
          </div>
      </div>
      <div className={`dates-right ${soldOut && "dates-right-sold"}`}>
          <Button >{buy}</Button>
      </div>
    </div>
  );
}

export default Dates;
