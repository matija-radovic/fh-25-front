import React from "react";
import "./Hexagon.scss";
import hexagon from "../../../assets/OrgTeam/hexagon.svg";

const Hexagon = ({ width = 0, height = 0, rotate = 0, className = "" }) => {
  return (
    <div
      className={`hexagon-container ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotate}deg)`, // Samo rotacija ostaje ovde
      }}
    >
      <img
        className="hexagon-border"
        src={hexagon}
        alt="Hexagon"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Hexagon;
