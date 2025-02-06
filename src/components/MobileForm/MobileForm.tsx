import React, { useState } from "react";
import "./MobileForm.scss";
import MobileIndividualForm from "./MobileIndividualForm/MobileIndividualForm";
import MobileTeamForm from "./MobileTeamForm/MobileTeamForm";

const MobileForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextForm = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevForm = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const forms = [
    <MobileIndividualForm
      key={0}
      nextForm={handleNextForm}
      prevForm={() => setCurrentIndex(0)}
      indexIndividual={1}
    />,
    <MobileIndividualForm
      key={1}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={2}
    />,
    <MobileIndividualForm
      key={2}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={3}
    />,
    <MobileIndividualForm
      key={3}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={4}
    />,
    <MobileTeamForm
      key={4}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
    />,
  ];

  return (
    <div className="mobile-form-wrapper">
      <div className="mobile-forms-container">{forms[currentIndex]}</div>
    </div>
  );
};

export default MobileForm;
