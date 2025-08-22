import React from "react";
import "./quality.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Quality() {
  return (
    <div className="quality">
      <div className="quality-div">
        <h2>QUALITY</h2>
        <p>
          The opportunity to explore and discover should be available to more
          than just a few. We offer quality and economy and our partners are as
          passionate as we are. They know their own backyards and love to walk
          you through them. As a marketplace, we can offer many choices, to many
          different types of travelers, to many destinations, and we stand by
          each and every one.
        </p>
      </div>
      <div className="quality-reyting">
        <div className="quality-stars">
          <p>
            RATING <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt /> 
          <span> 4.6/5</span>
          </p>

          <a href="#">Based on 5,940 reviews</a>
        </div>
      </div>
    </div>
  );
}

export default Quality;
