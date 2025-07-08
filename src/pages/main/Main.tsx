import "./Main.scss";
import { LoadingPage, Section } from "../../components";
import { useContext } from "react";
import { LoadingContext } from "@/contexts/LoadingContext";
import { AnimatePresence } from "motion/react";
/**
 * This is the main component and all of the index page components/logic should inside of it
 */
const Main = () => {
  const { isLoading } = useContext(LoadingContext);
  return (
    <>
      <Section heading="Example section">
        <div>Hello world</div>
      </Section>
      <AnimatePresence>
        {isLoading && <LoadingPage />}
      </AnimatePresence>
    </>
  );
};

export default Main;
