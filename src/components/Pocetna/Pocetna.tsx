import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import "./Pocetna.scss";
import { useInView } from 'framer-motion';
import left1 from "../../assets/pocetna/left1.svg";
import left2 from "../../assets/pocetna/left2.svg";
import left3 from "../../assets/pocetna/left3.svg";
import right1 from "../../assets/pocetna/right1.svg";
import right2 from "../../assets/pocetna/right2.svg";
import right3 from "../../assets/pocetna/right3.svg";
import Section from "../-shared/Section/Section";
import ZeppelinBanner from "./ZeppelinBanner";
import Water from "./Water";
import { BackgroundContext } from "@/contexts/BackgroundContext";

//const springSettings: SpringOptions = { stiffness: 400, damping: 50 };

const Pocetna: React.FC = () => {
  const { setIsDark } = useContext(BackgroundContext);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const parralaxRef = useRef<HTMLDivElement>(null);
  const inViewBuildings = useInView(parralaxRef);

  // Zgrade
  useEffect(() => {
    if (!inView) return;

    let h: number;
    const set = () => {
      const value = Math.floor(100 * (1 - Math.min(Math.max(1 - window.scrollY / h, 0), 1))) * 0.01;
      if (parralaxRef.current) parralaxRef.current.style.setProperty('--v', value.toString());
    }
    const handleScroll = () => {
      requestAnimationFrame(set);
    }
    const handleResize = () => {
      h = parralaxRef.current?.offsetHeight ?? 0;
      handleScroll();
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [inView])

  useLayoutEffect(() => {
    setIsDark(!inViewBuildings);
  }, [inViewBuildings, setIsDark])

  return (
    <Section isContainer={false} className="home-section" ref={sectionRef}>
      <div className={`buildings${!inView ? " in-view" : ""}`} ref={parralaxRef}>
        <div className="third row">
          <img src={left3} alt="" />
          <img src={right3} alt="" />
        </div>
        <div className="second row">
          <img src={left2} alt="" />
          <img src={right2} alt="" />
        </div>
        <div className="row first">
          <img src={left1} alt="" />
          <img src={right1} alt="" />
        </div>
        <div className="flag">
          <ZeppelinBanner />
        </div>
      </div>
      <Water />
    </Section>
  );
};

export default Pocetna;
