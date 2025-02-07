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
  const [pathData, setPathData] = useState<string>(frame1);
  const svgRef = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [wavePath, setWavePath] = useState("");

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const waveLength = width * 0.3;
    const amplitude = width <= 768 ? 7 : 10;
    const segments = 100;
    const speed = 0.015;
    let offset = 0;
    let animationFrameId: number;

    const animate = () => {
      if (svgRef.current && svgRef.current.getBoundingClientRect().bottom > 0) {
        offset += speed;

        const generateSinPath = () => {
          let d = `M 0 50`;
          for (let i = 0; i <= segments; i++) {
            const x = (i / segments) * width;
            const y =
              50 +
              Math.sin((x / waveLength) * 2 * Math.PI + offset) * amplitude;
            d += ` L ${x} ${y} `;
          }
          return d;
        };

        setWavePath(generateSinPath());

        const topPoints = Array.from(
          { length: Math.ceil(width / 10) + 1 },
          (_, i) => {
            const x = i * 10;
            const yTop =
              Math.sin((x / waveLength) * 2 * Math.PI + offset) * amplitude;
            return `${x}px ${yTop + amplitude}px`;
          }
        );

        svgRef.current.style.clipPath = `polygon(0 0, ${topPoints.join(
          ", "
        )}, 100% calc(100%), 0 calc(100%))`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [width]);

  useEffect(() => {
    const updatePath = () => {
      if (!svgRef.current) return;
      const time = Date.now() / 2000;

      const newPath = frame1.replace(/([0-9.-]+)/g, (match) => {
        const value = parseFloat(match);
        const distortedValue = value + smoothNoise(value, time, time, 5);
        return distortedValue.toFixed(3);
      });

      if (svgRef.current.getBoundingClientRect().bottom > 0) {
        setPathData(newPath);
      }
      requestAnimationFrame(updatePath);
    };

    updatePath();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const isElementInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return rect.top < windowHeight && rect.bottom > 0;
      };

      const rows = [
        { left: ".prvi_red .slika1", right: ".prvi_red .slika2", factor: 0.5 },
        {
          left: ".drugi_red .slika1",
          right: ".drugi_red .slika2",
          factor: 0.25,
        },
        {
          left: ".treci_red .slika1",
          right: ".treci_red .slika2",
          factor: 0.1,
        },
      ];

      const getTranslateXForWidth = (width: number) => {
        if (width > 1024) return 0;
        if (width <= 1024 && width > 768) return 0.3 * width;
        if (width <= 768 && width > 500) return 0.3 * width;
        if (width <= 500) return 0.35 * width;
        return 0;
      };

      const applyTranslateX = (selector: string, factor: number) => {
        const element = document.querySelector(selector) as HTMLElement;
        if (element && isElementInViewport(element)) {
          const initialX =
            (element.classList.contains("slika1") ? -1 : 1) *
            getTranslateXForWidth(width);
          const newTranslateX = initialX + scrollPosition * factor;
          element.style.transform = `translateX(${newTranslateX}px)`;
        }
      };

      rows.forEach(({ left, right, factor }) => {
        applyTranslateX(left, -factor);
        applyTranslateX(right, factor);
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [width]);

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
        <div className="voda-wrapper">
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
            <path d={pathData} />
          </svg>
        </div>

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
