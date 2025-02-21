import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import MobileForm from "../MobileForm/MobileForm";

const FinalForm = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Funkcija za proveru veličine ekrana
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // 768px je uobičajeni breakpoint za mobilne uređaje
  };

  // Postavite osluškivač za promenu veličine ekrana
  useEffect(() => {
    checkIsMobile(); // Proveri na početku
    window.addEventListener("resize", checkIsMobile); // Dodaj event listener za promenu veličine

    return () => {
      window.removeEventListener("resize", checkIsMobile); // Ukloni event listener kada se komponenta unmountuje
    };
  }, []);

  return (
    <div>
      {isMobile ? <MobileForm /> : <Form />}{" "}
      {/* Prikazujemo odgovarajuću formu */}
    </div>
  );
};

export default FinalForm;
