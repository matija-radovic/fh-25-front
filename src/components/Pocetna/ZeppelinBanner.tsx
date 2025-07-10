import { useLayoutEffect, useRef } from "react";
import "./Zeppelin.scss";
import Zeppelin from "../../assets/pocetna/zeppelin.svg";
import { useInView } from "framer-motion";

/**
 * TO FIX:
 * Hella optimize, paint lasts too long, layer slashing also.. maybe custom parses like 
 * ZeppelinBanner2.tsx using warpjs or modify pathParser.ts to hold "type of point"
 * data so it supports simultaneously "MoveTo" and "LineTo" path command
 */

const ZeppelinBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const zeppelinRef = useRef<HTMLImageElement>(null); // Ref za sliku
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(bannerRef);

  useLayoutEffect(() => {
    if (!inView) return;

    const waveLength = 15;
    const amplitude = 2;
    const samples = 90;
    const speed = 0.035;
    let offset = 0;
    let af: number;
    const halfHeight = 87;

    const xaStep = 100 / samples;
    const xpStep = xaStep * 6.8;
    const phaseStep = 1 / waveLength;

    const pathPoints = new Array<string>(samples + 1);
    const topPoints = new Array<string>(samples + 1);
    const bottomPoints = new Array<string>(samples + 1);

    const deltaT = 1000 / 60;
    let lastTime = 0;

    const animate = (currentTime: number) => {
      af = requestAnimationFrame(animate);
      if (!pathRef.current || currentTime - lastTime < deltaT) return;
      lastTime = currentTime;

      for (let x = 0; x <= samples; x++) {
        const yTop = Math.sin(x * phaseStep + offset) * amplitude;

        const xa = x * xaStep;
        const xp = x * xpStep;
        pathPoints[x] = `${xp} ${2 * yTop + halfHeight + amplitude} `
        topPoints[x] = `${xa}% ${yTop + amplitude}%`;
        bottomPoints[x] = `${xa}% ${100 + yTop - 2 * amplitude}%`;
      }

      // setters -> causes massive layout computation up to 8ms on 4x slow
      if (pathRef.current) pathRef.current.setAttribute('d', `M ${pathPoints.join("")}`);
      if (zeppelinRef.current) zeppelinRef.current.style.translate = `0 ${-50 + 4 * Math.sin(offset) * amplitude}%`
      if (bannerRef.current) bannerRef.current.style.clipPath =
        `polygon(0 0, ${topPoints.join(", ")}, 100% 100%, ${bottomPoints.reverse().join(", ")}, 0 100%)`;

      offset += speed;
    };

    af = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(af);
  }, [inView]);

  return (
    <div className="banner" >
      <img ref={zeppelinRef} src={Zeppelin} alt="zeppelin" className="zeppelin" />
      <div ref={bannerRef} className="banner-flag">
        <svg className="wave" viewBox="0 0 680 132">
          <path ref={pathRef} id="textPath" d="M 0 87L680 87" fill="transparent" />
          <text className="orbitron">
            <textPath href="#textPath" textAnchor="left" startOffset="3%">
              <tspan className="banner-year">2025</tspan>
              <tspan className="banner-moto montserrat" dy="1em" x="0">
                &lt;Use your code to change the road&gt;
              </tspan>
            </textPath>
            <textPath href="#textPath" startOffset="58.5%" textAnchor="left">
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
