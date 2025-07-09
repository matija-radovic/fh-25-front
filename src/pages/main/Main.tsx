import "./Main.scss";
import { LoadingPage, Section } from "../../components";
import React, { useContext } from "react";
import { LoadingContext } from "@/contexts/LoadingContext";
import { AnimatePresence } from "motion/react";
import { useLocation, useOutlet } from "react-router-dom";
/**
 * This is the main component and all of the index page components/logic should inside of it
 */
const Main = () => {
  const { isLoading } = useContext(LoadingContext);
  const element = useOutlet();
  const location = useLocation();

  return (
    <>
      <Section heading="Example section">
        <div>Hello world</div>
      </Section>
      <AnimatePresence>
        {isLoading && <LoadingPage />}
      </AnimatePresence>
      <AnimatePresence>
        {/* Outlet fix https://medium.com/@antonio.falcescu/animating-react-pages-with-react-router-dom-outlet-and-framer-motion-animatepresence-bd5438b3433b */}
        {element && React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </>
  );
};

export default Main;
