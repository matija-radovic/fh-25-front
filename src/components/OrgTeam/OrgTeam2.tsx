import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, useInView, wrap } from 'framer-motion'
import { OrganizationalTeam } from "../../utils/constants/orgteam/teams";

import "./OrgTeam2.scss";
import Section from "../-shared/Section/Section";
import Card from "./Card/Card";

import star from "../../assets/OrgTeam/star.svg";
import logo from "../../assets/OrgTeam/fhlogo.svg";
import Hexagon from "../-shared/Hexagon/Hexagon";
import Arrow from "../-shared/Arrow/Arrow";
import useVisibility from "../../hooks/useVisibility";

// TODO: async fetch images to prevent flash of invisible image

interface OrgTeamProps {
    teams: OrganizationalTeam[]
}

const INTERVAL = 10000;
const SIZES = `
    (max-width: 768px) 33vw,
    (min-width: 769px) and (max-width: 1024px) 40vw,
    (min-width: 1025px) 45vw
`
const mqPhone = () => window.matchMedia("only screen and (max-width: 768px)").matches;

const OrgTeam2: React.FC<OrgTeamProps> = ({ teams }) => {
    const wrapperRef = useRef<HTMLDivElement>(null); // Ref za observer
    const inView = useInView(wrapperRef); // Observer
    const isVisible = useVisibility();
    const [isHovered, setisHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<-1 | 1>(1);
    const [mqMatches, setMqMatches] = useState(mqPhone);

    const { coordinator, team } = teams[currentIndex];

    // Cycle current index
    useEffect(() => {
        if (!inView || !isVisible || isHovered) return;

        const iid = setInterval(() => {
            setCurrentIndex(prev => wrap(0, teams.length, ++prev));
        }, INTERVAL);
        return () => clearInterval(iid);
    }, [inView, isHovered, isVisible, teams]);

    useEffect(() => {
        const handleResize = () => setMqMatches(mqPhone);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const navigate = (dir: -1 | 1) => {
        setCurrentIndex(prev => wrap(0, teams.length, prev + dir));
        setDirection(dir);
    };

    return (
        <Section className="org-team orbitron" heading="ORGANIZACIONI TIM" ref={wrapperRef}>
            {!mqMatches ? (
                <>
                    <Arrow className={"flipped-x top half-offset"} />
                    <Arrow className={"flipped-y bottom half-offset"} />
                </>
            ) : null}
            <div className="org-team-wrap" onMouseEnter={() => setisHovered(true)} onMouseLeave={() => setisHovered(false)}>
                <div className="org-team-cards">
                    <div className="hexagon-group one">
                        <Hexagon className="x-large" />
                        <Hexagon className="small bottom-right" />
                    </div>
                    <div className="hexagon-group two">
                        <Hexagon className="large" />
                        <Hexagon className="small bottom-right" />
                    </div>
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                        <Card className="coord" key={currentIndex + 300} enterDirection={direction}>
                            <div className="left">
                                <div className={`vertical-name${coordinator.firstName === "Anastasija" ? " small" : ""}`}>{coordinator.firstName}</div>
                                <picture className="coord-image">
                                    {Object.entries(coordinator.image.sources).map(
                                        ([format, images]) => <source srcSet={images} type={`image/${format}`} key={images} sizes={SIZES}/>
                                    )}
                                    <img src={coordinator.image.img.src} alt={coordinator.role} />
                                </picture>
                                <div className="name-box">
                                    <span>{coordinator.firstName}</span><br />
                                    <span>{coordinator.lastName}</span>
                                </div>
                            </div>
                            <div className="right">
                                <img className="star" src={star} alt="star" />
                                <span className="role">{coordinator.role}</span>
                                <img className="fh-logo" src={logo} alt="FON Hakaton logo" />
                            </div>
                        </Card>
                    </AnimatePresence>
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                        <Card className="team" sensitivity={0.4} key={currentIndex + 200} enterDirection={direction}>
                            <picture>
                                {Object.entries(team.image.sources).map(
                                    ([format, images]) => <source srcSet={images} type={`image/${format}`} key={images} sizes={SIZES}/>
                                )}
                                <img src={team.image.img.src} alt="team group photo" />
                            </picture>
                            <span>{team.name}</span>
                        </Card>
                    </AnimatePresence>
                </div>
                <div className="org-team-controls">
                    <button className="prev" onClick={() => navigate(-1)} />
                    <button className="next" onClick={() => navigate(1)} />
                </div>
            </div>
        </Section>
    );
};

export default OrgTeam2;
