import { useEffect, useRef } from "react";
import "./Pocetna.scss";
import { motion, MotionStyle, SpringOptions, useInView, useSpring } from 'framer-motion';
import left1 from "../../assets/pocetna/left1.svg";
import left2 from "../../assets/pocetna/left2.svg";
import left3 from "../../assets/pocetna/left3.svg";
import right1 from "../../assets/pocetna/right1.svg";
import right2 from "../../assets/pocetna/right2.svg";
import right3 from "../../assets/pocetna/right3.svg";
import Section from "../-shared/Section/Section";
import ZeppelinBanner from "./ZeppelinBanner";
import Water from "./Water";

const springSettings: SpringOptions = { stiffness: 400, damping: 50 };

const Pocetna: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const parralaxRef = useRef<HTMLDivElement>(null);
  const v = useSpring(0, springSettings);

  // Zgrade
  useEffect(() => {
    if (!inView) return;

    let h: number;
    let ticking = false;
    const set = () => {
      v.set(1 - Math.min(Math.max(1 - window.scrollY / h, 0), 1))
      ticking = false;
    }
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
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
  }, [v, inView])


  const parallaxVariables = {
    "--v": v
  } as MotionStyle

  return (
    <Section isContainer={false} className="home-section" ref={sectionRef}>
      <motion.div className="buildings" ref={parralaxRef} style={parallaxVariables}>
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
      </motion.div>
      <Water />
    </Section>
  );
};

export default Pocetna;
