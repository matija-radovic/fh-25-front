import React from "react";
import "./CustomSelect.scss";
import downArrow from "../../../assets/Form/downArrow.svg";

interface CustomSelectProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  values: string[]; // Sada samo prosleđuješ niz stringova
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  value,
  onChange,
  values,
}) => {
  return (
    <div className="dropdown-container">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="custom-select"
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
