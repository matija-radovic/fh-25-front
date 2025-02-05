import { useState } from "react";
import "./Form.scss";
import IndividualForm from "./IndividualForm/IndividualForm";

const Form = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hiddenForms, setHiddenForms] = useState<number[]>([]); // Niz za sakrivene forme

  const handleNextForm = () => {
    // Sakrijemo trenutnu formu kada se submituje
    setHiddenForms((prevHidden) => [...prevHidden, currentIndex]);
    // Pomeramo se na sledeću formu
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevForm = () => {
    // Vraćamo se na prethodnu formu i uklanjamo je iz sakrivenih
    setHiddenForms((prevHidden) =>
      prevHidden.filter((index) => index !== currentIndex - 1)
    );
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const forms = [
    <IndividualForm
      key={0}
      nextForm={handleNextForm}
      prevForm={() => setCurrentIndex(0)}
      indexIndividual={1} // Dodajemo handlePrevForm za prvu formu
    />,
    <IndividualForm
      key={1}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={2}
    />,
    <IndividualForm
      key={2}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={3}
    />,
    <IndividualForm
      key={3}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={4}
    />,
  ];

  return (
    <div className="form-wrapper">
      <div className="forms-container">
        {forms.map((form, index) => {
          // Brojimo koliko formi ispred ove je sakriveno
          const hiddenBefore = hiddenForms.filter(
            (hiddenIndex) => hiddenIndex < index
          ).length;

          return (
            <div
              key={index}
              className={`form-slide ${index === currentIndex ? "active" : ""}`}
              style={{
                zIndex: forms.length - index,
                transform: `translate(${(index - hiddenBefore) * -20}px, ${
                  (index - hiddenBefore) * -20
                }px)`,
                opacity: hiddenForms.includes(index) ? 0 : 1, // Sakrijemo formu ako je u hiddenForms
                transition:
                  "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
              }}
            >
              {form}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
