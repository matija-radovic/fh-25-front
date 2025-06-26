import { useState, useRef, useEffect } from "react";
import "./Faq.scss";
import Section from "../-shared/Section/Section";
import { FaqItem, faq } from "../../utils/constants/faq/questions";
import qmark from "../../assets/faq/questionmark.svg"

const Faq = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);
  const [svgPath, setSvgPath] = useState<string>("");
  const [animationDirection, setAnimationDirection] = useState<"normal" | "reverse">("normal");

  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const answerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateSvgPath = () => {
      if (!questionRefs.current[selectedQuestionIndex] ||
        !answerRef.current || !containerRef.current) return;
      const questionCircle = questionRefs.current[selectedQuestionIndex].querySelector(".faq-circle");
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

      setSvgPath(path);

      if (svgRef.current) {
        svgRef.current.style.animation = "none";
        requestAnimationFrame(() => {
          svgRef.current!.style.animation = `dash 0.5s linear ${animationDirection} forwards`;
        });
      }
    };

    updateSvgPath();
    window.addEventListener("resize", updateSvgPath);

    return () => {
      window.removeEventListener("resize", updateSvgPath);
    };
  }, [selectedQuestionIndex, animationDirection]);

  const handleQuestionClick = (index: number) => {
    if (index === selectedQuestionIndex) return;
    setAnimationDirection("reverse");
    setTimeout(() => {
      setAnimationDirection("normal");
      setSelectedQuestionIndex(index);
    }, 500);
  };

  return (
    <Section heading="ČESTO POSTAVLJENA PITANJA">
      <div className="faq-container" ref={containerRef}>
        {/* SVG linija */}
        <svg className="faq-line-svg" ref={svgRef}>
          <path d={svgPath} stroke="#F3F2FF" strokeWidth="2" fill="none" />
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
