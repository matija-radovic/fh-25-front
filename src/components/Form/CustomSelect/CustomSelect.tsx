import React from "react";
import "./CustomSelect.scss";
import downArrow from "../../../assets/Form/downArrow.svg";

interface CustomSelectProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  values: readonly string[];
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  value,
  onChange,
  values,
  className,
}) => {
  return (
    <div className="dropdown-container">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`custom-select ${className || ""}`}
      >
        <option value="">Izaberite...</option>
        {values.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
      <img src={downArrow} alt="Dropdown arrow" className="dropdown-icon" />
    </div>
  );
};

export default CustomSelect;
