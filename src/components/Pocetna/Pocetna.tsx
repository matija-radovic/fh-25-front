import React, { useEffect, useState } from "react";
import Leva1 from "../../assets/pocetna/leva1.svg";
import Leva2 from "../../assets/pocetna/leva2.svg";
import Leva3 from "../../assets/pocetna/leva3.svg";
import Desna1 from "../../assets/pocetna/desna1.svg";
import Desna2 from "../../assets/pocetna/desna2.svg";
import Desna3 from "../../assets/pocetna/desna3.svg";
import "./Pocetna.scss";
import ZeppelinBanner from "./ZeppelinBanner";
import Section from "../-shared/Section/Section";

const Pocetna: React.FC = () => {
  const [initialTranslateX, setInitialTranslateX] = useState<
    Map<HTMLElement, number>
  >(new Map());

  useEffect(() => {
    //Ovde je parallax efekat implementiran pomocu scroll eventa
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const firstRowLeft = document.querySelector(
        ".prvi_red .slika1"
      ) as HTMLElement;
      const firstRowRight = document.querySelector(
        ".prvi_red .slika2"
      ) as HTMLElement;
      const secondRowLeft = document.querySelector(
        ".drugi_red .slika1"
      ) as HTMLElement;
      const secondRowRight = document.querySelector(
        ".drugi_red .slika2"
      ) as HTMLElement;
      const thirdRowLeft = document.querySelector(
        ".treci_red .slika1"
      ) as HTMLElement;
      const thirdRowRight = document.querySelector(
        ".treci_red .slika2"
      ) as HTMLElement;

      const getInitialTranslateX = (element: HTMLElement) => {
        if (!initialTranslateX.has(element)) {
          const style = window.getComputedStyle(element);
          const transform = style.transform;
          let currentTranslateX = 0;
          if (transform && transform !== "none") {
            const matrix = new WebKitCSSMatrix(transform);
            currentTranslateX = matrix.m41;
          }
          initialTranslateX.set(element, currentTranslateX);
          setInitialTranslateX(new Map(initialTranslateX));
        }
        return initialTranslateX.get(element) || 0;
      };

      const applyTranslateX = (element: HTMLElement, factor: number) => {
        if (element) {
          const initialX = getInitialTranslateX(element);
          const newTranslateX = initialX + scrollPosition * factor;
          element.style.transform = `translateX(${newTranslateX}px)`;
        }
      };

      applyTranslateX(firstRowLeft, -0.5);
      applyTranslateX(firstRowRight, 0.5);
      applyTranslateX(secondRowLeft, -0.3);
      applyTranslateX(secondRowRight, 0.3);
      applyTranslateX(thirdRowLeft, -0.1);
      applyTranslateX(thirdRowRight, 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialTranslateX]);

  return (
    <Section isContainer={false}>
      <div className="pocetna-wrapper">
        <ZeppelinBanner />
        <div className="prvi_red">
          <img src={Leva1} alt="Leva1" className="slika1" />
          <img src={Desna1} alt="Desna1" className="slika2" />
        </div>
        <div className="drugi_red">
          <img src={Leva2} alt="Leva2" className="slika1" />
          <img src={Desna2} alt="Desna2" className="slika2" />
        </div>
        <div className="treci_red">
          <img src={Leva3} alt="Leva3" className="slika1" />
          <img src={Desna3} alt="Desna3" className="slika2" />
        </div>
        <div className="voda"></div>
      </div>
    </Section>
  );
};

export default Pocetna;
