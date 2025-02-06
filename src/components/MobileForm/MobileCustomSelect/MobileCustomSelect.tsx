import React from "react";
import "./MobileCustomSelect.scss";
import downArrow from "../../../assets/Form/downArrow.svg";

interface MobileCustomSelectProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  values: readonly string[];
  className?: string;
}
const MobileCustomSelect: React.FC<MobileCustomSelectProps> = ({
  name,
  value,
  onChange,
  values,
  className,
}) => {
  return (
    <div className="mobile-dropdown-container">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`mobile-custom-select  ${className || ""}`}
      >
        <option value="">Izaberite...</option>
        {values.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
      <img
        src={downArrow}
        alt="Dropdown arrow"
        className="mobile-dropdown-icon"
      />
    </div>
  );
};
export default MobileCustomSelect;
