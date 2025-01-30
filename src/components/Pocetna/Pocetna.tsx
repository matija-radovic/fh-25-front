import React, { useEffect, useRef, useState } from "react";
import Leva1 from "../../assets/pocetna/leva1.svg";
import Leva2 from "../../assets/pocetna/leva2.svg";
import Leva3 from "../../assets/pocetna/leva3.svg";
import Desna1 from "../../assets/pocetna/desna1.svg";
import Desna2 from "../../assets/pocetna/desna2.svg";
import Desna3 from "../../assets/pocetna/desna3.svg";
import "./Pocetna.scss";
import ZeppelinBanner from "./ZeppelinBanner";
import Section from "../-shared/Section/Section";
import Countdown from "react-countdown";
import { frame1 } from "../../utils/constants/water/waterPath";

const smoothNoise = (
  x: number,
  y: number,
  time: number,
  scale: number
): number => {
  const p = (x + y) * 0.07 + time;
  return Math.sin(p) * scale;
};

const Pocetna: React.FC = () => {
  const [initialTranslateX, setInitialTranslateX] = useState<
    Map<HTMLElement, number>
  >(new Map());
  const [pathData, setPathData] = useState<string>(frame1);
  const svgRef = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(window.innerWidth);

  const [wavePath, setWavePath] = useState("");
// Ovo je useEffect koji se koristi za animaciju talasa vode
  useEffect(() => {
    setWidth(svgRef.current ? svgRef.current.clientWidth : window.innerWidth);
    const waveLength = width * 1.5;
    const amplitude = 7;
    const segments = 50;
    const speed = 0.015;
    let offset = 0;
    const animate = () => {
      offset += speed;

      const generateSinPath = () => {
      let d = `M 0 50`;
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * width;
        const y =
        50 + Math.sin((x / waveLength) * 2 * Math.PI + offset) * amplitude;
        d += ` L ${x} ${y} `;
      }
      return d;
      };

      setWavePath(generateSinPath());

      const topPoints = [];

      for (let x = 0; x <= width; x += 10) {
      const yTop =
        Math.sin((x / waveLength) * 2 * Math.PI + offset) * amplitude;

      topPoints.push(`${x}px ${yTop + amplitude}px`);
      }

      if (svgRef.current) {
      svgRef.current.style.clipPath = `polygon(0 0, ${topPoints.join(
        ", "
      )}, 100% calc(100%), 0 calc(100%))`;
      }

      requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [width]);
// Ovo je useEffect koji se koristi za deformisanje vode
  useEffect(() => {
    const updatePath = () => {
      if (!svgRef.current) return;
      const time = Date.now() / 2000;

      let newPath = frame1;

      newPath = newPath.replace(/([0-9.-]+)/g, (match) => {
        const value = parseFloat(match);
        const distortedValue = value + smoothNoise(value, time, time, 5);
        return distortedValue.toFixed(3);
      });

      setPathData(newPath);
      requestAnimationFrame(updatePath);
    };

    updatePath();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
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
      applyTranslateX(secondRowLeft, -0.25);
      applyTranslateX(secondRowRight, 0.25);
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
    <Section isContainer={false} className="pocetna-wrapper">
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
      <div className="voda">
        <svg
          className="wave-path"
          viewBox={`0 0 ${width} 140`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="wavePath"
            d={wavePath}
            stroke="white"
            strokeWidth={10}
            fill="transparent"
          />
        </svg>
        <svg
          className="voda-slicica"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1082.78 360.22"
          ref={svgRef}
        >
          <path d={pathData} className="voda1" />
        </svg>

        <span className="gradient"></span>
        <div className="countdown">
          <h1>
            <Countdown date={new Date("2025-03-23T00:00:00")} />
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Pocetna;
