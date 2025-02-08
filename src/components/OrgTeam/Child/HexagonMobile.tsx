import React from "react";
import hexagon from "../../../assets/OrgTeam/hexagon.svg";
type PositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const HexagonAnimation: React.FC<{ position?: PositionType }> = ({
  position = "top-left",
}) => {
  const positions: Record<PositionType, React.CSSProperties> = {
    "top-left": { top: 0, left: 0 },
    "top-right": { top: 0, right: 0 },
    "bottom-left": { bottom: 0, left: 0 },
    "bottom-right": { bottom: 0, right: 0 },
  };

  return (
    <div
      className="hexagon-mobile-wrapper"
      style={{ position: "absolute", ...positions[position] }}
    >
      <img
        className="hexagon big"
        src={hexagon}
        alt="Hexagon"
        style={{ width: "100%", height: "100%" }}
      />
      <img
        className="hexagon small"
        src={hexagon}
        alt="Hexagon"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default HexagonAnimation;
