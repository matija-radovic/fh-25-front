import React from "react";
import "./Hexagon.scss";

const Hexagon = ({ isBig = false, rotate = 0, className = "" }) => {
  return (
    <div
      className={`hexagon-container ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {isBig ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="675"
          height="590"
          viewBox="0 0 675 590"
          fill="none"
        >
          <path
            d="M170.332 2.26426L507.128 0.75131L674.216 293.182L504.503 587.133L167.707 588.646L0.619152 296.215L170.332 2.26426Z"
            stroke="#24BDDE"
          />
        </svg>
      ) : (
        // Mali hexagon SVG
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="164"
          height="144"
          viewBox="0 0 164 144"
          fill="none"
        >
          <path
            d="M41.6303 1.68755L122.906 1.32245L163.228 71.8918L122.269 142.834L40.9935 143.199L0.671789 72.6298L41.6303 1.68755Z"
            stroke="#24BDDE"
          />
        </svg>
      )}
    </div>
  );
};

export default Hexagon;
