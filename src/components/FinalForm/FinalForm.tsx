import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Form from "../Form/Form";
import MobileForm from "../MobileForm/MobileForm";
import "./FinalForm.scss";

const FinalForm = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return createPortal(
    <div className="form-content">{isMobile ? <MobileForm /> : <Form />}</div>,
    document.getElementById("portal-root")! // Циљани DOM елемент
  );
};

export default FinalForm;
