import { useInView } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react"
import { encodePath, parsePath } from "../../utils/parsers/pathParser";
import Countdown, { CountdownRendererFn } from "react-countdown";
import { d } from "../../utils/constants/water/waterPath";

const smoothNoise = (
  x: number,
  y: number,
  time: number,
  scale: number
): number => {
  const p = (x + y) * 2 + time;
  return Math.sin(p) * scale;
};

const digits = (number: number) => Math.abs(number).toString().padStart(2, "0").split('');
const countdownRenderer: CountdownRendererFn = ({ completed, days, hours, minutes, seconds }) => {
  if (completed) {
    return <span className="finished">Prijave su zatvorene</span>
  } else {
    const d = digits(days);
    const h = digits(hours);
    const m = digits(minutes);
    const s = digits(seconds);

    return (
      <span className="timer">
        {d.map((v, i) => <span className="digit-box" key={`${v}${i}f-y`}>{v}</span>)}
        <span className="two-dots">:</span>
        {h.map((v, i) => <span className="digit-box" key={`${v}${i}u-o`}>{v}</span>)}
        <span className="two-dots">:</span>
        {m.map((v, i) => <span className="digit-box" key={`${v}${i}c-u`}>{v}</span>)}
        <span className="two-dots">:</span>
        {s.map((v, i) => <span className="digit-box" key={`${v}${i}k-:)`}>{v}</span>)}
      </span>
    )
  }
}

const Water = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const waveRef = useRef<SVGPathElement | null>(null);
  const waterRef = useRef<SVGSVGElement | null>(null);
  const inView = useInView(waterRef, { margin: "10px 0px" })

  // Water
  useEffect(() => {
    if (!inView) return;
    let af: number;
    let lastTime = 0;
    const points = parsePath(d);
    const tpoints = structuredClone(points);
    const timefactor = 1 / 3072;
    const deltaT = 1000 / 30;

    const updatePath = (currentTime: number) => {
      af = requestAnimationFrame(updatePath);
      if (!pathRef.current || currentTime - lastTime < deltaT) return;
      lastTime = currentTime;
      const time = currentTime * timefactor;

      for (let i = 0; i < tpoints.length; i++) {
        const dx = smoothNoise(points[i].x, time, time, 2.5)
        const dy = smoothNoise(points[i].y, time, time, 2.5)
        const p0 = points[i];
        const p1 = tpoints[i];
        p1.x = p0.x + dx
        p1.xe = p0.xe !== undefined ? p0.xe + dx : undefined
        p1.xs = p0.xs !== undefined ? p0.xs + dx : undefined
        p1.y = p0.y + dy
        p1.ye = p0.ye !== undefined ? p0.ye + dy : undefined
        p1.ys = p0.ys !== undefined ? p0.ys + dy : undefined
      }

      pathRef.current.setAttribute("d", encodePath(tpoints));
    }

    af = requestAnimationFrame(updatePath);
    return () => cancelAnimationFrame(af);
  }, [inView]);

  // Waves
  useLayoutEffect(() => {
    if (!inView) return;
    const waveLength = 10;
    const amplitude = 8;
    const samples = 80;
    const speed = 0.01;
    const halfHeight = 38;  // magic
    const yBase = amplitude + 0.6; // magic
    const pathMultiplier = 5; // magic

    let offset = 0;
    let af: number;
    let lastTime = 0;
    const deltaT = 1000 / 45;

    const xaStep = 100 / samples;
    const xpStep = xaStep * 14.4;
    const phaseStep = 1 / waveLength;

    const pathNumbers = new Float32Array((samples + 1) * 2);
    const topPoints = new Array(samples + 1);

    const animate = (currentTime: number) => {
      af = requestAnimationFrame(animate);

      if (currentTime - lastTime < deltaT) return;
      lastTime = currentTime;

      for (let i = 0, x = 0; x <= samples; x++, i += 2) {
        const yTop = Math.sin(x * phaseStep + offset) * amplitude;

        pathNumbers[i] = x * xpStep;
        pathNumbers[i + 1] = yTop * pathMultiplier + halfHeight + amplitude;
        topPoints[x] = `${x * xaStep}% ${yTop + yBase}%`;
      }

      if (waveRef.current) waveRef.current.setAttribute('d', `M ${pathNumbers.join(" ")}`);
      if (waterRef.current) waterRef.current.style.clipPath =
        `polygon(0 100%, ${topPoints.join(', ')}, 100% 100%)`;

      offset += speed;
    };

    af = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(af);
  }, [inView]);

  return (
    <div className='water-wrapper'>
      <svg className="wave" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
        <path ref={waveRef} d="M 0 46 36 53.95 72 61.58 108 68.59 144 74.69 180 79.66 216 83.28 252 85.42 288 85.98 324 84.95 360 82.37 396 78.34 432 73.02 468 66.62 504 59.40 540 51.64 576 43.67 612 35.78 648 28.30 684 21.53 720 15.73 756 11.14 792 7.94 828 6.25 864 6.15 900 7.64 936 10.66 972 15.09 1008 20.75 1044 27.42 1080 34.82 1116 42.68 1152 50.66 1188 58.46 1224 65.76 1260 72.28 1296 77.75 1332 81.95 1368 84.72 1404 85.94 1440 85.57" fill="transparent" stroke="#24BDDE" strokeWidth="10" />
      </svg>
      <svg ref={waterRef} className="water" width="1440" height="480" viewBox="0 0 1440 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rainbow" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0" stopColor="#002402"></stop>
            <stop offset="1" stopColor="transparent"></stop>
          </linearGradient>
          <rect id="gradientRect" width="100%" height="100%" fill="url(#rainbow)" />
          <filter id="gradientShadow">
            <feOffset dx="3" dy="17" result="offsetShadow" />
            <feImage href="#gradientRect" x="0%" y="0%" width="100%" height="100%" result="gradientImage" />
            <feComposite in="gradientImage" in2="offsetShadow" operator="in" result="coloredShadow" />
            <feMerge>
              <feMergeNode in="coloredShadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path ref={pathRef} d={d} filter="url(#gradientShadow)" fillRule="evenodd" clipRule="evenodd" fill="#24BDDE" />
      </svg>
      <div className="countdown orbitron">
        <Countdown date={new Date("2025-08-31T24:00:00")} renderer={countdownRenderer} />
      </div>
    </div>
  )
}

export default Water