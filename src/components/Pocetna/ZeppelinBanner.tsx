import { useEffect, useRef, useState } from "react";
import "./Zeppelin.scss";
import Zeppelin from "../../assets/pocetna/zeppelin.svg";
import { useInView } from "framer-motion";

const ZeppelinBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const zeppelinRef = useRef<HTMLImageElement>(null); // Ref za sliku
  const [textPath, setTextPath] = useState("");
  const [width, setWidth] = useState(500);
  const isInView = useInView(bannerRef);
  useEffect(() => {
    const updateWidth = () => {
      if (bannerRef.current) {
        setWidth(bannerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const waveLength = width * 1.2;
    const amplitude = 5;
    const segments = 50;
    const speed = 0.035;
    let offset = 0;
    let animationFrameId: number;

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

      setTextPath(generateSinPath());

      const topPoints = [];
      const bottomPoints = [];

      let firstY = 50; // Y koordinata levog početka sinusoide

      for (let x = 0; x <= width; x += 10) {
        const yTop =
          Math.sin((x / waveLength) * 2 * Math.PI + offset) * amplitude;
        if (x === 0) firstY = yTop + amplitude; // Čuvamo početni Y za Zeppelin

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

      if (zeppelinRef.current) {
        zeppelinRef.current.style.transform = `translateY(${firstY}px)`; // Zeppelin gore-dole
      }

      if (isInView) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [width, isInView]);

  return (
    <div className="banner">
      <img
        ref={zeppelinRef}
        src={Zeppelin}
        alt="zeppelin"
        className="zeppelin"
      />
      <div className="banner-text" ref={bannerRef}>
        <svg
          className="wave"
          viewBox={`0 0 ${width} 140`}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "57%",
            left: 0,
            transform: "translateY(-43%)",
            zIndex: 2,
            width: "100%",
            height: "100%",
          }}
        >
          <path id="textPath" d={textPath} fill="transparent" />
          <text className="orbitron" fontWeight="bold" textAnchor="left">
            <textPath href="#textPath" startOffset="5%" textAnchor="left">
              <tspan className="banner-year">2025</tspan>
              <tspan
                className="banner-moto montserrat"
                dy="1em"
                x="0"
                fontSize="18"
              >
                &lt;Use your code to change the road&gt;
              </tspan>
            </textPath>
            <textPath href="#textPath" startOffset="56%" textAnchor="left">
              <tspan className="banner-side-text" x="0" dy="-1em">
                FON
              </tspan>
              <tspan className="banner-side-text" x="0" dy="1em">
                HAKATON
              </tspan>
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ZeppelinBanner;
