import React from "react";
import "./Hexagon.scss";
import hexagon from "../../../assets/OrgTeam/hexagon.svg";

const Hexagon = ({
  width = 0,
  height = 0,
  left = "0%",
  top = "0%",
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
