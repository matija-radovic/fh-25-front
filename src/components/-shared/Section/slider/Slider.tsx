import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import "./Slider.scss";

interface SliderProps {
  values: string[];
  className?: string;
  mobileStyleType?: "short" | "long";
  callback?: () => void;
}

const Slider: React.FC<SliderProps> = ({
  values,
  className = "",
  callback = () => {},
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const inactivityTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const effectiveMobileStyleType: "short" | "long" =
    windowWidth <= 1024 ? "short" : "long";

  const maxLength = effectiveMobileStyleType === "short" ? 3 : 5;


  const expandValues = React.useMemo(() => {
    const temp = values.map((value, i) => ({ src: value, position: i }));
    let counter = 0;
    while (temp.length < maxLength) {
      temp.push({
        src: values[counter++ % values.length],
        position: temp.length,
      });
    }
    return temp;
  }, [values, maxLength]);

  const [images, setImages] = useState(expandValues);


  const handleSlide = useCallback((direction: "next" | "prev") => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      if (direction === "next") {
        const first = newImages.shift();
        if (first) newImages.push(first);
      } else {
        const last = newImages.pop();
        if (last) newImages.unshift(last);
      }
      return newImages;
    });
    setIsAnimating(true);
  }, []);


  const resetInactivityTimeout = useCallback(() => {
    if (inactivityTimeoutRef.current !== null) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = setTimeout(() => {
      handleSlide("next");
    }, 4000);
  }, [handleSlide]);

  useEffect(() => {
    resetInactivityTimeout();
    return () => {
      if (inactivityTimeoutRef.current !== null) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [resetInactivityTimeout]);


  useEffect(() => {
    if (isAnimating) {
      const animationTimeout = setTimeout(() => {
        setIsAnimating(false);
        callback();
      }, 1000);
      return () => clearTimeout(animationTimeout);
    }
  }, [isAnimating, callback]);


  const centerIndex = Math.floor(maxLength / 2);
  const baseZIndex = maxLength;

  const imageVariants: Variants = {};
  if (maxLength === 5) {

    imageVariants["0"] = {
      x: "-170%",
      scale: 0.5,
      opacity: 0.5,
      zIndex: baseZIndex - Math.abs(0 - centerIndex),
    };
    imageVariants["1"] = {
      x: "-100%",
      scale: 0.7,
      opacity: 1,
      zIndex: baseZIndex - Math.abs(1 - centerIndex),
    };
    imageVariants["2"] = {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: baseZIndex - Math.abs(2 - centerIndex),
    };
    imageVariants["3"] = {
      x: "100%",
      scale: 0.7,
      opacity: 1,
      zIndex: baseZIndex - Math.abs(3 - centerIndex),
    };
    imageVariants["4"] = {
      x: "170%",
      scale: 0.5,
      opacity: 0.5,
      zIndex: baseZIndex - Math.abs(4 - centerIndex),
    };
  } else {

    imageVariants["0"] = {
      x: "-100%",
      scale: 0.7,
      opacity: 0.5,
      zIndex: baseZIndex - Math.abs(0 - centerIndex),
    };
    imageVariants["1"] = {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: baseZIndex - Math.abs(1 - centerIndex),
    };
    imageVariants["2"] = {
      x: "100%",
      scale: 0.7,
      opacity: 0.5,
      zIndex: baseZIndex - Math.abs(2 - centerIndex),
    };
  }

  return (
    <div
      className={`slider ${className}`}
      onMouseMove={resetInactivityTimeout}
      onClick={resetInactivityTimeout}
    >
      <button
        onClick={() => {
          handleSlide("prev");
          resetInactivityTimeout();
        }}
        disabled={isAnimating}
        className="slider-button prev"
        aria-label="Previous"
      >
        <div className="arrow left" />
      </button>

      <div className="slider-content">
        {images.slice(0, maxLength).map((value, i) => (
          <motion.div
            key={value.src}
            className="slider-item"
            initial="center"
            animate={String(i)}
            variants={imageVariants}
            transition={{ duration: 0.5, ease: "linear", type: "tween" }}
            style={{
              backgroundImage: `url(${value.src})`,
              position: i !== 0 ? "absolute" : "relative",
            }}
          />
        ))}
      </div>

      <button
        onClick={() => {
          handleSlide("next");
          resetInactivityTimeout();
        }}
        disabled={isAnimating}
        className="slider-button next"
        aria-label="Next"
      >
        <div className="arrow right" />
      </button>
    </div>
  );
};

export default Slider;
