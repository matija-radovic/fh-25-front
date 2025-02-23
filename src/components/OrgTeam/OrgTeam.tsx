import React, { useState, useEffect, useRef } from "react";
import "./OrgTeam.scss";
import Section from "../-shared/Section/Section";
import CoordCard from "./Child/CoordCard";
import TeamCard from "./Child/TeamCard";
import Hexagon from "./Child/Hexagon";
import HexagonMobile from "./Child/HexagonMobile";
import OrgTeamArrow from "./Child/Arrow/OrgTeamArrow";

interface OrgTeamProps {
  teams: {
    coordinatorImage: string;
    coordinatorFirstName: string;
    coordinatorLastName: string;
    coordinatorRole: string;
    teamImage: string;
    teamName: string;
  }[];
}

const OrgTeam: React.FC<OrgTeamProps> = ({ teams }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null); // Ref za dodatni wrapper
  const intervalRef = useRef<number | null>(null); // Ref za interval

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  const startInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
    }, 5000);
  };

  useEffect(() => {
    if (isVisible) {
      startInterval();
    } else {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, teams.length]);

  const {
    coordinatorImage,
    coordinatorFirstName,
    coordinatorLastName,
    coordinatorRole,
    teamImage,
    teamName,
  } = teams[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
    startInterval();
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teams.length - 1 : prevIndex - 1
    );
    startInterval();
  };

  return (
    <div ref={wrapperRef}>
      {" "}
      <Section className="org-team-section" heading="ORGANIZACIONI TIM">
        <div className="org-team-slider">
          <OrgTeamArrow flippedX={true} className="arrow-top-right" />
          <OrgTeamArrow
            flippedX={false}
            flippedY={true}
            className="arrow-bottom-left"
          />
          <Hexagon isBig={true} rotate={0} className="bottom-left" />
          <Hexagon isBig={false} rotate={0} className="bottom-right" />
          <div className="org-team-cards">
            <CoordCard
              coordinator={{
                coordinatorImage,
                coordinatorFirstName,
                coordinatorLastName,
                coordinatorRole,
              }}
            />
            <TeamCard team={{ teamImage, teamName }} />
          </div>
          <div className="slider-controls">
            <button
              className="slider-left-arrow"
              onClick={goToPrevious}
            ></button>
            <button className="slider-right-arrow" onClick={goToNext}></button>
          </div>
        </div>
        <div className="mobile-org-team-slider">
          <HexagonMobile className="hexagon-mobile-top-right " />
          <HexagonMobile className="hexagon-mobile-bottom-left " />
          <div className="org-team-cards">
            <div className="upper-section">
              <button
                className="slider-left-arrow"
                onClick={goToPrevious}
              ></button>
              <CoordCard
                coordinator={{
                  coordinatorImage,
                  coordinatorFirstName,
                  coordinatorLastName,
                  coordinatorRole,
                }}
              />
              <button
                className="slider-right-arrow"
                onClick={goToNext}
              ></button>
            </div>

            <TeamCard team={{ teamImage, teamName }} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default OrgTeam;
