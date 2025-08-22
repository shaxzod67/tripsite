import React from "react";
import newTour1 from "./newtour1.webp";
import newTour2 from "./newtour2.webp";
import newTour3 from "./newtour3.webp";
import newTour4 from "./newtour4.webp";
import newTour5 from "./newtour5.webp";
import newTour6 from "./newtour6.webp";
import "./newtour.css";
import { GrBike } from "react-icons/gr";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";

function Newtour() {
  return (
    <div>
      <div>
        <div className="newtour-big">TOUR TYPES</div>
        <div className="newtour-imgs">
          <div className="newtour-img">
            <div className="newtourimg">
              <img src={newTour1} alt="tour types" />
            </div>
            <div className="newtour-sar">
              <span>
                <GrBike /> <FaMapMarkedAlt />
                <IoMdSpeedometer />
              </span>{" "}
              <button>VIEW TOUR</button>
            </div>
            <div className="newtour-info">
              Our bike and barge tours throughout Europe are the best way to
              travel and will be an experience you will never forget! The bike
              is your means to pedal the back roads of countries and cultures
              and the boat is your unique accommodations throughout your tour.
            </div>
          </div>

          <div className="newtour-img">
            <div className="newtourimg">
              <img src={newTour2} alt="tour types" />
            </div>
            <div className="newtour-sar">
              <span>
                <GrBike /> <FaMapMarkedAlt />
                <IoMdSpeedometer />
              </span>{" "}
              <button>VIEW TOUR</button>
            </div>
            <div className="newtour-info">
              Our bike and barge tours throughout Europe are the best way to
              travel and will be an experience you will never forget! The bike
              is your means to pedal the back roads of countries and cultures
              and the boat is your unique accommodations throughout your tour.
            </div>
          </div>

          <div className="newtour-img">
            <div className="newtourimg">
              <img src={newTour3} alt="tour types" />
            </div>
            <div className="newtour-sar">
              <span>
                <GrBike /> <FaMapMarkedAlt />
                <IoMdSpeedometer />
              </span>{" "}
              <button>VIEW TOUR</button>
            </div>
            <div className="newtour-info">
              Our bike and barge tours throughout Europe are the best way to
              travel and will be an experience you will never forget! The bike
              is your means to pedal the back roads of countries and cultures
              and the boat is your unique accommodations throughout your tour.
            </div>
          </div>

          <div className="newtour-img">
            <div className="newtourimg">
              <img src={newTour4} alt="tour types" />
            </div>
            <div className="newtour-sar">
              <span>
                <GrBike /> <FaMapMarkedAlt />
                <IoMdSpeedometer />
              </span>{" "}
              <button>VIEW TOUR</button>
            </div>
            <div className="newtour-info">
              Our bike and barge tours throughout Europe are the best way to
              travel and will be an experience you will never forget! The bike
              is your means to pedal the back roads of countries and cultures
              and the boat is your unique accommodations throughout your tour.
            </div>
          </div>
          <div className="newtour-img">
            <div className="newtourimg">
              <img src={newTour5} alt="tour types" />
            </div>
            <div className="newtour-sar">
              <span>
                <GrBike /> <FaMapMarkedAlt />
                <IoMdSpeedometer />
              </span>{" "}
              <button>VIEW TOUR</button>
            </div>
            <div className="newtour-info">
              Our bike and barge tours throughout Europe are the best way to
              travel and will be an experience you will never forget! The bike
              is your means to pedal the back roads of countries and cultures
              and the boat is your unique accommodations throughout your tour.
            </div>
          </div>
          <div className="newtour-img">
            <div className="newtourimg">
              <img src={newTour6} alt="tour types" />
            </div>
            <div className="newtour-sar">
              <span>
                <GrBike /> <FaMapMarkedAlt />
                <IoMdSpeedometer />
              </span>{" "}
              <button>VIEW TOUR</button>
            </div>
            <div className="newtour-info">
              Our bike and barge tours throughout Europe are the best way to
              travel and will be an experience you will never forget! The bike
              is your means to pedal the back roads of countries and cultures
              and the boat is your unique accommodations throughout your tour.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newtour;
