import './LoadingPage.scss';
import { motion, Variants } from "motion/react";
import { useRef, useLayoutEffect, useContext } from 'react';
import { svgPathFills, svgPaths } from "../../utils/constants/loading/paths.ts";
import { animationStates, fillVariants, StrokePart, strokeVariants } from "../../utils/constants/loading/variants.ts";
import LoadingContext from '@/contexts/LoadingContext/LoadingContext.tsx';

const totalPaths = (svgPaths.fon.length + svgPathFills.fon.length + svgPaths.hakaton.length + svgPathFills.hakaton.length);
const motionFillSetup = { ...animationStates, variants: fillVariants };
const motionStrokeSetup: Record<StrokePart, typeof animationStates & { variants: Variants }> = {
  start: { ...animationStates, variants: strokeVariants.start },
  end: { ...animationStates, variants: strokeVariants.end },
  full: { ...animationStates, variants: strokeVariants.full }
}
const Loading = () => {
  const { completeLoading } = useContext(LoadingContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const numOfElementsCompletedAnimating = useRef<number>(0);
  const fontSize = 35;

  const handleAnimationComplete = () => {
    if (numOfElementsCompletedAnimating.current >= totalPaths - 1)
      completeLoading();
    else
      numOfElementsCompletedAnimating.current++;
  }

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pixelDensity = 1.7
    const fs = fontSize * pixelDensity;
    let columns = 0;
    let rows = 0;
    let binaryArray: string[][];
    let Y: number, X: number; // Character draw offset
    let fWidth: number, fHeight: number; // True width
    let rowGap: number, columnGap: number; // True space-between
    const minRowGap: number = 17 * pixelDensity, minColumnGap: number = 8 * pixelDensity; // Floored gap distance, relative pixel number (original: 10 / 20)
    const margin: number = 8 * pixelDensity;

    const initCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * pixelDensity;
      canvas.height = height * pixelDensity;

      ctx.fillStyle = '#24BDDE';
      ctx.textBaseline = 'top'
      ctx.font = `${fs}px Courier`; //bold???

      const metrics = ctx.measureText('0');
      fHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
      fWidth = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
      Y = metrics.actualBoundingBoxAscent;
      X = metrics.actualBoundingBoxLeft;
      const cWidth = canvas.width - 2 * margin;
      const cHeight = canvas.height - 2 * margin;

      columns = Math.floor((cWidth + minColumnGap) / (fWidth + minColumnGap));
      columnGap = (cWidth - (columns * (fWidth + minColumnGap) - minColumnGap)) / columns + minColumnGap;
      rows = Math.floor((cHeight + minRowGap) / (fHeight + minRowGap));
      rowGap = (cHeight - (rows * (fHeight + minRowGap) - minRowGap) + Math.abs(Y) - 1.5 - margin * 0.5) / rows + minRowGap;

      binaryArray = Array(rows).fill(0).map(() => Array(columns).fill(0).map(() => (Math.random() > 0.5 ? '1' : '0')));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          if (Math.random() < 0.0025) {
            binaryArray[i][j] = binaryArray[i][j] === '0' ? '1' : '0';
          }
          ctx.fillText(binaryArray[i][j], margin + X + j * (fWidth + columnGap), margin + Y + i * (fHeight + rowGap));
        }
      }
      animationRef.current = requestAnimationFrame(draw);
    };

    initCanvas();
    animationRef.current = requestAnimationFrame(draw);

    const resizeHandler = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      initCanvas();
      animationRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    document.body.style.overflowY = "hidden"
    return () => { document.body.style.overflowY = "auto" }
  }, [])

  return (
    <motion.div className="loading-background" animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: .2, duration: 1, ease: [0, 1, 0, 1] }}>
      <canvas ref={canvasRef} />
      <div className="loading-title">
        <svg width="319" height="104" viewBox="0 0 319 104" className="loading-title-fon">
          <g fill="none" stroke="#24BDDE" strokeWidth={6} strokeLinecap="square">
            {svgPaths.fon.map((v, i) => <motion.path key={i} {...motionStrokeSetup[v.type]} d={v.d} onAnimationComplete={handleAnimationComplete} />)}
          </g>

          <g fill="#24BDDE">
            {svgPathFills.fon.map((v, i) => <motion.path key={i} {...motionFillSetup} d={v} onAnimationComplete={handleAnimationComplete} />)}
          </g>
        </svg>
        <svg width="762" height="104" viewBox="0 0 762 104">
          <g fill="none" stroke="#24BDDE" strokeWidth={6} strokeLinecap="square">
            {svgPaths.hakaton.map((v, i) => <motion.path key={i} {...motionStrokeSetup[v.type]} d={v.d} onAnimationComplete={handleAnimationComplete} />)}
          </g>
          <g fill="#24BDDE"> {/* Fill */}
            {svgPathFills.hakaton.map((v, i) => <motion.path key={i} {...motionFillSetup} d={v} onAnimationComplete={handleAnimationComplete} />)}
          </g>
        </svg>
      </div>
    </motion.div>
  );
};

export default Loading;