import { motion } from "framer-motion";
import './LoadingPage.scss';
import { useRef, useEffect } from 'react';
import  Section  from '../-shared/Section/Section.tsx';

const Loading = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const fontSize = 60;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; 

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let columns = 0;
    let rows = 0;
    const rowGap = 10;
    let binaryArray: string[][] = [];

    const initCanvas = (pixelDensity = 1.7) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * pixelDensity;
      canvas.height = height * pixelDensity;

      columns = Math.ceil(canvas.width / fontSize);
      rows = Math.ceil(canvas.height / fontSize);
      binaryArray = Array(columns)
        .fill(0)
        .map(() =>
          Array(rows)
            .fill(0)
            .map(() => (Math.random() > 0.5 ? '1' : '0'))
        );
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#24bdde4d';
      ctx.font = `${fontSize}px Courier`;

      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() < 0.0025) {
            binaryArray[i][j] = binaryArray[i][j] === '0' ? '1' : '0';
          }
          ctx.fillText(binaryArray[i][j], i * fontSize, j * (fontSize + rowGap));
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
  
  return (
  <Section>
      <div className="background">
      
      <canvas ref={canvasRef}/>     
      
      <div className="loading-title">
        <motion.svg width="319" height="104" viewBox="0 0 319 104" initial="hidden" animate="visible" className="loading-title-fon">
            {/* F */}
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              strokeLinecap={"square"}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.25, ease: "easeInOut" }}
              d="M3.91998 99V3H96.3238V22.3333H23.1882V41.2667H81.2222V60.7333H23.1882V99H3.91998Z"
            />
            <motion.path
              id="F_Fill"
              fill="#24BDDE"
              opacity={0}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.25, duration: 0.5, ease: "easeOut" }
              }}
              d="M3.91998 99V3H96.3238V22.3333H23.1882V41.2667H81.2222V60.7333H23.1882V99H3.91998Z"
            />

            {/* O */}
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              strokeLinecap={"square"}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeIn",
              }}
              d="M129.5 100C125.944 100 122.7 99.1556 119.767 97.4667C116.922 95.689 114.611 93.3777 112.833 90.5333C111.144 87.6 110.3 84.3556 110.3 80.8V23.2C110.3 19.6444 111.144 16.4444 112.833 13.6C114.611 10.6667 116.922 8.35542 119.767 6.66667C122.7 4.88875 125.944 4 129.5 4H187.1C190.567 4 193.722 4.88875 196.567 6.66667C199.5 8.35542 201.856 10.6667 203.633 13.6C205.41 16.4444 206.3 19.6444 206.3 23.2V80.8C206.3 84.3556 205.41 87.6 203.633 90.5333C201.856 93.3777 199.5 95.689 196.567 97.4667C193.722 99.1556 190.567 100 187.1 100H129.5Z"
            />
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.65,
                ease: "easeOut",
              }}
              d="M130.3 80.6669H186.033C186.3 80.6669 186.478 80.6225 186.567 80.5335C186.744 80.3556 186.833 80.1335 186.833 79.8669V24.1335C186.833 23.8669 186.744 23.6892 186.567 23.6002C186.478 23.4223 186.3 23.3335 186.033 23.3335H130.3C130.033 23.3335 129.811 23.4223 129.633 23.6002C129.544 23.6892 129.5 23.8669 129.5 24.1335V79.8669C129.5 80.1335 129.544 80.3556 129.633 80.5335C129.811 80.6225 130.033 80.6669 130.3 80.6669Z"
            />
            <motion.path
              fill="#24BDDE"
              opacity={0}
              animate={{
                opacity: 1,
                transition: { delay: 1.25, duration: 0.5 },
              }}
              d="M129.5 100C125.944 100 122.7 99.1556 119.767 97.4667C116.922 95.689 114.611 93.3777 112.833 90.5333C111.144 87.6 110.3 84.3556 110.3 80.8V23.2C110.3 19.6444 111.144 16.4444 112.833 13.6C114.611 10.6667 116.922 8.35542 119.767 6.66667C122.7 4.88875 125.944 4 129.5 4H187.1C190.567 4 193.722 4.88875 196.567 6.66667C199.5 8.35542 201.856 10.6667 203.633 13.6C205.41 16.4444 206.3 19.6444 206.3 23.2V80.8C206.3 84.3556 205.41 87.6 203.633 90.5333C201.856 93.3777 199.5 95.689 196.567 97.4667C193.722 99.1556 190.567 100 187.1 100H129.5ZM130.3 80.6667H186.033C186.3 80.6667 186.478 80.6223 186.567 80.5333C186.744 80.3554 186.833 80.1333 186.833 79.8667V24.1333C186.833 23.8667 186.744 23.689 186.567 23.6C186.478 23.4221 186.3 23.3333 186.033 23.3333H130.3C130.033 23.3333 129.811 23.4221 129.633 23.6C129.544 23.689 129.5 23.8667 129.5 24.1333V79.8667C129.5 80.1333 129.544 80.3554 129.633 80.5333C129.811 80.6223 130.033 80.6667 130.3 80.6667Z"
            />

            {/* N */}
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              strokeLinecap={"square"}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M219.82 100V4H240.22L296.354 70.9333V4H315.82V100H295.42L239.02 32.8V100H219.82Z"

            />
            <motion.path
              fill="#24BDDE"
              opacity={0}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.25, duration: 0.5, ease: "easeOut" },
              }}
              d="M219.82 100V4H240.22L296.354 70.9333V4H315.82V100H295.42L239.02 32.8V100H219.82Z"
            />
        </motion.svg>
        
        <motion.svg width="762" height="104" viewBox="0 0 762 104" initial="hidden" animate="visible">

            {/* H */}
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              strokeLinecap={"square"}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              width="317" height="102" viewBox="0 0 317 102"
              d="M3 99V3H22.2V41.2667H81.8V3H101V99H81.8V60.7333H22.2V99H3Z"
            />
            <motion.path
              fill="#24BDDE"
              opacity={0}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.25, duration: 0.5, ease: "easeOut" },
              }}
              width="317" height="102" viewBox="0 0 317 102"
              d="M3 99V3H22.2V41.2667H81.8V3H101V99H81.8V60.7333H22.2V99H3Z"
            />

            {/* A */}
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              strokeLinecap={"square"}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 0.75,
                ease: "easeIn",
              }}
              d="M115.633 99V22.2C115.633 18.6444 116.477 15.4444 118.166 12.6C119.943 9.6667 122.256 7.35542 125.1 5.66667C128.033 3.88875 131.277 3 134.833 3H192.3C195.856 3 199.056 3.88875 201.9 5.66667C204.833 7.35542 207.189 9.6667 208.966 12.6C210.743 15.4444 211.633 18.6444 211.633 22.2V99H192.166V67.4H134.833V99H115.633Z"
            />
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                delay: 0.75,
                duration: 0.4,
                ease: "easeOut",
              }}
              d="M134.833 48.2H192.166V23.1333C192.166 22.8667 192.077 22.689 191.9 22.6C191.81 22.4221 191.633 22.3333 191.366 22.3333H135.633C135.366 22.3333 135.143 22.4221 134.966 22.6C134.877 22.689 134.833 22.8667 134.833 23.1333V51.2Z"
            />
            <motion.path
              fill="#24BDDE"
              opacity={0}
              animate={{
                opacity: 1,
                transition: { delay: 1.25, duration: 0.5, ease: "easeOut" },
              }}
              d="M115.633 99V22.2C115.633 18.6444 116.477 15.4444 118.166 12.6C119.943 9.6667 122.256 7.35542 125.1 5.66667C128.033 3.88875 131.277 3 134.833 3H192.3C195.856 3 199.056 3.88875 201.9 5.66667C204.833 7.35542 207.189 9.6667 208.966 12.6C210.743 15.4444 211.633 18.6444 211.633 22.2V99H192.166V67.4H134.833V99H115.633ZM134.833 48.2H192.166V23.1333C192.166 22.8667 192.077 22.689 191.9 22.6C191.81 22.4221 191.633 22.3333 191.366 22.3333H135.633C135.366 22.3333 135.143 22.4221 134.966 22.6C134.877 22.689 134.833 22.8667 134.833 23.1333V48.2Z"
            />

            {/* K */}
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              strokeLinecap={"square"}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M225.916 99V3H245.25V41.2667H265.916L297.916 3H318.45V9.1333L283.25 51L318.45 92.8667V99H297.916L265.916 60.7333H245.25V99H225.916Z"
            />

            <motion.path
              fill="#24BDDE"
              opacity={0}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.25, duration: 0.5, ease: "easeOut" },
              }}
              d="M225.916 99V3H245.25V41.2667H265.916L297.916 3H318.45V9.1333L283.25 51L318.45 92.8667V99H297.916L265.916 60.7333H245.25V99H225.916Z"
            />

            {/* A */}
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              strokeLinecap={"square"}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 0.75,
                ease: "easeIn"
              }}
              d="M332.3 99V22.2C332.3 18.6444 333.143 15.4444 334.833 12.6C336.61 9.6667 338.922 7.35542 341.766 5.66667C344.7 3.88875 347.943 3 351.5 3H408.966C412.522 3 415.722 3.88875 418.566 5.66667C421.499 7.35542 423.856 9.6667 425.633 12.6C427.41 15.4444 428.299 18.6444 428.299 22.2V99H408.833V67.4H351.5V99H332.3Z"
            />
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                delay: 0.75,
                duration: 0.4,
                ease: "easeOut"
              }}
              d="M351.5 48.2H408.833V23.1333C408.833 22.8667 408.743 22.689 408.566 22.6C408.477 22.4221 408.299 22.3333 408.033 22.3333H352.3C352.033 22.3333 351.81 22.4221 351.633 22.6C351.543 22.689 351.5 22.8667 351.5 23.1333V51.2Z"
            />
            <motion.path
              fill="#24BDDE"
              opacity={0}
              animate={{
                opacity: 1,
                transition: { delay: 1.25, duration: 0.5, ease: "easeOut" }
              }}
              d="M332.3 99V22.2C332.3 18.6444 333.143 15.4444 334.833 12.6C336.61 9.6667 338.922 7.35542 341.766 5.66667C344.7 3.88875 347.943 3 351.5 3H408.966C412.522 3 415.722 3.88875 418.566 5.66667C421.499 7.35542 423.856 9.6667 425.633 12.6C427.41 15.4444 428.299 18.6444 428.299 22.2V99H408.833V67.4H351.5V99H332.3ZM351.5 48.2H408.833V23.1333C408.833 22.8667 408.743 22.689 408.566 22.6C408.477 22.4221 408.299 22.3333 408.033 22.3333H352.3C352.033 22.3333 351.81 22.4221 351.633 22.6C351.543 22.689 351.5 22.8667 351.5 23.1333V48.2Z"
            />

            {/* T */}
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              strokeLinecap={"square"}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M480.216 99V22.3333H441.816V3H537.816V22.3333H499.55V99H480.216Z"
            />
            <motion.path
              fill="#24BDDE"
              opacity={0}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.25, duration: 0.5, ease: "easeOut" },
              }}
              d="M480.216 99V22.3333H441.816V3H537.816V22.3333H499.55V99H480.216Z"
            />

            {/* O */}
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              strokeLinecap={"square"}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeIn",
              }}
              d="M569.716 99C566.16 99 562.916 98.1556 559.983 96.4667C557.139 94.689 554.827 92.3777 553.05 89.5333C551.36 86.6 550.516 83.3556 550.516 79.8V22.2C550.516 18.6444 551.36 15.4444 553.05 12.6C554.827 9.6667 557.139 7.35542 559.983 5.66667C562.916 3.88875 566.16 3 569.716 3H627.316C630.783 3 633.939 3.88875 636.783 5.66667C639.716 7.35542 642.073 9.6667 643.85 12.6C645.627 15.4444 646.516 18.6444 646.516 22.2V79.8C646.516 83.3556 645.627 86.6 643.85 89.5333C642.073 92.3777 639.716 94.689 636.783 96.4667C633.939 98.1556 630.783 99 627.316 99H569.716Z"
            />
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.65,
                ease: "easeOut",
              }}
              d="M570.516 79.6667H626.25C626.516 79.6667 626.693 79.6223 626.783 79.5333C626.96 79.3554 627.05 79.1333 627.05 78.8667V23.1333C627.05 22.8667 626.96 22.689 626.783 22.6C626.693 22.4221 626.516 22.3333 626.25 22.3333H570.516C570.25 22.3333 570.027 22.4221 569.85 22.6C569.76 22.689 569.716 22.8667 569.716 23.1333V78.8667C569.716 79.1333 569.76 79.3554 569.85 79.5333C570.027 79.6223 570.25 79.6667 570.516 79.6667Z"
            />
            <motion.path
              fill="#24BDDE"
              opacity={0}
              animate={{
                opacity: 1,
                transition: { delay: 1.25, duration: 0.5, ease: "easeOut" },
              }}
              d="M569.716 99C566.16 99 562.916 98.1556 559.983 96.4667C557.139 94.689 554.827 92.3777 553.05 89.5333C551.36 86.6 550.516 83.3556 550.516 79.8V22.2C550.516 18.6444 551.36 15.4444 553.05 12.6C554.827 9.6667 557.139 7.35542 559.983 5.66667C562.916 3.88875 566.16 3 569.716 3H627.316C630.783 3 633.939 3.88875 636.783 5.66667C639.716 7.35542 642.073 9.6667 643.85 12.6C645.627 15.4444 646.516 18.6444 646.516 22.2V79.8C646.516 83.3556 645.627 86.6 643.85 89.5333C642.073 92.3777 639.716 94.689 636.783 96.4667C633.939 98.1556 630.783 99 627.316 99H569.716ZM570.516 79.6667H626.25C626.516 79.6667 626.693 79.6223 626.783 79.5333C626.96 79.3554 627.05 79.1333 627.05 78.8667V23.1333C627.05 22.8667 626.96 22.689 626.783 22.6C626.693 22.4221 626.516 22.3333 626.25 22.3333H570.516C570.25 22.3333 570.027 22.4221 569.85 22.6C569.76 22.689 569.716 22.8667 569.716 23.1333V78.8667C569.716 79.1333 569.76 79.3554 569.85 79.5333C570.027 79.6223 570.25 79.6667 570.516 79.6667Z" 
            />

            {/* N */}
            <motion.path
              fill="none"
              stroke="#24BDDE"
              strokeWidth={6}
              strokeLinecap={"square"}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M661.2 99V3H681.6L737.733 69.9333V3H757.2V99H736.8L680.4 31.8V99H661.2Z" 
            />
            <motion.path
              fill="#24BDDE"
              opacity={0}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.25, duration: 0.5, ease: "easeOut" },
              }}
              d="M661.2 99V3H681.6L737.733 69.9333V3H757.2V99H736.8L680.4 31.8V99H661.2Z" 
            />
        </motion.svg>
      </div>
    </div>
  </Section>
  );
};

export default Loading;