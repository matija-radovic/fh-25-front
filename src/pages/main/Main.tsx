import "./Main.scss";
import { Section } from "../../components";
import { Outlet } from "react-router-dom";

/**
 * This is the main component and all of the index page components/logic should inside of it
 */
const Main = () => {
  return (
    <>
      <Outlet />
      <Section heading="Example section">
        <div>Hello world</div>
      </Section>
    </>
  );
};

export default Main;
