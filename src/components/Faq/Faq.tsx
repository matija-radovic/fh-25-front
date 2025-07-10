import { useState, useRef, useCallback, useEffect } from "react";
import "./Faq.scss";
import Section from "../-shared/Section/Section";
import { FaqItem, faq } from "../../utils/constants/faq/questions";
import qmark from "../../assets/faq/questionmark.svg"
import { animate, motion, useInView, useMotionValue } from "framer-motion";

const Faq = () => {
  // Used only for updating the Answer Box
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);

  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const answerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const currentIndexRef = useRef<number>(selectedQuestionIndex);

  const inView = useInView(containerRef, { once: true, amount: .5 });
  const pathLength = useMotionValue(0)

  const animatePath = useCallback((reverse: boolean = false) =>
    animate(pathLength, reverse ? 0 : 1, { duration: .2, ease: "linear" }),
    [pathLength]
  );

  const updateSvgPath = useCallback((index: number) => {
    if (!questionRefs.current[index] ||
      !answerRef.current || !containerRef.current) return;
    const questionCircle = questionRefs.current[index].querySelector(".faq-circle");
    const answerCircle = answerRef.current.querySelector(".answer-circle");

    if (!questionCircle || !answerCircle) return;

    const questionRect = questionCircle.getBoundingClientRect();
    const answerRect = answerCircle.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const startX = questionRect.left + questionRect.width / 2 - containerRect.left;
    const startY = questionRect.bottom - containerRect.top - 1;
    const endY = answerRect.top - containerRect.top;
    const gap = parseFloat(window.getComputedStyle(containerRef.current).rowGap) / 2 - questionRect.width / 2;

    const isLeftColumn = startX < containerRect.width / 2;
    const midX = isLeftColumn
      ? containerRect.width / 2
      : containerRect.width / 2;

    const path = `M${startX} ${startY}V${startY + gap}H${midX}V${endY}`;

    pathRef.current?.setAttribute("d", path);
    return animatePath();
  }, [animatePath])

  const handleQuestionClick = async (index: number) => {
    if (index === selectedQuestionIndex) return;
    await animatePath(true)
    updateSvgPath(index)?.then(() => setSelectedQuestionIndex(index));
  };

  // For the resize
  useEffect(() => {
    currentIndexRef.current = selectedQuestionIndex
  }, [selectedQuestionIndex])

  useEffect(() => {
    if (!inView) return;
    updateSvgPath(currentIndexRef.current)
    const fun = () => updateSvgPath(currentIndexRef.current);
    window.addEventListener("resize", fun);
    return () => {
      window.removeEventListener("resize", fun);
    };
  }, [inView, updateSvgPath]);


  return (
    <Section heading="ČESTO POSTAVLJENA PITANJA" className="faq" id="faq">
      <div className="faq-container" ref={containerRef}>
        {/* SVG linija */}
        <svg className="faq-line-svg">
          <motion.path ref={pathRef} stroke="#F3F2FF" strokeWidth="2" fill="none" style={{ pathLength }} />
        </svg>

        {faq.map((question: FaqItem, index: number) => (
          <div
            key={index}
            ref={(el) => (questionRefs.current[index] = el)}
            className={`faq-item ${selectedQuestionIndex === index ? "selected" : ""}`}
            onClick={() => handleQuestionClick(index)}
          >
            <img src={qmark} alt="" />
            <p>{question.question}</p>
            <svg className="faq-circle" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8.5" stroke="#F3F2FF" strokeWidth="3" fill="none" />
            </svg>
          </div>
        ))}
        <div className="faq-answers" ref={answerRef}>
          <svg className="answer-circle" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8.5" stroke="#F3F2FF" strokeWidth="3" fill="none" />
          </svg>
          <h3 className="montserrat">{faq[selectedQuestionIndex].question}</h3>
          <hr />
          <p className="montserrat">{faq[selectedQuestionIndex].answer}</p>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
