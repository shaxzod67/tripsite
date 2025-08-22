import React from "react";
import tourImg1 from "./tourimg1.webp";
import tourImg2 from "./tourimg2.webp";
import tourImg3 from "./tourimg3.webp";
import tourImg4 from "./tourimg4.webp";

import { MdDirectionsBike } from "react-icons/md";
import "./tourtypes.css";
import { FaHiking, FaHotel } from "react-icons/fa";
import { GiShipBow } from "react-icons/gi";

function TourTypes() {
  return (
    <div>
      <div className="tour-big">TOUR TYPES</div>
      <div className="tour-imgs">
        <div className="tour-img">
          <div className="tourimg">
            <img src={tourImg1} alt="tour types" />
          </div>
          <div className="tour-sar">
            Bike + Barge <MdDirectionsBike />
          </div>
          <div className="tour-info">
            Our bike and barge tours throughout Europe are the best way to
            travel and will be an experience you will never forget! The bike is
            your means to pedal the back roads of countries and cultures and the
            boat is your unique accommodations throughout your tour.
          </div>
        </div>

        <div className="tour-img">
          <div className="tourimg">
            <img src={tourImg2} alt="tour types" />
          </div>
          <div className="tour-sar">
            Bike + Hotel <FaHotel />
          </div>
          <div className="tour-info">
            Our bike and barge tours throughout Europe are the best way to
            travel and will be an experience you will never forget! The bike is
            your means to pedal the back roads of countries and cultures and the
            boat is your unique accommodations throughout your tour.
          </div>
        </div>

        <div className="tour-img">
          <div className="tourimg">
            <img src={tourImg3} alt="tour types" />
          </div>
          <div className="tour-sar">
            Hiking + Walking
            <FaHiking />
          </div>
          <div className="tour-info">
            Our bike and barge tours throughout Europe are the best way to
            travel and will be an experience you will never forget! The bike is
            your means to pedal the back roads of countries and cultures and the
            boat is your unique accommodations throughout your tour.
          </div>
        </div>

        <div className="tour-img">
          <div className="tourimg">
            <img src={tourImg4} alt="tour types" />
          </div>
          <div className="tour-sar">
            Multi-Adventure <GiShipBow />
          </div>
          <div className="tour-info">
            Our bike and barge tours throughout Europe are the best way to
            travel and will be an experience you will never forget! The bike is
            your means to pedal the back roads of countries and cultures and the
            boat is your unique accommodations throughout your tour.
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default TourTypes;
