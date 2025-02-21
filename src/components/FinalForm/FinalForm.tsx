import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import MobileForm from "../MobileForm/MobileForm";

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

  return <div>{isMobile ? <MobileForm /> : <Form />} </div>;
};

export default FinalForm;
