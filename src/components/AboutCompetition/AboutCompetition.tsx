import { useEffect, useState } from "react";
import Arrow from "../-shared/Arrow/Arrow";
import Section from "../-shared/Section/Section";
import TextBox from "../-shared/TextBox/TextBox";
import './AboutCompetition.scss';
import Hexagon from "../-shared/Hexagon/Hexagon";

const mqTablet = () => window.matchMedia("only screen and (max-width: 1024px)").matches;
const AboutCompetition = () => {
    const [matches, setMatches] = useState(mqTablet);

    useEffect(() => {
        const handleResize = () => setMatches(mqTablet);
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <Section className="about" isContainer={true}>
            <div className="about-segment-wrapper">
                {matches ? null : <Arrow className="half-offset" flippedX flippedY />}
                <div className="about-segment">
                    <TextBox className="text-box-about-competition">
                        <div className="hexagon-group one">
                            <Hexagon className="x-large" />
                            <Hexagon className="small bottom-left" />
                        </div>
                        <h1>O HAKATONU</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </TextBox>
                </div>
            </div>
            <div className="about-segment-wrapper">
                {matches ? null : <Arrow className="half-offset" flippedY />}
                <div className="about-segment">
                    <TextBox className="text-box-about-competition">
                        <div className="hexagon-group two">
                            <Hexagon className="x-large" />
                            <Hexagon className="small bottom-right" />
                        </div>
                        <h1>O WEB3 IZAZOVU</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#web3">SAZNAJ VIŠE</a>
                    </TextBox>
                </div>
            </div>
            <div className="about-segment-wrapper">
                {matches ? null : <Arrow className="half-offset" flippedX />}
                <div className="about-segment">
                    <TextBox className="text-box-about-competition">
                        <div className="hexagon-group three">
                            <Hexagon className="x-large" />
                            <Hexagon className="small top-left" />
                        </div>
                        <h1>ZAŠTO SE PRIJAVITI?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </TextBox>
                </div>
            </div>
        </Section>
    );
}

export default AboutCompetition;