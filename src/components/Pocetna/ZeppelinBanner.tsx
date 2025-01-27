import { useEffect, useRef, useState } from "react";
import "./Zeppelin.scss";
import Zeppelin from "../../assets/pocetna/zeppelin.svg";

const ZeppelinBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [textPath, setTextPath] = useState("");

  useEffect(() => {
    const waveLength = 400; // Dužina talasa
    const amplitude = 10; // Amplituda talasa
    const segments = 50; // Broj tačaka na sinusnoj liniji
    const speed = 0.02; // Brzina animacije
    let offset = 0;

    const animate = () => {
      offset += speed;

      const generateSinPath = () => {
        let d = `M 0 50`; // Početna tačka
        for (let i = 0; i <= segments; i++) {
          const x = (i / segments) * 500; // Dužina putanje
          const y =
            50 + Math.sin((x / waveLength) * 2 * Math.PI + offset) * amplitude;
          d += ` L ${x} ${y} `;
        }
        return d;
      };

      setTextPath(generateSinPath()); // Putanja za tekst

      const topPoints = [];
      const bottomPoints = [];
      const width = 800;

      for (let x = 0; x <= width; x += 10) {
        const yTop =
          Math.sin((x / waveLength) * 2 * Math.PI + offset) * amplitude;
        topPoints.push(`${x}px ${yTop + amplitude}px`);

        const yBottom =
          Math.sin((x / waveLength) * 2 * Math.PI + offset + Math.PI) *
          amplitude;
        bottomPoints.push(
          `${x}px calc(100% - ${Math.abs(yBottom + amplitude)}px)`
        );
      }

      if (bannerRef.current) {
        bannerRef.current.style.clipPath = `polygon(0 0, ${topPoints.join(
          ", "
        )}, 100% calc(100%), ${bottomPoints
          .reverse()
          .join(", ")}, 0 calc(100%))`;
      }

      requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  return (
    <div className="banner">
      <img src={Zeppelin} alt="zeppelin" className="zeppelin" />
      <div className="banner-text" ref={bannerRef}>
        <svg
          className="wave"
          viewBox="0 0 500 150"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "55%",
            left: 0,
            transform: "translateY(-45%)",
            zIndex: 2,
          }}
        >
          <path id="textPath" d={textPath} fill="transparent" />
          <text fontSize="24" fill="white" fontWeight="bold">
            <textPath href="#textPath" startOffset="50%" textAnchor="middle">
              OVO JE TALASASTI BANNER!
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ZeppelinBanner;
