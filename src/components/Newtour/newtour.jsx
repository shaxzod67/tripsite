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
              Tucked between Greece and Montenegro, Albania quietly holds some
              of the most unspoiled landscapes in Europe. You’ll find mountain
              roads without traffic, coastline without crowds, and stone towns…
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
              Aboard the tall ship, Atlantis, sail through Denmark and Sweden
              via ancient trade routes to coastal cities, idyllic islands, and
              rolling countryside. From Copenhagen, travel the narrow Øresund
              Strait…
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
              Zambia is an exceptional choice for a safari, offering spectacular
              wildlife viewing, captivating scenery, and raw beauty. This
              tailored safari showcases three iconic spots: Victoria Falls in…
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
              Cycle by day, sail by night, and experience Greece like never
              before! This adventure blends the thrill of cycling with the
              elegance of a traditional sailing yacht, carrying you to medieval
              towns and…
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
              Experience Greece by e-bike and boat as the sea takes you to some
              of the most stunning corners of the Aegean. Over the course of a
              week, you’ll explore the enchanting Sporades Islands, alongside
              the…
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
              This guided cycle tour follows Vietnam’s south-central coast from
              the busy streets of Ho Chi Minh City to the historic city of Hue.
              From the Central Highlands to the coast, French-built hill towns…
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newtour;
