import React from "react";
import "./Hexagon.scss";
import hexagon from "../../../assets/OrgTeam/hexagon.svg";

const Hexagon = ({
  width = 100,
  height = 100,
  left = "5%",
  top = "-35%",
  className = "",
}) => {
  return (
    <div
      className={`hexagon-container ${className}`}
      style={{ width, height, left, top }}
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
