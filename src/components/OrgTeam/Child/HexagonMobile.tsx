import React from "react";
import "./HexagonMobile.scss";

interface HexagonMobileProps {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const HexagonMobile: React.FC<HexagonMobileProps> = ({
  width = "284",
  height = "310",
  className,
}) => {
  const style: React.CSSProperties = {
    position: "absolute",
    width,
    height,
  };

  return (
    <svg
      className={`mobile-hexagon-wrapper ${className}`}
      style={style}
      viewBox="0 0 184 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="hexagon-path hexagon-1"
        d="M60.6029 35.3208L129.226 35.0126L163.271 94.5961L128.688 154.496L60.0645 154.804L26.0199 95.2205L60.6029 35.3208Z"
        stroke="#24BDDE"
      />
      <path
        className="hexagon-path hexagon-2"
        d="M117.44 140.175L148.014 140.037L163.182 166.583L147.772 193.275L117.198 193.412L102.03 166.866L117.44 140.175Z"
        stroke="#24BDDE"
      />
    </svg>
  );
};

export default HexagonMobile;
