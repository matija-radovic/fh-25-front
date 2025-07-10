import "./Main.scss";
import { AboutCompetition, Agenda, Expiriences, Faq, Footer, Header, LoadingPage, OrgTeam, Partners, Pocetna, Rewards } from "@/components";
import React, { useContext } from "react";
import { LoadingContext } from "@/contexts/LoadingContext";
import { AnimatePresence } from "motion/react";
import { useLocation, useOutlet } from "react-router-dom";
import { orgTeams } from "@/utils/constants/orgteam/teams";
/**
 * This is the main component and all of the index page components/logic should inside of it
 */
const Main = () => {
  const { isLoading } = useContext(LoadingContext);
  const element = useOutlet();
  const location = useLocation();

  return (
    <>
      <Header />
      <Pocetna />
      <AboutCompetition />
      <Agenda />
      <Rewards />
      <Expiriences />
      <Faq />
      <OrgTeam teams={orgTeams} />
      <Partners />
      <Footer />
      
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
