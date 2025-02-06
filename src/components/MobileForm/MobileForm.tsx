import React, { useState } from "react";
import "./MobileForm.scss";
import MobileIndividualForm from "./MobileIndividualForm/MobileIndividualForm";

const MobileForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hiddenForms, setHiddenForms] = useState<number[]>([]);

  const handleNextForm = () => {
    setHiddenForms((prevHidden) => [...prevHidden, currentIndex]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevForm = () => {
    setHiddenForms((prevHidden) =>
      prevHidden.filter((index) => index !== currentIndex - 1)
    );
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <div>
      <MobileIndividualForm
        key={0}
        nextForm={handleNextForm}
        prevForm={() => setCurrentIndex(0)}
        indexIndividual={1}
      />
    </div>
  );
};

export default MobileForm;
